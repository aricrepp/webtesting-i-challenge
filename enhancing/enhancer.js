module.exports = {
  successS,
  failF,
  repair,
  get,
};

function successS(item) {
  if (item.enhancement >= 20) {
    return { ...item };
  }
  const updateSuccess = item.enhancement + 1;
  return { ...item, enhancement: updateSuccess };
}

function failF(item) {
  if (item.enhancement < 15) {
    const updateFail = item.durability - 5;

    return { ...item, durability: updateFail };
  } else if (item.enhancement > 16) {
    const updateFail1 = item.durability - 10;
    const updateFail2 = item.enhancement - 1;

    return { ...item, durability: updateFail1, enhancement: updateFail2 };
  } else if (item.enhancement >= 15) {
    const updateFail = item.durability - 10;

    return { ...item, durability: updateFail };
  } else return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  if (item.enhancement === 0) {
    return { ...item };
  } else if (item.enhancement > 1) {
    return { ...item, name: `[+${item.enhancement}]${item.name}` };
  } else return { ...item };
}
