function get(obj, path, defaultValue) {
  if (!path) return obj;
  const properties = path.split(".");

  return get(obj[properties.shift()], properties.join("."));
}

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

const fruitsCounter = (fruits) => {
  const statistics = {};

  for (const fruit of fruits) {
    if (statistics.hasOwnProperty(fruit)) {
      statistics[fruit] += 1;
    } else {
      statistics[fruit] = 1;
    }
  }

  return statistics;
};


console.log(get(obj, "a.b")); // good
// console.log(obj.a.b);

// console.log(get(obj, "a.b")); // { c : 'd' }
// console.log(get(obj, "a.b.c")); // 'd'
// get(obj, "a.e"); // 'f'
// get(obj, "a.x.e"); // undefined
// get(obj, "a.x.e", true); // true
// get(obj, "a.x.e", "My default value"); // My default value

// var myObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water",
// };

// ваш код

// console.log(myObj);
// console.log(x, y, z);
