export const animatePrince = (HTMLElement, targetNumber, fromNumber) => {
  var target = parseFloat(fromNumber);
  var number = targetNumber // parseFloat(HTMLElement.value);
  console.log(number + "  " + target + " " + (number > target));
  if (number > target) { // Aumentando
    var interval = setInterval(function () {
      HTMLElement.innerHTML = target
      if (number <= target) clearInterval(interval)
      target = Number(target + 1)
    }, 100);
  } else { // Disminuyendo
    var interval = setInterval(function () {
      if (HTMLElement) {
        HTMLElement.innerHTML = target
        if (number >= target) clearInterval(interval)
        target = Number(target - 1)
      }
    }, 80)
  }
}

export function cookiesToObject(cookies) {
  // Tested in getServerSideProps
  const cookiesArray = cookies.split(';')
  const cookiesObject = {}
  cookiesArray.forEach(cookie => {
    const [key, value] = cookie.split('=')
    cookiesObject[key.trim()] = value
  })
  return cookiesObject
}

export function convertResponse(response) {
  if (response == null) return response;
  let parentKeys = Object.keys(response);
  parentKeys.forEach((key) => {
    let currentObj = response[key];
    delete response[key];
    let newKey = snakeToCamel(key);
    response[newKey] = currentObj;
    if (typeof response[newKey] === "object") {
      convertResponse(response[newKey]);
    }
  });
  return response;
}

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
