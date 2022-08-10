---
title: LeetCode 4 - Median of two sorted arrays
description: Solution for LeetCode Problem 4
date: '2022-08-09'
draft: false
slug: '/pensieve/leetcode-0004'
tags:
  - DSA
  - Java
---

## Description

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays.

The overall run complexity should be `O(log(m+n))`

```example
Input: nums1 = [1,3], nums2 = [2]
Output: 2.0000
Explanation: merged array = [1,2,3] and median is 2.
```

```example
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3)/2 = 2.5.
```

**Constraints**
- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m+n <=2000`
- `-10⁶ <= nums1[i], nums2[i] <= 10⁶`

## Solution

### Solution 1 - Brute force (Not O(log(n+m)))

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int temp[] = new int[nums1.length + nums2.length];
        for(int i=0;i<nums1.length;i++){
            temp[i] = nums1[i];
        }
        for(int i=nums1.length;i<temp.length;i++){
            temp[i] = nums2[i-nums1.length];
        }
        Arrays.sort(temp);
        if(temp.length%2==1){
            return temp[(temp.length+1)/2 -1];
        }
        int n = (temp.length)/2 -1 ;
        return (double)(temp[n] + temp[n+1])/2;
    }
}
```

### Solution 2 - O(log(n+m))

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        if(nums1.length>nums2.length){
            int temp[] = nums1;
            nums1 = nums2;
            nums2 = temp;
        }
        int lo = 0, hi = nums1.length;
        int combinedLength = nums1.length + nums2.length;
        while(lo <= hi){
            int partX = (lo + hi)/2;
            int partY = (combinedLength + 1)/2 - partX;
            int leftX = getMax(nums1, partX);
            int rightX = getMin(nums1, partX);
            
            int leftY = getMax(nums2, partY);
            int rightY = getMin(nums2, partY);
            
            if(leftX <= rightY && leftY <= rightX){
                if(combinedLength %2 == 0){
                    return (Math.max(leftX, leftY) + Math.min(rightX, rightY))/2.0;
                }
                return Math.max(leftX, leftY);
            } 
            if(leftX > rightY){
                hi = partX - 1;
            }else{
                lo = partX + 1;
            }
        }
        return -1;
    }
    
    private int getMax(int[] nums, int partition){
        if(partition == 0){
            return (int)Double.NEGATIVE_INFINITY;
        }else{
            return nums[partition - 1];
        }
    }
    
    private int getMin(int[] nums, int partition){
        if(partition == nums.length){
            return (int)Double.POSITIVE_INFINITY;
        }else{
            return nums[partition];
        }
    }
}
```