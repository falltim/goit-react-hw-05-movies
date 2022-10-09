import { Route, Routes } from 'react-router-dom';
import fetchResult from 'services/API';
import { useState, useEffect } from 'react';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Container = lazy(() => import('./Container/Container'));
const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast'));
const Reviews = lazy(() => import('../pages/Reviews'));
const Error = lazy(() => import('../pages/Error'));

export const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResult().then(response => {
      const results = response.map(movie => movie);
      setResults(results);
    });
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home results={results} />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Container>
  );
};
