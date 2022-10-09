import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Label = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #00000044;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  transition-duration: 300ms;
  border-radius: 10px;

  img {
    display: block;
    width: 100%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: block;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
    scale: 1.05;
    color: white;
    opacity: 1;

    ${Label} {
      background-color: #cc0000ff;
    }
  }
`;

export const Title = styled.h3`
  margin: 0px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: inherit;
`;

export const BackDrop = styled.img`
  display: block;
  width: 100%;
`;

export const MovieInfo = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  color: inherit;
  background-color: #111111bb;
  padding: 30px;
  color: white;
  padding-top: 0px;
`;

export const MovieTitle = styled.h2`
  padding: 30px 15px;
  background-color: #000000bb;
  margin: 0;
  font-size: 50px;
  letter-spacing: 3px;
  font-weight: 700;
  color: yellow;
  text-shadow: 0px 0px 50px yellow;
`;

export const Table = styled.table`
  margin: auto;
  text-align: left;
  border-spacing: 0px;
  /* table-layout: fixed; */
  width: 100%;
  overflow: hidden;

  th,
  td {
    padding: 25px 30px;
  }

  th {
    background-color: #cf0000ee;
    font-weight: 700;
    font-size: 20px;
  }

  tr:nth-child(odd) {
    background-color: #00000077;
    th {
      background-color: #dd0000;
    }
  }

  td {
    background-color: #11111199;
    font-weight: 500;
    font-size: 18px;
  }
`;

export const TableLink = styled.a`
  color: yellow;
  text-decoration: none;
`;

export const ExtraLink = styled(NavLink)`
  display: inline-flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition-duration: 200ms;
  font-size: 21px;
  margin: 20px;
  box-shadow: 0px 0px 2px white;

  &.active {
    color: white;
    background-color: #000000bb;
    box-shadow: 0px 0px 2px #000000bb;
  }

  &.active,
  &:hover {
    cursor: pointer;
  }

  &:hover:not(.active) {
    color: black;
    background-color: white;
  }
`;

export const BackLink = styled(NavLink)`
  display: inline-flex;
  width: 25%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition-duration: 200ms;
  font-size: 21px;
  margin: 20px;
  box-shadow: 0px 0px 2px white;

  &:hover {
    color: black;
    background-color: yellow;
    cursor: pointer;
  }
`;

export const ActorCard = styled.li`
  img {
    object-fit: cover;
    display: block;
    flex-grow: 1;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  border-radius: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  transition-duration: 300ms;
  box-shadow: 0px 0px 2px white;
`;

export const Actor = styled.span`
  color: yellow;
  font-size: 22px;
`;

export const Character = styled.span`
  color: red;
  font-size: 22px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  transition-duration: 300ms;
  border-radius: 10px;
`;

export const ReviewAuthor = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: yellow;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const ReviewContent = styled.p`
  margin-top: 5px;
  font-size: 18px;
  text-align: justify;
  margin-bottom: 10px;
`;

export const NoReviews = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`;

export const CastContent = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 10px 5px;

  &:last-child {
    margin-top: 0px;
    margin-bottom: 20px;
  }
`;

export const SearchButton = styled.button`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  background-color: green;
  color: white;
  margin-left: 10px;
  border: none;
  /* box-shadow: 0px 0px 5px 0px yellow; */
  transition-duration: 100ms;
  padding: 9px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background-color: red;
    scale: 1.1;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;

  /* box-shadow: 0px 0px 5px 0px yellow; */
`;
