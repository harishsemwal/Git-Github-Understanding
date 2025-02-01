
import Foundation

func gcd(_ a: Int, _ b: Int) -> Int {
    return b == 0 ? a : gcd(b, a % b)
}

func lcm(_ a: Int, _ b: Int) -> Int {
    return (a * b) / gcd(a, b)
}

print("Enter two numbers: ", terminator: "")
if let input = readLine()?.split(separator: " ").compactMap({ Int($0) }), input.count == 2 {
    print("LCM of \(input[0]) and \(input[1]) is \(lcm(input[0], input[1]))")
}
