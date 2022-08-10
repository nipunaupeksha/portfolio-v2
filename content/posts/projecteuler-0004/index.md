---
title: Project Euler 4 - Largest Palindrome Product
description: Solution to Project Euler Problem 4
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0004'
tags:
  - DSA
  - Java
---

## Description

A palindromic number reads the same both ways. The largest palindrome made from the product of two digit numbers is 9009 = 91 x 99.

Find the largest palindrome made from the product of two 3-digit numbers.

## Solution

```java
class Solution{

    public static void main(String args[]){
        System.out.println(new Solution().getSolution());
    }

    public String getSolution(){
        int maxPalindrome = -1;
        for(int i = 100; i < 1000; i++){
            for(int j = 100; j < 1000; j++){
                int prod = i * j;
                if(isPalindrome(prod) && prod >  maxPalindrome){
                    maxPalindrome = prod;
                }
            }
        }
        return Integer.toString(maxPalindrome);
    }

    private static boolean isPalindrome(int n){
        String s = Integer.toString(n);
        return s.equals(reverse(s));
    }

    private static String reverse(String s){
        return new StringBuilder(s).reverse().toString();
    }
}
```

Answer → 906609