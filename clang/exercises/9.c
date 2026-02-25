#include <stdbool.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>

bool isPalindrome(int x) {
  int initial = x;
  int64_t reverse = 0;
  int last_digit;

  if (x < 0) {
    return false;
  }

  while (x != 0) {
    last_digit = x % 10;
    reverse *= 10;
    reverse += last_digit;
    x /= 10;
  }

  return initial == reverse;
}

int main() {
  printf("Testing isPalindrome:\n");
  printf("121: %s\n", isPalindrome(121) ? "true" : "false");
  printf("-121: %s\n", isPalindrome(-121) ? "true" : "false");
  printf("10: %s\n", isPalindrome(10) ? "true" : "false");
  printf("12321: %s\n", isPalindrome(12321) ? "true" : "false");
  return 0;
}
