async function fetchBookDetails(queryType, queryValue) {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`);
  const data = await response.json();

  if (!data.items) {
    console.log("No results found.");
    return;
  }

  data.items.forEach((item) => {
    const title = item.volumeInfo.title;
    const authors = item.volumeInfo.authors?.join(", ") || "N/A";
    const isbn = item.volumeInfo.industryIdentifiers?.map(id => id.identifier).join(", ") || "N/A";
    console.log(`Title: ${title}, Author(s): ${authors}, ISBN(s): ${isbn}`);
  });
}

// Example usage:
fetchBookDetails("isbn", 9789814561778);