/**
 * 先删掉数组中的0；索引加1.再添加0
 * 时间复杂度 2n。假如全是零。就是先全删掉，再全push
 * @param {*} nums 
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (var i = 0; i < nums.length; i ++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            i--
            j++
        }
    }
    for (var t = 0; t < j; t ++) {
        nums.push(0)
    }
};
/**
 * 创建一个初始索引0
 * i是一直++的，只要不是0，j也++，j存的都是非0数
 * 将i不等于j的元素都置为0.
 * 大概就是将非0数往前排。剩下的全置为0
 * 时间复杂度为 n，因为i是一直++的
 * 空闲复杂度为 1，只创建了一个临时变量j
 * @param {*} nums 
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i ++ ) {
        if (nums[i]) {
            nums[j] = nums[i];
            if (i !== j) {
                nums[i] = 0
            }
            j++
        }
    }
};
