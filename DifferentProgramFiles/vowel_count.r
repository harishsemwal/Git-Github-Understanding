
cat("Enter a string: ")
str <- tolower(readLines("stdin", n=1))
vowels <- c('a', 'e', 'i', 'o', 'u')
count <- sum(strsplit(str, NULL)[[1]] %in% vowels)
cat("Number of vowels:", count, "\n")
