import React from "react";
import { Card } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./StudentsCard.css";
import { useState } from "react";

const StudentsCard = ({ name, image, house,dateOfBirth,wand , patronus}) => {
  const{wood} = wand
  const [card, setCard] = useState(true);

  const handleCard = () => {
    setCard(!card);
  };

  // console.log(name);

  return (
    <Card onClick={handleCard} className="card border border-1 border-black">
      {!card ? (
        <div className="details">
          <p><span>Date of Birth :</span> {dateOfBirth}</p>
          <p><span>Wood :</span> {wood}</p>          
          <p><span>Patronus :</span> {patronus}</p>          
        </div>
      ) : (
        <>
          <div className="image">
            <img src={image} className="card-img-top border" alt={name} />
          </div>
          <div className="card-body">
            <h5 className="card-title fs-3">{name}</h5>
            <p className="card-text">{house}</p>
          </div>
        </>
      )}
    </Card>
  );
};

export default StudentsCard;
