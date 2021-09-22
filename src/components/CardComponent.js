import React from "react";
import classes from "./cardStyle.module.css";
import basketball from "../images/basketball.jpg";

function CardComponent() {
  return (
    <div className={classes.cardContainer}>
        <h1 className={classes.title}>Featured Athletes</h1>
      
      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          <div className={classes.flipCardFront}>
            <img
              src={basketball}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className={classes.flipCardBack}>
            <h1>Player Name</h1>
            <p>Team Name</p>
            <p>Link to players HighlightVideo</p>
            <p>social media links</p>
          </div>
        </div>
      </div>

      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          <div className={classes.flipCardFront}>
            <img
              src={basketball}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className={classes.flipCardBack}>
            <h1>Player Name</h1>
            <p>Team Name</p>
            <p>Link to players Video</p>
            <p>social media links</p>
          </div>
        </div>
      </div>

      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          <div className={classes.flipCardFront}>
            <img
              src={basketball}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className={classes.flipCardBack}>
            <h1>Player Name</h1>
            <p>Team Name</p>
            <p>Link to players Video</p>
            <p>social media links</p>
          </div>
        </div>
      </div>

      <div className={classes.flipCard}>
        <div className={classes.flipCardInner}>
          <div className={classes.flipCardFront}>
            <img
              src={basketball}
              alt="Avatar"
              style={{ width: "300px", height: "300px" }}
            />
          </div>
          <div className={classes.flipCardBack}>
            <h1 className={classes.cardTitle}>Player Name</h1>
            <p>Team Name</p>
            <p>Link to players Video</p>
            <p>social media links</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
