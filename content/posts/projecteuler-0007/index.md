---
title: Project Euler 7 - 10001st prime
description: Solution to Project Euler Problem 7
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0007'
tags:
  - DSA
  - Java
---

## Description

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13 we can see that the 6th prime number is 13.

What is the 10001st prime number?

## Solution


```java
class Solution{

    public static void main(String args[]){
        System.out.println(new Solution().getSolution());
    }

    public String getSolution(){
        for(int i = 2, count = 0; ;i++){
            if(isPrime(i)){
                count ++;
            }
            if(count == 10001) return Integer.toString(i);
        }
    }

    public static boolean isPrime(int n){
        if(n < 0) throw new IllegalArgumentException("Negative number");
        if(n == 0 || n == 1) return false;
        else if (n == 2) return true;
        else {
            if(n % 2 == 0) return false;
            for(int i = 3, end = (int)Math.sqrt(n); i < end; i+=2){
                if(n % i == 0) return false;
            }
            return true;
        }
    }
}
```

Answer → 103813