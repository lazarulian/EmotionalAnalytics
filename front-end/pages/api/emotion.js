export default async (req, res) => {
  const { text } = req.body;

  const response = await fetch("/flask/love_babu", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: text,
  });

  const data = await response.json();

  // Process data and extract relevant information
  const emotions = data.emotions.map((emotion) => ({
    name: emotion.name,
    score: emotion.score,
  }));

  res.status(200).json({ emotions });
};
