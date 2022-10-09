import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import {
  SearchButton,
  SearchForm,
  SearchInput,
} from 'components/ResultItem/ResultItem.styled';
import { findMovies } from 'services/API';
import { ResultsList } from '../components/ResultList/ResultList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query !== '') {
      findMovies(query).then(response => {
        const results = response.map(movie => movie);
        setResults(results);
      });
      return;
    }
    return;
  }, [query]);

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  return (
    <>
      <SearchForm
        onSubmit={async e => {
          e.preventDefault();
          updateQueryString(e.target[0].value.trim().toLowerCase());
        }}
      >
        <SearchInput></SearchInput>
        <SearchButton>Search</SearchButton>
      </SearchForm>
      {(results.length > 0 && ['No results'] && (
        <ResultsList results={results} search={true} />
      )) ||
        (query !== '' && results.length < 1 && 'No results') ||
        'Please type something'}

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
