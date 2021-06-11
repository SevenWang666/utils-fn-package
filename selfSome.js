/**
 * 实现filter
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} fn 回调函数.
 * @param {Object} context 对象
 * @returns {Array} 返回的是每个数组元素调用回调函数后，满足回调函数条件的元素组成的数组.
 * @example
 *
 * Array.prototype.filter = selfFilter
 *
 * Array.prototype.selfFilter = selfFilter
 console.log([2,4,6,7,3,10].selfFilter((item) => item%2===0))
 */

function selfFilter(fn, context) {
  const arr = Array.prototype.slice.call(this)
  const array = new Array()
  for (let i=0;i<arr.length;i++) {
    if (!arr.hasOwnProperty(i)) {continue} //处理稀释数组
    fn.call(context,arr[i],i,this) && array.push(arr[i])
  }
  return array
}

export function selfFilter2(fn,context) {
  const arr = Array.prototype.slice.call(this)
  return arr.reduce((pre,current,index) => {
    if (fn.call(context,current,index,this)) {
      pre.push(current)
    }
    return pre},[])
}

module.exports  = selfFilter
