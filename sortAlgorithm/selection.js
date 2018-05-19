// 选择排序
// 是一种原址比较排序算法，大致的思路是找到数据结构中的最小值并将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
let exampleArr=[8,94,15,88,55,76,21,39]
function selectionSort(arr) {
  let len = arr.length, indexMin
  for (let i = 0; i < len - 1; i++) {
    indexMin = i // //记录每次循环的第一个数为该次循环的最小值索引
    for (let j = i + 1; j < len; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j // //找到每次循环到的最小值
      }
    }
    swap(arr, indexMin, i)
  }
  return arr
}

function swap(arr, index1, index2) {
  // 解构复制 值交换
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

console.log(selectionSort(exampleArr)) // [ 8, 15, 21, 39, 55, 76, 88, 94 ]