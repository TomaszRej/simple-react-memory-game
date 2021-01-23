import React from 'react';
import {useSelector} from 'react-redux';
import {AppState} from '../../store';
import {useHistory} from 'react-router-dom'
import {RouteNames} from '../../utils/routeNames';
import './styles.css';

const ScorePage = () => {
  const playerName = useSelector((state: AppState) => state.gameData.playerName);
  const playerScore = useSelector((state: AppState) => state.gameData.playerScore);

  const history = useHistory();

  return (
    <div className='wrapper'>
      <h3>{playerName} your score is:</h3>
      <div className='score'>{playerScore}</div>
      <button className='button' onClick={() => history.push(RouteNames.Game)}>Play Again</button>
    </div>
  );
};

export default ScorePage;
