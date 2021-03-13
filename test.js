var x = 1;
var y = 2;
x &&= y;
console.log(x); // 2
let nibbles = 0b1010_0001_1000_0101;
// Is bit 7 on? It sure is!
// 0b1010_0001_1000_0101
//          
// We can double check: 
console.log(!!(nibbles & (1 << 7))); // true

const prom1 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the first promise"),
      Math.floor(Math.random() * 100)
    );
  });
  const prom2 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the second promise"),
      Math.floor(Math.random() * 100)
    );
  });
  const prom3 = new Promise((resolve, reject) => {
    setTimeout(
      () => resolve("this is the third promise"),
      Math.floor(Math.random() * 100)
    );
  });
  
  (async function() {
    const result = await Promise.any([prom1, prom2, prom3]);
    console.log(result); // Prints "A", "B" or "C"
  })();