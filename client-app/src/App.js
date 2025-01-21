// import { hot } from 'react-hot-loader/root';
// import Header from './components/Header'
import Where from './components/Where'
import Home from './pages/Home'
import Song from './pages/Song'
import NotFound from './pages/NotFound'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import { setContext } from '@apollo/client/link/context'
import { AUTH_TOKEN } from './constants'
import { HttpLink } from '@apollo/client'

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
  // uri: '/graphql',
  // Additional options
})

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        sets: {
          merge(existing, incoming) {
            return incoming
          },
        },
        songs: {
          merge(existing, incoming) {
            return incoming
          },
        },
        users: {
          merge(existing, incoming) {
            return incoming
          },
        },
      },
    },
  },
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  // console.log('HI TOKEN', token)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  // uri: '/graphql',
  link: authLink.concat(httpLink),

  cache: cache,
})

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router>
          <div className='font-grotesk'>
            {/* <div className='container h-dvh bg-stone-700 flex-col items-center'> */}
            {/* <div className='container h-dvh bg-gradient-to-b from-cyan-600 to-white'> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/song/:id' element={<Song />} />
              <Route path='*' element={<NotFound />} />
              <Route path='/where' element={<Where />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            {/* <Header /> */}
          </div>
        </Router>
      </ApolloProvider>
    </div>
  )
}

export default App
