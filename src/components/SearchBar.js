import React, { useState } from 'react';
import "semantic-ui-css/semantic.min.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');
  // const onInputChange = event => {
  //   setTerm(event.target.value);
  // };
  const onSubmit = event => {
      event.preventDefault();
      onFormSubmit(term);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
            <label>Search for a Video</label>
            <input 
              type="text"
              value={term}
              onChange={(event)=>setTerm(event.target.value)}
            />
        </div>
      </form>
    </div>
  )
};

export default SearchBar;