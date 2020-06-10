const reverseNumber = (x) => {
  const reversed = Math.abs(x).toString().split('').reverse().join('')
  if (x > 0) {
    //  如果输入的是正数
    //  Math.pow(2, 31) 判断是否溢出
    //  如果是正数且没溢出返回 reverses,反之返回 0
    return reversed < Math.pow(2, 31) ? reversed : 0
  } else {
    //  如果是正数且没溢出返回 reverses,反之返回 0
    return reversed <= Math.pow(2, 31) ? -reversed : 0
  }
}