#include <string.h>

int lengthOfLongestSubstring(char *s) {
  int n = strlen(s);
  // last index of each character, initialize to -1
  int last[256];
  for (int i = 0; i < 256; i++)
    last[i] = -1;

  int maxLen = 0;
  int start = 0; // left boundary of window

  for (int i = 0; i < n; i++) {
    unsigned char c = s[i];
    // if this character was seen inside current window, move start
    if (last[c] >= start) {
      start = last[c] + 1;
    }
    last[c] = i;
    int curLen = i - start + 1;
    if (curLen > maxLen) {
      maxLen = curLen;
    }
  }
  return maxLen;
}
