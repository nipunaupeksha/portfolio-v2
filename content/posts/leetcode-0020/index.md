---
title: LeetCode 20 - Valid Parentheses
description: Solution for LeetCode Problem 20
date: '2022-08-09'
draft: false
slug: '/pensieve/leetcode-0020'
tags:
  - DSA
  - Java
---

## Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['`, and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

```example
Input: s = "()"
Output: true
```

```example
Input: s = "()[]{}"
Output: true
```

```example
Input: s = "(]"
Output: false
```

**Constraints**
- `1 <= s.length <= 10⁴`
- `s` consists of parentheses only `()[]{}`

## Solution

```java
class Solution{
    public boolean isValid(String s){
        Stack<Character> stack =  new Stack<>();
        for(char c: s.toCharArray()){
            if(c == '(' || c == '[' || c == '{'){
                stack.push(c);
            } else if(c == ')' && !stack.isEmpty() && stack.peek() == '('){
                stack.pop();
            } else if(c == ']' && !stack.isEmpty() && stack.peek() == '['){
                stack.pop();
            } else if(c == '}' && !stack.isEmpty() && stack.peek() == '{'){
                stack.pop();
            } else{
                return false;
            }
        }
        return stack.isEmpty();
    }
}
```