import axios from "axios";
import { JSDOM } from "jsdom";

export default async function scrapeAmazon(keyword) {   // scrapes amazon search results for the keyword
  const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
  const headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0"};  // User-Agent header to avoid bot detection
  
  // requests the amazon search page and parse the HTML using JSDOM  
  const response = await axios.get(url, { headers });
  const html = response.data;
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const products = [...document.querySelectorAll("div.s-main-slot div[data-component-type='s-search-result']")]; // selects all products on the page

  return products.map((product) => {    // extracting the data to be used
    const title = product.querySelector("h2 span")?.textContent?.trim() || "No title";
    const rating = product.querySelector(".a-icon-star-small span")?.textContent?.trim() || "No rating";
    const reviews = product.querySelector(".a-size-base.s-underline-text")?.textContent?.trim() || "No reviews";
    const image = product.querySelector("img.s-image")?.src || "No image";

    return { title, rating, reviews, image };
  });
}
