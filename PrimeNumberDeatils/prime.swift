
import Foundation

func isPrime(_ n: Int) -> Bool {
    if n <= 1 { return false }
    for i in 2...Int(sqrt(Double(n))) {
        if n % i == 0 { return false }
    }
    return true
}

print("Enter a number: ", terminator: "")
if let input = readLine(), let num = Int(input) {
    if isPrime(num) {
        print("\(num) is a prime number.")
    } else {
        print("\(num) is not a prime number.")
    }
}
