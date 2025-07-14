import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client'
import { AUTH_TOKEN } from '../constants'

const Login = () => {
  const ADD_USER = gql`
    mutation AddUser($email: String!, $password: String!, $name: String!) {
      addUser(email: $email, password: $password, name: $name) {
        name
        email
        password
      }
    }
  `
  const LOGIN_MUTATION = gql`
    mutation logUser($email: String!, $password: String!) {
      logUser(email: $email, password: $password) {
        password
        email
      }
    }
  `
  // const LOGIN_MUTATION = gql`
  //   mutation logUser($email: String!) {
  //     logUser(email: $email) {
  //       password
  //       email
  //     }
  //   }
  // `
  const navigate = useNavigate()
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: '',
  })

  const [login] = useMutation(LOGIN_MUTATION, {
    variables: {
      email: formState.email,
      password: formState.password,
    },
    onCompleted: async (data) => {
      let email = ''
      try {
        // const { email } = data.logUser
        email = data.logUser.email
      } catch (error) {
        window.alert('Invalid credential')
        email = ' '
      }

      // const rawResponse = await fetch('/login', {
      const rawResponse = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const content = await rawResponse.json()

      console.log('CONTENT', content)
      localStorage.setItem(AUTH_TOKEN, content)
      navigate('/')
    },
  })

  const [signup] = useMutation(ADD_USER, {
    variables: {
      name: formState.name,
      email: formState.email,
      password: formState.password,
    },
    onCompleted: async (data) => {
      const { email } = data.addUser
      const rawResponse = await fetch('http://localhost:8000/create', {
        // const rawResponse = await fetch('/create', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      const content = await rawResponse.json()

      console.log('rawResponse:', content)
      localStorage.setItem(AUTH_TOKEN, content)
      navigate('/')
    },
  })

  return (
    <div className='flex justify-center'>
      <div className=' flex flex-col justify-between h-32 bg-white'>
        <div className='bg-white w-96 pl-1'>
          <h2>{formState.login ? 'Login' : 'Sign Up'}</h2>

          <div>
            {!formState.login && (
              <div>
                <input
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  type='text'
                  placeholder='your name'
                />
              </div>
            )}

            <input
              value={formState.email}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  email: e.target.value,
                })
              }
              type='text'
              placeholder='your email address'
            />
          </div>

          <div>
            <input
              value={formState.password}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  password: e.target.value,
                })
              }
              type='password'
              placeholder='a password'
            />
          </div>
        </div>

        <div className='bg-white flex flex-row w-96'>
          <button
            className='pointer mr2 button'
            onClick={formState.login ? login : signup}
          >
            {formState.login ? 'login' : 'create account'}
          </button>

          <button
            className='pointer button pl-1'
            onClick={(e) =>
              setFormState({
                ...formState,
                login: !formState.login,
              })
            }
          >
            {formState.login ? '(or create an account)' : '(have an account?)'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
