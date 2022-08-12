---
title: LeetCode 167 - Two Sum II - Input Array is Sorted
description: Solution to LeetCode Problem 167
date: '2022-08-10'
draft: false
slug: '/pensieve/leetcode-00167'
tags:
  - DSA
  - Java
---

## Description

Given a **1-indexed** array of integers `numbers` that is already ***sorted in non-decreasing order***, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index₁]` and `numbers[index₂]` where `1<= index₁ < index₂ <= numbers.length`.

Return *the indices of the two numbers*, `index₁` *and* `index₂`, ***added by one as an integer array*** `[index₁, index₂]` *of length 2*.

The tests are generated such that there is **exactly one solution**. You **may noy** use the same element twice.

Your solution must use only constant extra space.

```example
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index₁ = 1, index₂ = 2. We return [1,2].
```

```example
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index₁ = 1, index₂ = 3. We return [1, 3].
```

```example
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index₁ = 1, index₂ = 2. We return [1, 2].
```

**Constraints:**
- `2 <= numbers.length <= 3 * 104`
- `-1000 <= numbers[i] <= 1000`
- numbers is sorted in **non-decreasing order**.
-` -1000 <= target <= 1000`
- The tests are generated such that there is **exactly one solution**.


## Solution

```java
class Solution{
    public int[] twoSum(int[] numbers, int target){
        //define pointers
        int L = 0, n = numbers.length, R = n - 1;
        //two pointers find the sum
        while(L<R){
            int sum = numbers[L] + numbers[R];
            if(sum == target){
                return new int[]{L+1, R+1};
            }else if(sum<target){
                L++;
            }else{
                R--;
            }
        }
        return new int[]{-1,-1};
    }
}
```