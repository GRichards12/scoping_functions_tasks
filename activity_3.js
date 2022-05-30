const add = (a, b) => {
    return a + b;
   };
   const subtract = (a, b) => {
    return a - b;
   };
   const multiply = (a, b) => {
    return a * b;
   };
   const divide = (a, b) => {
    return a / b;
   };
   const doMaths = (num1) => {
    return (num2, fn) => {
    return fn(num1, num2);
    };
   };

console.log(doMaths(5)); /* num1 is 5 */
console.log(doMaths(6)(7,add)); /* num1 is 6, num2 is 7, fn is add, doMaths returns 13 */
console.log(doMaths(8)(9,subtract)); /* num1 is 8, num2 is 9, fn is subtract, doMaths returns -1 */
console.log(doMaths(10)(11,multiply)); /* num1 is 10, num2 is 11, fn is multiply, doMaths returns 110 */
console.log(doMaths(12)(13,divide)); /* num1 is 12, num2 is 13, fn is divide, doMaths returns 12/13 */
