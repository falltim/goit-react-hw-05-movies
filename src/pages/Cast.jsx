import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getCast } from 'services/API';
import { CastList } from 'components/ResultList/ResultList.styled';
import {
  ActorCard,
  Actor,
  Character,
  CastContent,
  NoReviews,
} from 'components/ResultItem/ResultItem.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useLocation();

  useEffect(() => {
    getCast(movieId).then(cast => {
      setCast(cast.slice(0, 21));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {(cast.length > 0 && (
        <CastList>
          {cast.map(actor => {
            const { character, name, profile_path } = actor;
            const image =
              (profile_path &&
                'https://image.tmdb.org/t/p/w500' + profile_path) ||
              `https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg`;
            return (
              <ActorCard key={name}>
                <img src={image} alt={name} />
                <CastContent>
                  Character: <Character>{character}</Character>
                </CastContent>
                <CastContent>
                  Actor: <Actor>{name}</Actor>
                </CastContent>
              </ActorCard>
            );
          })}
        </CastList>
      )) || <NoReviews>No cast information for this movie</NoReviews>}
    </>
  );
};

export default Cast;
