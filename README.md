# Amazon Scraper

This is a test project that scrapes product listings from the first page of Amazon search results based on a keyword entered by the user.  
It uses a Bun backend (Express + Axios + JSDOM) and a Vite frontend (Vanilla JavaScript, HTML, CSS).

GitHub Repo: [https://github.com/felesmanhotto/amazon-scraper](https://github.com/felesmanhotto/amazon-scraper)

---

# Project Structure

```
amazon-scraper/ → Bun server with scraping logic
│   ├── index.js
│   └── scrape.js
│
├── frontend/     → Vite app using HTML, CSS, and JS
│   ├── index.html
│   ├── main.js
│   └── style.css
```

---

## How to Run

### Backend (Bun)

```bash
bun install
bun index.js
```

Runs on: `http://localhost:3000`

---

### Frontend (Vite)

```bash
cd frontend
npm install
npm run dev
```

Runs on: `http://localhost:5173/`