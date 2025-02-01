
use std::io;

fn is_prime(n: i32) -> bool {
    if n <= 1 {
        return false;
    }
    for i in 2..=((n as f64).sqrt() as i32) {
        if n % i == 0 {
            return false;
        }
    }
    true
}

fn main() {
    let mut input = String::new();
    println!("Enter a number: ");
    io::stdin().read_line(&mut input).unwrap();
    let num: i32 = input.trim().parse().unwrap();
    
    if is_prime(num) {
        println!("{} is a prime number.", num);
    } else {
        println!("{} is not a prime number.", num);
    }
}
