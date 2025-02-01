
def is_prime(n)
    return false if n <= 1
    (2..Math.sqrt(n)).each do |i|
        return false if n % i == 0
    end
    true
end

print "Enter a number: "
num = gets.to_i
if is_prime(num)
    puts "#{num} is a prime number."
else
    puts "#{num} is not a prime number."
end
