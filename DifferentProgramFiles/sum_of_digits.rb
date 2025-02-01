
puts "Enter a number:"
num = gets.chomp.to_i
sum = num.digits.sum
puts "Sum of digits: #{sum}"
