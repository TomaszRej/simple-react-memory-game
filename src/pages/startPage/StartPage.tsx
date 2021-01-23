import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import './styles.css';
import {setPlayerName} from '../../store/game/game.action';
import {RouteNames} from '../../utils/routeNames';


const StartPage = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = () => {
    dispatch(setPlayerName(name));
    history.push(RouteNames.Game);
  };

  return (
    <section className="wrapper">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          placeholder="Your name.."
        />
        <button type="submit">Enter The Game</button>
      </form>
    </section>
  );
};

export default StartPage;
