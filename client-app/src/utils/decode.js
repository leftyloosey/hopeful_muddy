import { jwtDecode } from 'jwt-decode'

// const token = "eyJ0eXAiO.../// jwt token";

const dayCode = (token) => {
  const decoded = jwtDecode(token)
  return decoded
}

// console.log(dayCode)

export { dayCode }
