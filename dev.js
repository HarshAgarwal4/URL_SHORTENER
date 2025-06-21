const app = require("./server/app");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running locally on http://localhost:${PORT}`);
});
