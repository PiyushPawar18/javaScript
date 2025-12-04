let map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (let key of map2.keys()) console.log(key);   // a b c
for (let val of map2.values()) console.log(val); // 1 2 3
for (let [k, v] of map2.entries()) console.log(k, v);
// a 1 , b 2 , c 3

map2.forEach((v, k) => console.log(`${k} = ${v}`));
