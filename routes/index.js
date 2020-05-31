const g = (n) => n + 1;
const f = (n) => n * 2;

const trace = (label) => (value) => {
  console.log(`${label}: ${value}`);
  return value;
};

const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

const doStuff = pipe(trace("after g"), f, trace("after f"));

doStuff(20);
