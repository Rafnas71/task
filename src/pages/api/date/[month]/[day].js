export default async function handler(req, res) {
  const { month, day } = req.query;
  console.log(req.query);
  const response = await fetch(
    `https://byabbe.se/on-this-day/${month}/${day}/events.json`,
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const data = await response.json();
  res.status(200).json(data);
}
