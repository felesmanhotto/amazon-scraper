const input = document.getElementById("keywordInput");
const button = document.getElementById("searchButton");
const resultsContainer = document.getElementById("results"); // gets DOM elements

button.addEventListener("click", async () => {
  const keyword = input.value.trim();

  if (!keyword) {
    alert("Type a keyword to search for."); // empty input alert
    return;  
  };

  resultsContainer.innerHTML = "<p>Searching products...</p>";

  try {
    // fetch data from backend
    const response = await fetch(`http://localhost:3000/api/scrape?keyword=${encodeURIComponent(keyword)}`);

    if (!response.ok) {
      throw new Error("Error fetching data - !response.ok");
    }

    const data = await response.json();

    displayResults(data); // function that renders results 

  } catch (error) {
    console.log("Error: ", error);
    resultsContainer.innerHTML = "<p>Error fetching data - catch</p>";
  }
});

function displayResults(products) { //renders results into HTML elements
  if (products.length === 0) {
    resultsContainer.innerHTML = "<p>No products found.</p>";
    return;
  }

  resultsContainer.innerHTML = "";

  products.forEach((product) => { // renders a div element as the product card for each product found
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>⭐ ${product.rating} | 📝 ${product.reviews}</p>
    `;

    resultsContainer.appendChild(div);
  });
}