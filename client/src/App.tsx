import Header from "./components/Header";
import "./App.css";
import Clients from "./components/Clients";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
    onError: ({ networkError, graphQLErrors }) => {
      console.log("graphQLErrors", graphQLErrors);
      console.log("networkError", networkError);
    },
  });
  return (
    <>
      <ApolloProvider client={client}>
        <div className="container mx-auto">
          <Header />
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
