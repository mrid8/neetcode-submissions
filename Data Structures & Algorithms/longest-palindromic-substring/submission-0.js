class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    longestPalindrome(s) {
        let resLen = 0, resIdx = 0;
        // odd length
        for(let i = 0; i < s.length; i++){
            let l = i, r = i; 

            // start at the beginning of the word and if 
            while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)){
                if(r-l+1 > resLen){
                    resIdx = l;
                    resLen = r-l + 1
                }
                l--; 
                r++;
            }

            l = i , r = i + 1;
            while(l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)){
                if(r-l+1 > resLen){
                    resIdx = l;
                    resLen = r-l+1;
                }
                l--;
                r++;
            }
        }
        return s.substring(resIdx, resIdx+resLen);
    }
}
