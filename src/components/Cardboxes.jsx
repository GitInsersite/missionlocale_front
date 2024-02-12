import React from "react";
import styles from '/CardBox.module.css'; // Importez les styles du fichier CSS


function CardBox({ imgSrc, date, title }) {
  return (
    <div className={styles.cardboxContainer}>

    <div className="cardbox-container">
      <div className="cardbox">
        <img src={imgSrc} alt="Card" />
        <div className="cardbox-content">
          <p>{date}</p>
          <p>{title}</p>
        </div>
      </div>
    </div>
    </div>
  );
}

function CardBoxes() {
  return (
    <>
      <CardBox imgSrc="alternance.jpg" date="01/01/2023" title="stage d'immersion" />
      <CardBox imgSrc="stage.jpg" date="01/01/2023" title="stage" />
      <CardBox imgSrc="stage.jpg" date="01/01/2023" title="formation" />
    </>
  );
}

export default CardBoxes;
