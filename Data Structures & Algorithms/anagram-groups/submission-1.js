class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // for every word in the array
        // we want to sort the letters: pots => opst
        // {opst: pots, tops, stop}
        // [pots, tops, stop]
        const sublists = {};
        for(let s of strs){
            let sortedWord = s.split('').sort().join('');
            if(!sublists[sortedWord]){
                sublists[sortedWord] = []
            }
            sublists[sortedWord].push(s);
        }
        return Object.values(sublists);
    }
}
