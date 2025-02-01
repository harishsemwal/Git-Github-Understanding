
function fibonacci(n: number): void {
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        console.log(a);
        [a, b] = [b, a + b];
    }
}

const n = parseInt(prompt("Enter the number of terms:")!);
fibonacci(n);
