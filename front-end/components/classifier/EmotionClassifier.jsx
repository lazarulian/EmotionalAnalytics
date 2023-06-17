import { useState } from "react";

function EmotionClassifier() {
  const [text, setText] = useState("");
  const [emotions, setEmotions] = useState([]);

  const classifyEmotion = async () => {
    const response = await fetch("/api/emotion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setEmotions(data.emotions);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={classifyEmotion}>Classify Emotion</button>
      <ul>
        {emotions.map((emotion, index) => (
          <li key={index}>
            {emotion.name}: {emotion.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmotionClassifier;
