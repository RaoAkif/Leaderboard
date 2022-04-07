import createGame from "./createGame";
import addScore from "./addScore";
import getScores from "./getScores";
import game from "./game";
import endpoint from "./api";

const state = { submitted: false };

// DOM elements
const getAllScoresBtn = document.querySelector('#update-button');
const scoresContainerUl = document.querySelector('#scores');
const addNewScoreForm = document.querySelector('#add-score-form');
const submitBtn = document.querySelector('#add-score-btn');
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');

const showSuccessBtn = () => {
  nameInput.value = '';
  scoreInput.value = '';
  submitBtn.style.backgroundColor = '#000';
  submitBtn.style.color = '#fff';
  submitBtn.value = 'Success!!';
  setTimeout(() => {
    submitBtn.style.backgroundColor = '#fff';
    submitBtn.style.color = '#000';
    submitBtn.value = 'Submit';
  }, 1000);
};

const createNewGame = (gameName) => async () => {
  const gameID = await createGame(gameName);
  // save game data in globals
  game.name = gameName;
  game.id = gameID;
  // set endpoint with given id in globals
  endpoint.scores = `${endpoint.games}${game.id}/scores/`;
  // set new message in dom
  const addAScoreLi = document.createElement('li');
  addAScoreLi.innerText = 'Submit Match Scores!';
  scoresContainerUl.appendChild(addAScoreLi);
};

const showAllScores = async () => {
  if (state.submitted) {
    const scores = await getScores();
    scoresContainerUl.innerHTML = '';
    scores.forEach((score) => {
      const scoreEle = document.createElement('li');
      scoreEle.innerText = `${score.user}: ${score.score}`;
      scoresContainerUl.appendChild(scoreEle);
    });
    state.submitted = false;
  }
};

const submitNewScore = async (eve) => {
  eve.preventDefault();
  const name = nameInput.value;
  const score = scoreInput.value;
  await addScore(name, score);
  state.submitted = true;
  // set styles and clear field after successfull submit
  showSuccessBtn();
};

const startApp = async () => {
  window.onload = createNewGame('Find That Foe!');
  addNewScoreForm.onsubmit = submitNewScore;
  getAllScoresBtn.onclick = showAllScores;
};

export default startApp;
