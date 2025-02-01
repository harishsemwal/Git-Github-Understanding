
print "Enter a number: ";
my $num = <STDIN>;
chomp($num);
my $sum = 0;
for (my $i = 1; $i < $num; $i++) {
    $sum += $i if ($num % $i == 0);
}
print "Sum of factors of $num is $sum\n";
