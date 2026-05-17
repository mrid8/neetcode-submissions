class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // count the frequency of each element
        const count = {};
        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
            // {1: 1, 2: 2, 3: 3}
            // you see the number 1, 1 time etc.
        }
        // create array for the frequencies
        const freq = Array.from({length: nums.length + 1}, () => [])

        // place each number into respective bucket in array
        for(const n in count){
            freq[count[n]].push(Number(n));
            // freq of the number of times 1 appears has 1 stored.
            // you iterate through the count, and push the value next to the number of occurrences
            // [1:1, 2:2, 3:3]
            // [freq:num,...]
        }


        // collect top freq elements
        const res = []
        for(let i = freq.length - 1; i > 0; i--){
            for(const n of freq[i]){
                res.push(n);
                if(res.length === k){
                    return res;
                }
            }
        }
    }
}
