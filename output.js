// let randomValue = { name: "Rajan" };
// randomValue = 23;

// if (!typeof randomValue === "string") {
//   console.log("Its not an string");
// } else {
//   console.log(first);
// }

// flateening of array
var arr = [1, [2, 3], [4, 5, 6], 7, [8, 9]];

function flatten(arr) {
  ans = arr.reduce((acc, item) => {
    // if item is an arr or else item is an value, flatten
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return ans;
}

console.log(flatten(arr));
