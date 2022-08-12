---
title: LeetCode 283 - Move Zeros
description: Solution to LeetCode Problem 283
date: '2022-08-10'
draft: false
slug: '/pensieve/leetcode-0283'
tags:
  - DSA
  - Java
---

## Description

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

```example
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```
```example
Input: nums = [0]
Output: [0]
```

**Constraints:**
1 <= nums.length <= 10⁴
-2³¹ <= nums[i] <= 2³¹ - 1
 

**Follow up:**
Could you minimize the total number of operations done?

## Solution

```java
class Solution {
    public void moveZeroes(int[] nums) {
        
        int n = nums.length;
        if(n<2) return;
        int L = 0;
        int R = 1;
        while(R<n){
            if(nums[L]!=0){
                L++; 
                R++;
            }else if(nums[R]==0){
                R++;
            }else{
                int temp = nums[R];
                nums[R] = nums[L];
                nums[L] = temp;
            }
        }
    }
}
```