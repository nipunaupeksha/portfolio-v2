---
title: Project Euler 10 - Summation of primes
description: Solution to Project Euler Problem 10
date: '2022-08-11'
draft: false
slug: '/pensieve/projecteuler-0010'
tags:
  - DSA
  - Java
---

## Description

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

## Solution

```java
class Solution{
    
    private final int LIMIT = 2 * (int)Math.pow(10, 6);
    
    public static void main(String args[]){
        
        System.out.println(new Solution().getSolution());
    }
    
    public String getSolution(){
        
        long sum = 2;
        for(int i = 3;i < LIMIT;i+=2){
            if(isPrime(i)){
                sum += i;
            }
        }
        return Long.toString(sum);
    }
    
    public boolean isPrime(int n){
        
        if(n < 0) throw new IllegalArgumentException("Negative number");
        if(n == 0 || n == 1) return false;
        else if(n == 2) return true;
        else {
            if(n % 2 == 0) return false;
            for(int i = 3, end = (int)Math.sqrt(n); i < end; i+=2){
                if (n % i == 0) return false;
            }
        }
        return true;
    }
}
```

Answer → 143064094790