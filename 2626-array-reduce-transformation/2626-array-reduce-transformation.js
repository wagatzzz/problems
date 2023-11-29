/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    if(nums.length === 0){
        return init;
    }else{
        var val = init;
        for(i of nums){
            val = fn(val, i);
        }
    }
    return val;
};