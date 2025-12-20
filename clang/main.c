#include <math.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

// TODO
int count_digits_fp(int n) {
  if (n == 0)
    return 1;
  return floor(log10(abs(n))) + 1;
}

bool isPalindrome(int x) {
  if (x < 0)
    return false;
  if (x < 10)
    return true;

  int initial_digits = count_digits_fp(x);

  for (int i = 0; i < initial_digits; i++) {
    int digits = count_digits_fp(x);
    int currentNum = x % 10;
    int reverseNum = x % (10 * (digits - 1));

    printf("%d %d %d\n", digits, currentNum, reverseNum);
  }

  return true;
}
// ^TODO

int main() {
  int nums[4] = {123, 121, 10, 9};
  for (int i = 0; i < 4; i++) {
    int num = nums[i];
    printf("%d %s a palindrome\n", num, isPalindrome(num) ? "is" : "is not");
  }

  return 0;
}
