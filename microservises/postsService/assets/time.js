module.exports.time = () => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const date = new Date();
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
