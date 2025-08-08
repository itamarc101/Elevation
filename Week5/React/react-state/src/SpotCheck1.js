import React, { useState } from 'react';

function SpotCheck1() {
  const pageState = useState(1)

  const pageNumber = pageState[0]
  const setPageNumber = pageState[1]

  const addPage = () => setPageNumber(pageNumber + 1)

  return (
    <div>
      <p>You are on page number {pageNumber}</p>
      <button onClick={addPage}>Next page</button>
    </div>
  )
}
export default SpotCheck1;
