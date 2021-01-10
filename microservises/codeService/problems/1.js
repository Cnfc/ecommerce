const twoNumberSum = (array, targetSum) => {
  const hash = {};

  for (let i = 0; i < array.length; i++) {
    const n = array[i];
    if (hash[targetSum - n] !== undefined) {
      return [hash[targetSum - n], i];
    }
    hash[n] = 1;
    console.log(hash);
  }
  return [];
};

exports.twoNumberSum = twoNumberSum;
