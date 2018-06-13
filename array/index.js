//  调用Array.isArray()判断一个对象是否是数组
let arr = [1,2,3]
console.log(Array.isArray(arr)) //true

// 由字符串生成数组 调用字符串对象的split()方法可以生成数组
let sentence = 'the quick brown for jumped over the lazy dog'
let words = sentence.split(' ')
console.log(words)
for (let i = 0; i < words.length; i++) {
  console.log(`word ${i} : ${words[i]}`)
}

// 数组浅复制，新数组依然指向原来的数组
let nums = []
for (let i = 0; i < 10; i++) {
  nums[i] = i + 1
}
let samenums = nums
nums[0] = 100
console.log(samenums[0]) // 100
console.log(samenums === nums) // true

// 数组深复制，将原数组中的每一个元素都复制一份到新数组中
function copy(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i]
  }
}
let nums = []
for (let i = 0; i < 10; i++) {
  nums[i] = i + 1
}
let samenums = []
copy(nums, samenums)
nums[0] = 100
console.log(samenums[0]) // 1
console.log(samenums === nums) // false

// 查找元素 
// indexOf() 用来查找传进来的参数在目标数组中是否存在，如果
// 目标数组中包含该参数，就返回该元素在数组中的索引，如果不包含，就返回-1
let names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer']
console.log(names.indexOf('David')) // 0
console.log(names.indexOf('Raymond')) // 2
console.log(names.indexOf('jxufe')) // -1

// 数组的字符串表示
// 将数组转化为字符串：join()、toString()，均返回一个包含数组所有元素的字符串,join()若未传入参数各元素之间用逗号隔开
let names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer']
let nameStr = names.join()
console.log(nameStr) // David,Cynthia,Raymond,Clayton,Jennifer
let nameStr2 = names.toString()
console.log(nameStr2) // David,Cynthia,Raymond,Clayton,Jennifer

// 由已有数组创建新数组
// concat()和splice()方法允许通过已有数组创建新数组。
// cancat()方法可以合并多个数组创建一个新数组
// splice()方法截取一个数组的子集创建一个新数组 方法的第一个参数是截取的起始索引，第二个参数是截取的长度，该方法改变了原数组的值
let cisDept = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer']
let dmpDept = ['Mike', 'Danny', 'Terrill']
let itDiv = cisDept.concat(dmpDept)
console.log(itDiv) //[ 'David','Cynthia','Raymond','Clayton','Jennifer','Mike','Danny','Terrill' ]
console.log(cisDept) // [ 'David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer' ]

let itDiv = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer', 'Mike', 'Danny', 'Terrill']
let dmpDept = itDiv.splice(3, 3)
console.log(dmpDept) // [ 'Clayton', 'Jennifer', 'Mike' ]
console.log(itDiv) // [ 'David', 'Cynthia', 'Raymond', 'Danny', 'Terrill' ]

// 为数组添加元素 push() unshift()
// push()方法会将一个元素添加到数组末尾
let nums = [1, 2, 3, 4, 5]
nums.push(6)
console.log(nums) // [ 1, 2, 3, 4, 5, 6 ]

// 不使用提供的api向数组的头部添加元素
let nums = [2, 3, 4, 5]
let num = 1
let len = nums.length
for (let i = len; i >= 0; i--) {
  nums[i] = nums[i - 1]
}
nums[0] = num
console.log(nums) // [ 1, 2, 3, 4, 5 ]

// unshift()可以将元素添加到数组的头部
let nums = [2, 3, 4, 5]
let num = 1
nums.unshift(num)
console.log(nums) // [ 1, 2, 3, 4, 5 ]

// 从数组中删除元素
// pop() 可以删除数组末尾的元素
let nums = [1, 2, 3, 4, 5]
nums.pop()
console.log(nums) // [ 1, 2, 3, 4 ]

// 不使用api将数组第一个元素删除
let nums = [6, 1, 2, 3, 4, 5]
for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i + 1]
}
nums.pop()
console.log(nums) // [ 1, 2, 3, 4, 5 ]

