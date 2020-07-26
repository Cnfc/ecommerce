function get(obj, path, defaultValue) {
  if (!path) return obj;

  const properties = path.split(".");

  return get(obj[properties.shift()], properties.join("."));
}

const myObj = {
  foo: {
    bar: {
      value: "good",
    },
  },
};

// console.log(get(myObj, "foo.bar.value")); // good

const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};
