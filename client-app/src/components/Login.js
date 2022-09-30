import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, gql } from '@apollo/client';
import { AUTH_TOKEN } from '../constants';
// import { useJwt } from "react-jwt";

// const token = "Your JWT";


const Login = () => {
    // const token = "Your JWT";
    // console.log(useJwt(token))
    // console.log(token)
    // console.log(decodedToken, isExpired)
    // const [name, setName] = useState('');
    // const [password, setPassword] = useState('');
    // const [email, setEmail] = useState('');


//     const ADD_USER = gql`
//     mutation AddUser(
//       $email: String!
//       $password: String!
//       $name: String!
//     ) {
//       addUser(
//         email: $email
//         password: $password
//         name: $name
//       ) {
//         token
//       }
//     }
//   `;

    const ADD_USER = gql`
    mutation AddUser(
    $email: String!
    $password: String!
    $name: String!
    ) {
    addUser(
        email: $email
        password: $password
        name: $name
    ) {
        name
    }
    }
    `;
  
//   const LOGIN_MUTATION = gql`
//     mutation LoginMutation(
//       $email: String!
//       $password: String!
//     ) {
//       loginMutation(email: $email, password: $password) {
//         token
//       }
//     }
//   `;

const LOGIN_MUTATION = gql`
  mutation logUser(
    $email: String!

  ) {
    logUser(email: $email) {
      
      email
    }
  }
`;


  

  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });


  const [login, { error, data }] = useMutation(LOGIN_MUTATION, {
    
    variables: {
      email: formState.email,
    //   password: formState.password
    },
    
    onCompleted: ({ login }) => {
    // onCompleted: () => {
    //   localStorage.setItem(AUTH_TOKEN, login.token);

    
      localStorage.setItem(AUTH_TOKEN, 'JWT');
      console.log("he missed!")
      console.log(AUTH_TOKEN)
      console.log("ERROR",error, data)
      
      navigate('/');
    }
  });
//   console.log(error, data)
  const [signup] = useMutation(ADD_USER , {
    variables: {
        // name, password, email
      name: formState.name,
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ data }) => {
    //   localStorage.setItem(AUTH_TOKEN, signup.token);


      localStorage.setItem(AUTH_TOKEN, "JWT");
      console.log(AUTH_TOKEN)
      navigate('/');
    }
  });


  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        {!formState.login && (
          <input
            value={formState.name}
            onChange={(e) =>
              setFormState({
                ...formState,
                name: e.target.value
              })
            }
            type="text"
            placeholder="Your name"
          />
        )}
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="a password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={formState.login ? login : signup}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'create an account?'
            : 'already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default Login;