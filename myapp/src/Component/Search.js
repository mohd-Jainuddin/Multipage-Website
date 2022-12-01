import React, { useContext } from 'react'
import { AppContext } from "./Context";


const Search = () => {

  const {query, setQuery, isError} = useContext(AppContext);


  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="serach here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p className='para'>{isError.show && isError.msg}</p>
        </div>
      </section>
      ;
    </>
  );
}

export default Search