
object PrimeCheck {
  def isPrime(n: Int): Boolean = {
    if (n <= 1) return false
    for (i <- 2 to math.sqrt(n).toInt) {
      if (n % i == 0) return false
    }
    true
  }

  def main(args: Array[String]): Unit = {
    print("Enter a number: ")
    val num = scala.io.StdIn.readInt()
    println(if (isPrime(num)) s"$num is a prime number." else s"$num is not a prime number.")
  }
}
