/**
 * Функция подсчёта набранных баллов игрока
 * @param {Array} answersUsers
 * @param {Number} lives
 * @return {number}
 */
export const countPoints = (answersUsers, lives) => {
  if (!Array.isArray(answersUsers)) {
    throw new Error(`The first parameter must be an array`);
  }

  if (typeof lives !== `number`) {
    throw new Error(`The second parameter must be a number`);
  }

  if (lives < 0) {
    throw new Error(`The second parameter must be a positive number`);
  }

  if (answersUsers.length < 10 || lives === 0) {
    return -1;
  }

  const BEST_TIME = 30;
  let points = 0;

  for (const answer of answersUsers) {
    if (answer.result && answer.time >= BEST_TIME) {
      points += 1;
    } else if (answer.result && answer.time < BEST_TIME) {
      points += 2;
    } else if (!(answer.result)) {
      points -= 2;
    }
  }

  return points;
};
