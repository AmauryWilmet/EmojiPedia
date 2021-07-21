import "./styles.css";

import Heading from "./components/Heading";
import Card from "./components/Card";

import emojis from "./emojis";

export default function App() {
  return (
    <div className="App">
      <Heading />
      <div className="row">
        {emojis.map((emo) => (
          <Card
            emoji={emo.emoji}
            title={emo.title}
            description={emo.description}
          />
        ))}
      </div>
    </div>
  );
}
