import endpoints from './api';

const createGame = async (gameName) => {
  let gameID = null;
  try {
    const response = await fetch(endpoints.games, {
      method: 'POST',
      body: JSON.stringify({
        name: gameName,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    if (response.ok) {
      const data = await response.json();
      data.result.split(' ').forEach((word) => {
        if (word.length === 20) {
          gameID = word;
        }
      });
    }
  } catch (error) {
    return error.message;
  }
  return null || gameID;
};

export default createGame;