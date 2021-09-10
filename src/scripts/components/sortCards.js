const orderByTitle = (array) => {
  array.sort((a, b) => {
    const cardOne = a.title.toUpperCase();
    const cardTwo = b.title.toUpperCase();
    if (cardOne < cardTwo) {
      return -1;
    }
    if (cardTwo > cardOne) {
      return 1;
    }
    return 0;
  });
};

const orderByNew = (array) => {
  array.sort((a, b) => {
    const cardOne = (a.timeSubmitted);
    const cardTwo = (b.timeSubmitted);
    return cardOne - cardTwo;
  });
};

export { orderByTitle, orderByNew };
