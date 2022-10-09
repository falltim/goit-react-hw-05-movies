import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'services/API';
import {
  BackDrop,
  Table,
  MovieInfo,
  MovieTitle,
  TableLink,
  BackLink,
} from 'components/ResultItem/ResultItem.styled';

import { ExtraLink } from 'components/ResultItem/ResultItem.styled';

import { Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieInfo(movieId).then(movie => {
      if (movie !== undefined) {
        setMovie(movie);
      }

      return;
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { title, backdrop_path } = movie;
  const image =
    (backdrop_path && 'https://image.tmdb.org/t/p/original/' + backdrop_path) ||
    `https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png`;
  return (
    <>
      {(Object.keys(movie).length > 0 && (
        <MovieInfo>
          <BackLink to={backLinkHref}>Go back</BackLink>
          <BackDrop src={image} alt={title} />
          <div>
            <MovieTitle>{title.toUpperCase()}</MovieTitle>
            <ExtraLink to="cast" state={{ from: location.state.from }}>
              Cast
            </ExtraLink>
            <ExtraLink to="reviews" state={{ from: location.state.from }}>
              Reviews
            </ExtraLink>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
            <Table>
              <tbody>
                {Object.keys(movie).map(key => {
                  if (
                    (movie[key] !== null) &
                    (movie[key] !== 0) &
                    (movie[key] !== false) &
                    (movie[key] !== '') &
                    (key !== `backdrop_path`) &
                    (key !== `id`) &
                    (key !== `poster_path`)
                  ) {
                    if (Array.isArray(movie[key])) {
                      return (
                        <tr key={key}>
                          <th>
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replaceAll('_', ' ')}
                          </th>
                          <td>
                            {movie[key]
                              .map(el =>
                                Object.keys(el).filter(
                                  el =>
                                    (el !== 'id') &
                                    !el.includes('_path') &
                                    !el.includes('iso_')
                                )
                              )
                              .map((el, index) =>
                                el
                                  .map(el => movie[key][index][el])
                                  .filter(
                                    (el, index, array) =>
                                      index === array.indexOf(el)
                                  )
                                  .join(', ')
                              )

                              .join(', ')}
                          </td>
                        </tr>
                      );
                    }
                    if (typeof movie[key] === 'object') {
                      return (
                        <tr key={key}>
                          <th>
                            {key.charAt(0).toUpperCase() +
                              key.slice(1).replaceAll('_', ' ')}
                          </th>
                          <td>
                            {Object.keys(movie[key])
                              .filter(
                                el =>
                                  !el.includes('_path') &
                                  (el !== 'id') &
                                  !el.includes('iso_')
                              )
                              .map(el => movie[key][el])
                              .toString()}
                          </td>
                        </tr>
                      );
                    }

                    return (
                      <tr key={key}>
                        <th>
                          {key.charAt(0).toUpperCase() +
                            key.slice(1).replaceAll('_', ' ')}
                        </th>
                        <td>
                          {(movie[key].toString().includes('https') && (
                            <TableLink href={movie[key].toString()}>
                              {movie[key].toString()}
                            </TableLink>
                          )) ||
                            movie[key].toString()}
                        </td>
                      </tr>
                    );
                  }
                  return false;
                })}
              </tbody>
            </Table>
          </div>
        </MovieInfo>
      )) || <p>Unvalid Movie ID</p>}
    </>
  );
};

export default MovieDetails;
