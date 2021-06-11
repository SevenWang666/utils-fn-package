
/**
 * 判断对象类型
 *
 * @since 0.1.0
 * @category Function
 * @param {string} type 数据类型.
 * @param {Object} target 对象
 * @returns {boolean} 返回判断结果.
 * @example
 *
 * console.log(isType('Array',[]))
 * // => Logs 'true'
 */
function isType(type, target) {
  return `[object ${type}]` === Object.prototype.toString.call(target)
}

module.exports  = isType
