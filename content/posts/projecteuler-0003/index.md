---
title: Project Euler 3 - Largest Prime Factor
description: Solution to Project Euler Problem 3
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0003'
tags:
  - DSA
  - Java
---

## Description

The prime factors of 13195 are 5, 7, 13, and 29. What is the largest prime factor of the number 600851475143?

## Solution

```java
class Solution{

    public static void main(String args[]){
        System.out.println(new Solution().getSolution());
    }

    public String getSolution(){
        long n = 600851475143l;
        while(true){
            long p = smallestFactor(n);
            if(p < n){
                n /= p;
            }else{
                return Long.toString(n);
            }
        }
    }

    private static long smallestFactor(long n){
        if(n<=1){
            throw new IllegalArgumentException();
        }
        for(long i = 2, end = (int)Math.sqrt(n); i <= end; i++){
            if(n % i == 0){
                return i;
            }
        }
        return n;
    }
}
```

Answer → 6857