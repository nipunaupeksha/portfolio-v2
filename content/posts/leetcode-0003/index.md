---
title: LeetCode 3 - Longest Substring Without Repeating Characters
description: Solution to LeetCode Problem 3
date: '2022-08-09'
draft: false
slug: '/pensieve/leetcode-0003'
tags:
  - DSA
  - Java
---

## Description

Given a string `s`, find the length of the **longest substring** without repeating characters.

```example
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
```

```example
Input: s = "bbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

```example
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

**Constaints:**
- `0 <= s.length <= 5 * 10⁴`
- `s` consists of English letters, digits, symbols and spaces.

## Solution

```java
class Solution{
    public int lengthOfLongestSubstring(String s){
        int n = s.length();
        Map<Character, Integer> map = new HashMap<>();
        int L = 0, R = 0, ans = 0;
        while(R<n){
            if(map.containsKey(s.charAt(R))){
                L = Math.max(map.get(s.charAt(R)), L);
            }
            ans = Math.max(ans, R-L+1);
            map.put(s.charAt(R), R+1);
            R++;
        }
        return ans;
    }
}
```