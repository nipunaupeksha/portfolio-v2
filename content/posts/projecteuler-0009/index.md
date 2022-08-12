---
title: Project Euler 9 - Special Pythagorean triplet
description: Solution to Project Euler Problem 9
date: '2022-08-11'
draft: false
slug: '/pensieve/projecteuler-0009'
tags:
  - DSA
  - Java
---

## Description

A Pythagorean triplet is a set of three natural numbers, *a < b < c*, for which,

*a² + b² = c²*
For example, 3² + 4² = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which *a + b + c = 1000*.
Find the product *abc*.

## Solution

```java
class Solution{
    
    private final int LIMIT = 1000;
    
    public static void main(String args[]){
        
        System.out.println(new Solution().getSolution());
    }
    
    public String getSolution(){
        
        for(int a = 1; a < LIMIT; a++){
            for(int b = a + 1; b < LIMIT; b++){
                int c = LIMIT - a - b;
                if( a * a + b * b == c * c){
                    return Integer.toString(a * b * c);
                }
            }
        }
        throw new AssertionError("Not Found");
    }
}
```

Answer → 31875000