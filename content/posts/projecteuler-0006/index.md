---
title: Project Euler 6 - Sum square difference
description: Solution to Project Euler Problem 6
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0006'
tags:
  - DSA
  - Java
---

## Description

The sum of the squares of the first ten natural numbers is,

1² + 2² + 3² + ... + 10² = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + 3 + ... + 10)² = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is, 3025 - 385 = 2640.

Find the difference between the sum of the squares of the fist one hundred natural numbers and the squares of the sum.

## Solution

```java
class Solution{
    
    public static void main(String args[]){
        System.out.println(new Solution().getSolution());
    }

    private static final int N = 100;

    public String getSolution(){
        int sum = 0;
        int sum2 = 0;
        for(int i = 1;i <= N; i++){
            sum += i;
            sum2 += i * i;
        }
        return Integer.toString(sum * sum - sum2);
    }
}
```

Answer → 25164150