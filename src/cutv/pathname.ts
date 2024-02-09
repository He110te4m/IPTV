import { getToday } from '~/date'

export function generatePathname(hash: string): string {
  const initTimestamp = getToday() // 使用默认值而不是 n，因为在此函数中未定义 n
  let totalCharCodeSum = 0
  let consecutiveCharCodeDifferenceSum = 0
  let previousCharCode = -1

  for (let i = 0; i < hash.length; i++) {
    const charCode = hash.charCodeAt(i)
    totalCharCodeSum += charCode

    if (previousCharCode !== -1) {
      consecutiveCharCodeDifferenceSum += previousCharCode - charCode
    }

    previousCharCode = charCode
  }

  const resultSum = totalCharCodeSum + consecutiveCharCodeDifferenceSum
  const resultBase36 = resultSum.toString(36)
  const initTimestampBase36 = initTimestamp.toString(36)

  let initTimestampCharCodeSum = 0
  for (let i = 0; i < initTimestampBase36.length; i++) {
    initTimestampCharCodeSum += initTimestampBase36.charCodeAt(i)
  }

  const absoluteDifference = Math.abs(initTimestampCharCodeSum - resultSum)
  const rearrangedInitTimestampBase36 = initTimestampBase36.substr(5) + initTimestampBase36.substr(0, 5)

  const resultChars = []
  const dayOfWeekParity = new Date(initTimestamp).getDay() % 2
  const reversedResultBase36 = resultBase36.split('').reverse().join('')

  for (let i = 0; i < hash.length; i++) {
    if (i % 2 === dayOfWeekParity) {
      resultChars.push(rearrangedInitTimestampBase36.charAt(i % rearrangedInitTimestampBase36.length))
    } else {
      const previousChar = hash.charAt(i - 1)
      if (previousChar) {
        const indexInReversedResult = reversedResultBase36.indexOf(previousChar)
        if (indexInReversedResult === -1) {
          resultChars.push(previousChar)
        } else {
          resultChars.push(resultBase36.charAt(indexInReversedResult))
        }
      } else {
        resultChars.push(resultBase36.charAt(i))
      }
    }
  }

  return (absoluteDifference.toString(36).split('').reverse().join('') + resultChars.join('')).substr(0, hash.length)
}
