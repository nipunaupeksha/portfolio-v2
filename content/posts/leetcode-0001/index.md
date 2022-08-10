---
title: LeetCode 1 - Two Sum
description: Solution for LeetCode Problem 1
date: '2022-08-09'
draft: false
slug: '/pensieve/leetcode-0001'
tags:
  - DSA
  - Java
---

## Description

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`.*

You may assume that each input would have ***exactly one solution***, and you may not use the *same* element twice.

You can return the answer in any order.

```example
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0,1]
```
```example
Input: nums = [3,2,4], target = 6
Output: [1,2]
```
```example
Input: nums = [3,3], target = 6
Output: [0,1]
```
**Constraints**
- `2 <= nums.length <= 10⁴`
- `-10⁹ <= nums[i] <= 10⁹`
- `-10⁹ <= target <= 10⁹`
- **Only one valid answer exists**

**Follow-up:** Can you come up with an algorithm that is less than `O(n²)` time complexity?

## Solution

### Solution 1 - Brute Force Solution

```java
class Solution{
    public int[] twoSum(int[] nums, int target){
        int arr[] = new int[2];
        for(int i=0; i<nums.length; i++){
            for(int j=i+1; j<nums.length; j++){
                if(nums[i]+nums[j]==target){
                    arr[0] = i;
                    arr[1] = j;
                }
            }
        }
        return arr;
    }
}
```

### Solution 2 - Using HashMap

```java
class Solution{
    public int[] twoSum(int[] nums, int target){
        int arr[] = new int[2];
        int n = nums.length;
        Map<Integer,Integer> hm = new HashMap<>();
        for(int i=0; i<n; i++){
            if(hm.containsKey(nums[i])){
                arr[0] = hm.get(nums[i]);
                arr[1] = i;
                break;
            }else{
                hm.put(target-nums[i], i);
            }
        }
        return arr;
    }
}
```