import React, {FC} from 'react';
import './styles.css';


interface IProps {
  isFlipped: boolean,
  onClick: any;
  value: string
}

const Card: FC<IProps> = ({isFlipped, onClick, value}) => {
  const flippedClass = isFlipped ? " flipped" : "";
  return (
    <div className={`card`} onClick={onClick}>
      <div className={`card-inner${flippedClass}`}>
        <div className="card-front"/>
        <div className="card-back">
          <h1>{value}</h1>
        </div>
      </div>
    </div>

  );
}

export default Card;
