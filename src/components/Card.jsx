import React from "react";
import Emoji from "./Emoji";
import HeaderText from "./HeaderText";
import BodyText from "./BodyText";

function Card(props) {
  return (
    <dl className="dictionary">
      <div className="term">
        <dt>
          <Emoji img={props.img} />
          <HeaderText emojiHeader={props.header} />
        </dt>
        <dd>
          <BodyText emojiText={props.emojiText} />
        </dd>
      </div>
    </dl>
  );
}

export default Card;
