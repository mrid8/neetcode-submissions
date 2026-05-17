class Solution {
public:
    bool hasDuplicate(vector<int>& nums) {
        unordered_set<int> uniqueVal;
        for(int i = 0; i < nums.size(); i++){
            if(uniqueVal.count(nums[i]))
                return true;
            uniqueVal.insert(nums[i]);
        }
        return false;
    }
};