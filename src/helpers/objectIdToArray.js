const objectIdToArray = (obj) => {
  const newArray = [];

  for (const id in obj) {
    const newItem = { ...obj[id], id };
    newArray.push(newItem);
  }

  return newArray;
}

export default objectIdToArray;