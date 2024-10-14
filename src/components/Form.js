import React from "react";
import memesData from "../data/memesData";

export default function Form() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <div className="form">
      <div className="form__container">
        <div className="form__inpt--area">
          <input type="text" placeholder="Enter top text" />
          <input type="text" placeholder="Enter bottom text" />
        </div>
        <button className="form__button" onClick={getMemeImage}>
          Get Meme 🖼️
        </button>
      </div>
      <img src={memeImage} alt=" migm " />
    </div>
  );
}
