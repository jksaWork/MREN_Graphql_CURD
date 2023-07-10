import Header from "./components/Header";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        {/* <div className="underline">Hello World</div> */}
        {/* Hello World */}
      </ApolloProvider>
    </>
  );
}

export default App;
