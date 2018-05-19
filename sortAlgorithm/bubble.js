// 冒泡排序
// 比较任何两个相邻的项，如果第一个大于第二个，则交换它们。元素项向上移动至正确的顺序。
let exampleArr=[8,94,15,88,55,76,21,39]
function sortArr(arr) {
  let len = exampleArr.length // {1}
  for (let i = 0; i < len; i++) { // {2}
    for (let j = 0; j < len - 1; j++) { // {3}
      if (arr[j] > [arr[j + 1]]) { // {4}
        swap(arr, j, j + 1) // {5}
      }
    }
  }
  return arr
}

function swap(arr, index1, index2) {
  // 解构复制 值交换
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
console.log(sortArr(exampleArr))

/**
 * 行{1}：用来存储数组的长度
 * 行{2}：外循环，会从数组的第一位迭代至最后一位，它控制了在数组中经过多少轮排序(应该是数组中的每项都经过一轮，轮数和数组长度一致，确保每项元素都参与比较)
 * 行{3}：内循环，将从第一位迭代至倒数第二位，内循环实际上进行当前项和下一项的比较行{4}
 * 行{5}：内循环进行当前项和下一项比较{4}，如果这两项顺序不对(当前项比下一项大)，则交换它们
 */

// 改进后
function sortArr2(arr) {
  let len = exampleArr.length // {1}
  for (let i = 0; i < len; i++) { // {2}
    for (let j = 0; j < len - 1 - i; j++) { // {3}
      if (arr[j] > [arr[j + 1]]) { // {4}
        swap(arr, j, j + 1) // {5}
      }
    }
  }
  return arr
}
console.log(sortArr2(exampleArr))
/**
 * 两个循环
 * 当i=0的时候，里面的循环完整执行，从j=0执行到j=6,这也就是第一遍排序，结果是将最大的数排到了最后，这一遍循环结束后的结果应该是[8,15,88,55,76,21,39,94]
 * 当i=1的时候，里面的循环再次完整执行，由于最大的数已经在最后了，没有必要去比较数组的最后两项，这也是j<arr.length-1-i的巧妙之处，结果是[8,15,55,76,21,39,88,94]
 * 说到这里，规律就清楚了，每次将剩下数组里面最大的一个数排到最后面，当第一个循环执行到最后的时候，也就是i=6,此时，j=0,只需要比较数组的第一和第二项，比较完毕，返回。
 */