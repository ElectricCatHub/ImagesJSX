import React from "react";
import ReactDom from "react-dom";

const image = "https://picsum.photos/100";

ReactDom.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My favourite cats and a random grayscale image
    </h1>
    <img alt="random" src={image + "?grayscale"}></img>
    <img
      alt="fluffy_cat"
      className="images"
      src="https://www.pets4homes.co.uk/images/classifieds/2019/07/16/2367909/large/very-fluffy-tabby-female-kittens-ready-now-5d2daf8398212.jpg"
    ></img>
    <img
      alt="naughty-cats"
      className="images"
      src="https://www.petsworld.in/blog/wp-content/uploads/2015/09/maxresdefault.jpg"
    ></img>
    <img
      alt="cute_cat"
      className="images"
      src="https://mcdaniel.hu/wp-content/uploads/2015/01/6784063-cute-cats-hd.jpg"
    ></img>
  </div>,
  document.getElementById("root")
);
