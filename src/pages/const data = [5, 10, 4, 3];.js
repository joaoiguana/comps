const data = ['t', 'A', 'a', 'B', 'b'];

data.sort((a, b) => {
  return a.localeCompare(b);
});
