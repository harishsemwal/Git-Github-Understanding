
use std::io;

fn main() {
    println!("Enter a decimal number:");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    let num: i32 = input.trim().parse().unwrap();
    println!("Binary equivalent: {:b}", num);
}
