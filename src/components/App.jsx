import React from "react";
import Card from "./Card";
import emojipedia from "/src/emojipedia";

function createCard(emoji) {
  return (
    <Card
      id={emoji.id}
      img={emoji.emoji}
      header={emoji.name}
      emojiText={emoji.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
