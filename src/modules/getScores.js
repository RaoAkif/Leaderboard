import endpoints from './api.js';

const getScores = async () => {
  let allScores = null;
  try {
    const response = await fetch(endpoints.scores);
    if (response.ok) {
      const data = await response.json();
      allScores = data.result;
    }
  } catch (error) {
    return error.message;
  }
  return null || allScores;
};

export default getScores;