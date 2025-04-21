import express from "express";
import scrapeAmazon from "./scrape.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); // enables frontend to make requests do backend on different port

app.get("/api/scrape", async (req, res) => {    // GET endpoint that returns amazon product data
  const keyword = req.query.keyword;
  if (!keyword) {
    return res.status(400).json({ error: "Missing keyword" });
  }

  try { // calls scraper function and returns data
    const data = await scrapeAmazon(keyword);
    res.json(data);
  } catch (err) {
    console.error("Error scraping Amazon:", err);
    res.status(500).json({ error: "Failed to scrape Amazon" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
