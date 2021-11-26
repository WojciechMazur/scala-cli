package scala.build.preprocessing.directives

import scala.build.errors.BuildException
import scala.build.preprocessing.{ScopePath, Scoped}

trait DirectiveHandler[T] {
  def name: String
  def description: String
  def descriptionMd: String = description
  def usage: String
  def usageMd: String       = s"`$usage`"
  def examples: Seq[String] = Nil

  // Strict / using_directives-based directives
  def keys: Seq[String]

  def handleValues(
    directive: StrictDirective,
    path: Either[String, os.Path],
    cwd: ScopePath
  ): Either[BuildException, (Option[T], Seq[Scoped[T]])]

}
