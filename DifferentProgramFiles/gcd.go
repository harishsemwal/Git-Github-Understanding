
package main

import "fmt"

func gcd(a, b int) int {
    for b != 0 {
        a, b = b, a%b
    }
    return a
}

func main() {
    var a, b int
    fmt.Print("Enter two numbers: ")
    fmt.Scan(&a, &b)
    fmt.Printf("GCD of %d and %d is %d", a, b, gcd(a, b))
}
