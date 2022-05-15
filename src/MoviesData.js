import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      name
      yearOfPublication
    }
  }
`;

export default function MoviesData() {
  const { data } = useQuery(GET_ALL_MOVIES);

  return (
    <div>
      {data &&
        data.movies.map((movie, index) => {
          return (
            <div style={{ marginBottom: "30px" }} key={index}>
              <div>Name: {movie.name}</div>
              <div>Publication Year: {movie.yearOfPublication}</div>
            </div>
          );
        })}
    </div>
  );
}