// shift() 删除数组的第一个元素
let nums = [6, 1, 2, 3, 4, 5]
nums.shift()
console.log(nums) // [ 1, 2, 3, 4, 5 ]

// 从数组中间位置添加和删除元素
/**
 * splice()方法为参数添加元素，需提供如下参数
 *    1. 起始索引（也就是你希望开始添加元素的地方）
 *    2. 需要删除的元素的个数（添加元素时该参数设为0）
 *    3. 想要添加进数组的元素
 */
// 添加元素
let nums = [1, 2, 3, 7, 8, 9]
var newElements = [4, 5, 6]
nums.splice(3, 0, newElements)
console.log(nums) // [ 1, 2, 3, [ 4, 5, 6 ], 7, 8, 9 ]

let nums = [1, 2, 3, 7, 8, 9]
nums.splice(3, 0, 4, 5, 6)
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 删除元素
let nums = [1, 2, 3, 7, 8, 9, 4, 5, 6]
nums.splice(3, 3)
console.log(nums) // [ 1, 2, 3, 4, 5, 6 ]

// 为数组排序
// reverse() 将数组中的元素的顺序进行翻转
let nums = [1, 2, 3, 4, 5, 6]
nums.reverse()
console.log(nums) // [ 6, 5, 4, 3, 2, 1 ]

// sort() 按照字典顺序对元素进行排序的，即它假定元素都是字符串类型，即使元素是数字类型，也会被先强制转换成字符串类型
let names = ['David', 'Cynthia', 'Raymond', 'Clayton', 'Jennifer']
names.sort()
console.log(names) // [ 'Clayton', 'Cynthia', 'David', 'Jennifer', 'Raymond' ]

let nums = [3, 1, 2, 100, 4, 200]
nums.sort()
console.log(nums) // [ 1, 100, 2, 200, 3, 4 ]

// 数字大小排序 升序
function compare(num1, num2) {
  return num1 - num2
}
let nums = [3, 1, 2, 100, 4, 200]
nums.sort(compare)
console.log(nums) //  1, 2, 3, 4, 100, 200 ]


// 不生成新数组的迭代器方法

// forEach() 接受一个函数作为参数，对数组中的每个元素使用该函数
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = []
nums.forEach((num) => {
  console.log(num * num) //1 4 9 16 25 36 49 64 81 100
  newNums.push(num * num)
})
console.log(newNums) // [ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 ]
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// every() 
// 接受一个返回值为布尔类型的函数，对数组中的每一个元素使用该函数。
// 如果对所有的元素，该函数均返回true，则该方法返回true
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let flag = nums.every((num) => {
  return num % 2 === 0
})
if (flag) { // flase
  console.log('true')
} else {
  console.log('flase')
}
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// some() 接受一个返回值为布尔类型的函数，只要一个元素使得函数返回true，该方法就返回true
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let flag = nums.some((num) => {
  return num % 2 === 0
})
if (flag) { // true
  console.log('true')
} else {
  console.log('flase')
}
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// reduce() 接受一个函数，返回一个值
// 该方法会从一个累加值开始，不断对累加值和数组中的后续元素调用该函数，直到数组中的最后一个元素，最后返回得到的累加值
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = nums.reduce((total, num) => {
  return total + num
})
console.log(sum) // 55
console.log(nums) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


// 生成新数组的迭代器方法

// map() 对数组中的每一个元素使用某个函数，最终返回一个新数组，该数组的元素是对原有元素应用某个函数得到的结果
let grades = [77, 65, 81, 92, 83]
let newGrades = grades.map((grade) => {
  return grade += 5
})
console.log(newGrades) // [ 82, 70, 86, 97, 88 ]
console.log(grades) // [ 77, 65, 81, 92, 83 ]

// filter() 传入一个返回值为布尔类型的函数，当对数组中的所有元素应用该函数时，结果均为true时，返回一个新数组，该数组包含应用该函数后结果未true的元素
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newNums = nums.filter(num => {
  return num % 2 === 0
})
console.log(newNums) // [ 2, 4, 6, 8, 10 ]