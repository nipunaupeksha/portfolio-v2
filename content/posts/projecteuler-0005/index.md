---
title: Project Euler 5 - Smallest Multiple
description: Solution to Project Euler Problem 5
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0005'
tags:
  - DSA
  - Java
---

## Description

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder. What is the smallest positive number that is *evenly divisible** by all of the numbers from 1 to 20?

## Solution

```java
import java.math.BigInteger;

class Solution{

    public static void main(String args[]){
        System.out.println(new Solution().getSolution());
    }

    /*
     * The smallest number n that is evenly divisible by every number is a set {k1, k2, k3, ..., k_m}
     * is also known as the lowest common multiple (LCM) of the set of numbers.
     * LCM(x,y) = x*y/GCD(x,y)
     * When LCM is applied to a collection of numbers, it is communtative, associative, and idempotent.
     * Hence, LCM(k1,k2,k3,...,k_m) = LCM(...(LCM(LCM(k1,k2),k3)...), k_m)
     */

    public String getSolution(){
        BigInteger allLcm = BigInteger.ONE;
        for(int i=1;i<20;i++){
            allLcm = lcm(BigInteger.valueOf(i), allLcm);
        }
        return allLcm.toString();
    }

    private static BigInteger lcm(BigInteger x, BigInteger y){
       return x.divide(x.gcd(y)).multiply(y);
    }
}
```

Answer → 232792560