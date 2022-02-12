//123456789.456789 <- input
//123,456,789.456789 <- output

function convertToLocaleString(num) {
  const str = num.toString()
  const dec = str.split('.')

  return dec[0] + '.' + dec[1]
}
