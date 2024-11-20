export function formatNumber(input) {
  input = String(input)
  let num = input.replace(/\./g, '')
  if (!isNaN(num)) {
    num = num
      .toString()
      .split('')
      .reverse()
      .join('')
      .replace(/(?=\d*\.?)(\d{3})/g, '$1.')
    num = num.split('').reverse().join('').replace(/^[\.]/, '')
    input = num
  } else {
    input = input.replace(/[^\d\.]*/g, '')
  }
  return input
}
