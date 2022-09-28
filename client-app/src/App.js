import Header from "./components/Header";
import Home from "./pages/Home";
import Song from "./pages/Song";
import NotFound from "./pages/NotFound";
import { ApolloProvider, ApolloClient, InMemoryCache }
from '@apollo/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        sets: {
          merge(existing, incoming) {
          return incoming
          }
        },
        songs: {
          merge(existing, incoming) {
          return incoming
          }
        }
      }
    }
  }
})

const client = new ApolloClient({
  // uri: 'http://localhost:8000/graphql',
  uri: '/graphql',
  cache,
})

function App() {
  return (
    <>
    <ApolloProvider client={client}>
      <Router>
        <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/song/:id' element={<Song />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
      </Router>
    </ApolloProvider>
    </>
  );
}

export default App;
