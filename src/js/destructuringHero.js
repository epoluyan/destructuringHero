export default function destructuringHero(keyObj, obj) {
  const arr = [];
  const { special } = obj;
  // eslint-disable-next-line array-callback-return
  special.filter((item) => {
    // eslint-disable-next-line no-unused-expressions
    item[keyObj] === undefined
      // eslint-disable-next-line no-param-reassign
      ? item[keyObj] = 'Описание недоступно'
      : item[keyObj];
    arr.push({ [keyObj]: item[keyObj] });
    console.log(arr);
  });
  return arr;
}
