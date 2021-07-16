// const genkiFunction = function(number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(`${n}!!!!!!!`)
//     } else {
//       console.log(n)
//     }
//   }
// }

const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    m = JSON.stringify(n).split("")
    if (m.includes("3")) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
