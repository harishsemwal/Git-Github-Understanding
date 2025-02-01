
fun isPrime(n: Int): Boolean {
    if (n <= 1) return false
    for (i in 2..Math.sqrt(n.toDouble()).toInt()) {
        if (n % i == 0) return false
    }
    return true
}

fun main() {
    print("Enter a number: ")
    val num = readLine()!!.toInt()
    if (isPrime(num))
        println("\$num is a prime number.")
    else
        println("\$num is not a prime number.")
}
