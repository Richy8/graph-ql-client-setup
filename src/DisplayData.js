import React from "react";
import { useQuery, gql } from "@apollo/client";

const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      username
      nationality
    }
  }
`;

export default function DisplayData() {
  const { data, error, loading } = useQuery(QUERY_ALL_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) console.log(error);

  return (
    <div>
      {data &&
        data.users.map((user) => {
          return (
            <div style={{ marginBottom: "30px" }} key={user.id}>
              <div>Name: {user.name}</div>
              <div>UserName: {user.username}</div>
              <div>Nationality: {user.nationality}</div>
            </div>
          );
        })}
    </div>
  );
}
