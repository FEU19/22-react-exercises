import React from 'react';
import Fancy from './Fancy';

const SearchResult = ({ title, text }) => (
    <div className="search-result">
        <a href="https://github.com/FEU19/22-react-exercises"> <h3>{title}</h3> </a>
        <Fancy text={text} />
    </div>
)

export default SearchResult;
