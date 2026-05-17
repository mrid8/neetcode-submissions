class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let res = r;

        while(l <= r){
            // avg rate of k
            let k = Math.floor((r+l)/2)
            
            let totalTime = 0
            
            // calculate the total time it would take to complete all the piles based on the rate k
            for(let p of piles){
                // round up for total time in hrs so 3 bananas w/ rate of k (6), will be 3/6 -> 1hr
                totalTime += Math.ceil(p/k);
            }
            if(totalTime <= h){
                res = k
                r = k-1;
            } else{
                l = k+1;
            }
        }
        return res;
    }
}
