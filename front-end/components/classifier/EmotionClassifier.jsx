import { useState, useEffect } from "react";

function EmotionClassifier() {
  const [text, setText] = useState("");
  const [emotions, setEmotions] = useState(null);

  const classifyEmotion = async () => {
    const response = await fetch("/flask/love_babu", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setEmotions(data["emotion"]);
  };

  useEffect(() => {
    console.log(emotions);
  }, [emotions]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    classifyEmotion();
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-center pt-4">
        <h1 className="text-3xl text-white font-semibold">
          Please Input the Review
        </h1>
      </div>
      <form className="form-control" onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={handleInputChange}
          className="block my-5 p-2.5 w-full text-sm  rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
          placeholder="Paste your review here"
          rows="20"
        />
        <button type="submit" className="btn btn-outline btn-primary">
          Classify Review
        </button>
      </form>
      <div className="flex justify-center pt-5">
        {emotions && (
          <h1 className="text-3xl text-white ">
            Babu is feeling a sense of {emotions}
          </h1>
        )}
      </div>
    </div>
  );
}

export default EmotionClassifier;
