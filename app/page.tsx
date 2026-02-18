"use client";

import { gql } from "graphql-tag";
import { useQuery, ApolloProvider } from "@apollo/client/react";
import { client } from "@/lib/apollo";

interface Book {
  id: string;
  title: string;
}

const GET_BOOKS = gql`
  query {
    books {
      id
      title
    }
  }
`;

function Books() {
  const { data, loading, error } = useQuery<{ books: Book[] }>(GET_BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <ul>
      {data?.books.map((b: Book) => (
        <li key={b.id}>{b.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <ApolloProvider client={client}>
      <Books />
    </ApolloProvider>
  );
}
