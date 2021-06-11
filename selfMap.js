/**
 * 实现map
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} fn 回调函数.
 * @param {Object} context 对象
 * @returns {Array} 返回的是每个数组元素调用回调函数后，回调函数返回的结果组成的数组.
 * @example
 *
 * Array.prototype.map = selfMap
 *
 * [1,2,3].map(item=>item+1 )
 * // => Logs [2,3,4]
 */

function selfMap(fn, context) {
  const arr = Array.prototype.slice.call(this)
  const array = new Array()
  for (let i=0;i<arr.length;i++) {
    if (!arr.hasOwnProperty(i)) {continue} //处理稀释数组
    array[i] = fn.call(context,arr[i],i,this)
  }
  return array
}

export function selfMap2(fn,context) {
  const arr = Array.prototype.slice.call(this)
  return arr.reduce((pre,current,index) => [...pre,fn.call(context,current,index,this)],[])
}


module.exports  = selfMap
