// Some no sense complex function to block the thread

export const complexOperation = () => {
  const resArr = [];
  let dummyArr = [];
  for (let i = 0; i < 50000; i++) {
    if (i % 2 === 0) {
      resArr.push(i);
    }
    for (let j = 20000; j > 0; j--) {
      dummyArr.push(j);
    }
    dummyArr = [];
  }

  return resArr;
};
