package scala.build.preprocessing.directives
import scala.build.errors.BuildException
import scala.build.options.{BuildOptions, ScalaNativeOptions}
import scala.build.preprocessing.{ScopePath, Scoped}

case object UsingScalaNativeOptionsDirectiveHandler extends UsingDirectiveHandler {
  def name: String = "Scala Native options"

  def description: String = "Add Scala Native options"

  def usage: String = "using native-gc _value_ | using native-version _value_"

  override def usageMd: String =
    """`using native-gc` _value_
      | 
      |`using native-version` _value_
      |
      |`using native-compile` _value1_ _value2_
      |
      |`using native-linking` _value1_ _value2_""".stripMargin

  override def examples: Seq[String] = Seq(
    "using native-version 0.4.0"
  )

  def handle(directive: Directive, cwd: ScopePath): Option[Either[BuildException, BuildOptions]] =
    directive.values match {
      case Seq(param @ "native-gc", value @ _*) =>
        if (value.size == 1) {
          val options = BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              gcStr = Some(value.head)
            )
          )
          Some(Right(options))
        }
        else Some(Left(SingleValueExpected(param, value)))
      case Seq(param @ "native-version", value @ _*) =>
        if (value.size == 1) {
          val options = BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              version = Some(value.head)
            )
          )
          Some(Right(options))
        }
        else Some(Left(SingleValueExpected(param, value)))
      case Seq(param @ "native-compile", value @ _*) =>
        val options = BuildOptions(
          scalaNativeOptions = ScalaNativeOptions(
            compileOptions = value.toList
          )
        )
        Some(Right(options))
      case Seq(param @ "native-linking", value @ _*) =>
        val options = BuildOptions(
          scalaNativeOptions = ScalaNativeOptions(
            linkingOptions = value.toList
          )
        )
        Some(Right(options))
      case _ =>
        None

    }

  override def keys: Seq[String] =
    Seq("native-gc", "native-version", "native-compile", "native-linking")

  override def handleValues(
    directive: StrictDirective,
    path: Either[String, os.Path],
    cwd: ScopePath
  ): Either[BuildException, (Option[BuildOptions], Seq[Scoped[BuildOptions]])] = {
    val scalaNativeOptions =
      DirectiveUtil.numericValues(directive.values, path, cwd).toList ++
        DirectiveUtil.stringValues(directive.values, path, cwd).toList
    directive.key match {
      case "native-gc" if scalaNativeOptions.size == 1 =>
        Right(
          Some(BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              gcStr = Some(scalaNativeOptions.head._1)
            )
          )),
          Seq.empty
        )
      case "native-version" if scalaNativeOptions.size == 1 =>
        Right(
          Some(BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              version = Some(scalaNativeOptions.head._1)
            )
          )),
          Seq.empty
        )
      case "native-compile" => Right(
          Some(BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              compileOptions = scalaNativeOptions.map(_._1)
            )
          )),
          Seq.empty
        )
      case "native-linking" =>
        val res = Right(
          Some(BuildOptions(
            scalaNativeOptions = ScalaNativeOptions(
              linkingOptions = scalaNativeOptions.map(_._1)
            )
          )),
          Seq.empty
        )
        res
      case "native-version" =>
        Left(SingleValueExpected("native-version", scalaNativeOptions.map(_._1)))
      case "native-gc" => Left(SingleValueExpected("native-gc", scalaNativeOptions.map(_._1)))
    }
  }

}

final case class SingleValueExpected(param: String, values: Seq[String]) extends BuildException(
      s"Expected single value for $param but found $values"
    )
