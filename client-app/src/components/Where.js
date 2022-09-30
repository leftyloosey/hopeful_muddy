// import React, { useState } from 'react';

  async function handleSubmit () {

    // const name = ''
    // const email = ''
    // const response = await fetch(`/path`, {
    //   method: 'POST',
    //   body: JSON.stringify({ name, email })
    // })

  const response = await  fetch('http://localhost:8000/path')
  .then((response) => response.json())
  .then((data) => console.log(data));
    console.log(response)
    // const { jwt_token } = await response.json()
    // console.log(jwt_token)
    // await login({ jwt_token })
  }

export default function Where() {

    handleSubmit()

}