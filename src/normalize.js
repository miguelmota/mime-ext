function normalize(data) {
  const lines = data.split('\n');

  return lines
  .filter(x => !!x)
  .reduce((table, line) => {
    const [ext, mime] = line.split(/\s+/);

    if (!table[mime]) {
      table[mime] = [];
    }

    table[mime].unshift(ext);

    return table;
  }, {});
}

module.exports = normalize;
