class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # since the problem uses lowercase English letters, a fixed-size array of length 26 can be used to see how many
        # times each character appears
        # 2 strings are anagrams if their frequency arrays are identical, in other words, they appear the same number of times.
        # by using this array, we can group all the strings that share the same character counts. 

        # create a hash map where each key is a 26 length tuple representing the frequencies
        # values is the list of strings that belong to that anagram group
        # for each string, we
        # initialize the freq array to size 26 with all 0s
        # for each character in the string, increment the count of that corresponding index.
        # convert the frequency array to a tuple and use it as a key
        # append the string to the list associated with the key.

        res = defaultdict(list)

        for s in strs:
            count = [0] * 26
            # for each word, we create a freq array of 26 characters
            # cat - 101000...10000
            for c in s:
                # we get the index from 0-26 of the letter and increment the count
                count[ord(c) - ord('a')] += 1
            
            res[tuple(count)].append(s)
        
        return list(res.values())