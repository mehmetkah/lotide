const tail = (x) => {
  let result = x.slice(1);

  return result;
};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

module.exports = tail;
