import { ApolloProvider } from "@apollo/client";
import "./styles.css";
import { apollo } from "./infrastructure/apollo";

export default function App() {
  return (
    <ApolloProvider client={apollo}>
      <div className="App">
        <h1>SpaceX Launches</h1>
      </div>
    </ApolloProvider>
  );
}
