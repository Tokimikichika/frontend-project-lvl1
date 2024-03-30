const getRandomInRange = (min = 1, max = 99) => Math.floor(min + Math.random() * (max - min + 1));

export default getRandomInRange;
