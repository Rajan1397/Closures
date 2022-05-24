// // debouncing
// let count = 0;
// function getData() {
//   console.log("Fetching Data", count++);
// }

// const debounce = function (fn, d) {
//   let timer;

//   return function () {
//     let context = this,
//       args = arguments;

//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       getData(context, args);
//     }, d);
//   };
// };

// const betterFunction = debounce(getData, 1000);
let count = 0;
function getData() {
  console.log("Fetching Data...", count++);
}
const debounce = function (fn, d) {
  let timer;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timer);

    timer = setTimeout(function () {
      getData.apply(context, args);
    }, d);
  };
};

const betterFunction = debounce(getData, 500);
