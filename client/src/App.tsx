import "./App.css";
import Header from "./components/Header";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./components/Users";
import Colors from "./pages/Colors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/colors",
    element: <Colors />,
  },
  {
    path: "/users",
    element: <Users />,
  },
]);
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:5000/graphql",
    cache: new InMemoryCache(),
  });
  return (
    <>
      <ApolloProvider client={client}>
        {/* <div className="container mx-auto"> */}
        {/* <Header /> */}
        <RouterProvider router={router} />
        {/* </div> */}
      </ApolloProvider>
    </>
  );
}

export default App;
