function add(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
add();

module.exports = {
  add,
};
