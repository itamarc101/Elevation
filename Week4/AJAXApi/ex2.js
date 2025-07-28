async function fetchBook(queryType, queryValue) {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`);
    const data = await response.json();

    if (data.totalItems > 0) {
      const book = data.items[0].volumeInfo;
      console.log("Title:", book.title);
      console.log("Authors:", book.authors);
      console.log("Publisher:", book.publisher);
      console.log("Published Date:", book.publishedDate);
    } else {
      console.log("No results found.");
    }
  } catch (error) {
    console.error("Error fetching book:", error);
  }
}

// Example usage:
fetchBook("title", "The Alchemist");
