let data = [];

const myFunction = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1,2,3]);
    }, 3000);
  });
};

(async () => {
  data = await myFunction();
  console.log('выполнится позже', data);
})();

console.log('выполнится первым', data);

let data1 = [];

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve([1,2,3]);
  }, 3000);
});

promise.then(value => {
  data1 = value;
  console.log('выполнится позже', data1);
});

console.log('выполнится первым', data1);