import endpoints from './api';

const addScore = async (user, score) => {
  let scoreObj = null;
  try {
    const response = await fetch(endpoints.scores, {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      // get game ID
      const data = await response.json();
      scoreObj = data;
    }
  } catch (error) {
    return error.message;
  }
  return null || scoreObj;
};

export default addScore;