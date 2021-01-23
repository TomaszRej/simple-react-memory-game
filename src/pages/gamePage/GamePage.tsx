import React, {useEffect, useState} from 'react';
import Card from './card/Card';
import {useDispatch} from 'react-redux';
import './styles.css';
import shuffle from '../../utils/shuffle';
import {useHistory} from 'react-router-dom';
import {setScore} from '../../store/game/game.action';
import {RouteNames} from '../../utils/routeNames';


interface IValue {
  id: number,
  label: string
}

const array: IValue[] = [
  {id: 1, label: 'A'},
  {id: 2, label: 'A'},
  {id: 3, label: 'B'},
  {id: 4, label: 'B'},
  {id: 5, label: 'C'},
  {id: 6, label: 'C'}
];


const GamePage = () => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [values, setValues] = useState<IValue[]>([]);
  const [counter, setCounter] = useState(0);
  const [lastChoice, setLastChoice] = useState<IValue | null>(null);
  const [currentChoice, setCurrentChoice] = useState<IValue | null>(null);
  const [currentlyFlipped, setCurrentlyFlipped] = useState(0)

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setValues(shuffle(array));
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(_counter => _counter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [])

  useEffect(() => {
    if (Boolean(flipped.length)) {
      let timer: any;
      if (lastChoice !== null) {
        setCurrentlyFlipped(flipped => flipped + 1);
        if (lastChoice.label === currentChoice?.label) {
          if (flipped.length === array.length) {
            dispatch(setScore(counter));
            history.push(RouteNames.Score);
          }

          setLastChoice(null);
          setCurrentChoice(null);
          setCurrentlyFlipped(0)
        } else {
          timer = setTimeout(() => {
            setFlipped(flipped.filter((f) => f !== currentChoice?.id && f !== lastChoice?.id));
            setLastChoice(null);
            setCurrentChoice(null);
            setCurrentlyFlipped(0);
          }, 1000);
        }
      } else {
        setLastChoice(currentChoice)
        setCurrentlyFlipped(flipped => flipped + 1)
      }
      return () => clearTimeout(timer);
    }
  }, [flipped]);


  const handleOnCardClick = (value: any) => {
    if (currentlyFlipped >= 2 || flipped.includes(value.id)) {
      return null;
    }

    setCurrentChoice(value);
    setFlipped((flipped) => [...flipped, value.id]);
  }

  return (
    <section className="wrapper">
      <section className="timer">
        {counter}
      </section>
      <section className="cards">
        {values.map((value) => {
          return <Card
            key={value.id}
            value={value.label}
            onClick={() => handleOnCardClick(value)}
            isFlipped={flipped.includes(value.id)}/>
        })}
      </section>
    </section>
  );
};

export default GamePage;
