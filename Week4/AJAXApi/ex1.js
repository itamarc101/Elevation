async function fetchBookByISBN(isbn) {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
  const data = await response.json();
  
  if (data.totalItems > 0) {
    const book = data.items[0].volumeInfo;
    console.log("Title:", book.title);
    console.log("Authors:", book.authors);
    console.log("Publisher:", book.publisher);
    console.log("Published Date:", book.publishedDate);
  } else {
    console.log("No book found with that ISBN.");
  }
}

// Example usage:
fetchBookByISBN(9780575087057);