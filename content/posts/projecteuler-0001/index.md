---
title: Project Euler 1 - Multiples of 3 or 5
description: Solution to Project Euler Problem 1
date: '2022-08-10'
draft: false
slug: '/pensieve/projecteuler-0001'
tags:
  - DSA
  - Java
---

## Description

If we list all the natural numbers below that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.

Find the sum of all the multiples 3 or 5 below 1000.

## Solution

```java
class Solution{

    public String getAnswer(){
        int sum = 0;
        for(int i = 0; i < 1000; i++){
            if(i % 3 == 0 || i % 5 == 0){
                sum += i;
            }
        }
        return Integer.toString(sum);
    }

    public static void main(String args[]){
        System.out.println(new Solution().getAnswer());
    }
}
```

Answer → 233168