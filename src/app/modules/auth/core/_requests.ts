import axios from 'axios'
import {AuthModel, UserModel} from './_models'
import { UserLogin } from './Auth'

const API_URL = process.env.REACT_APP_API_URL

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/verify_token`
export const LOGIN_URL = `${API_URL}/login`
export const REGISTER_URL = `${API_URL}/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(email: string, password: string) {
  return axios.post<AuthModel>(LOGIN_URL, {
    email,
    password,
  })
}

// Server should return AuthModel
export function register(
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  password_confirmation: string
) {
  return axios.post(REGISTER_URL, {
    email,
    first_name: firstname,
    last_name: lastname,
    password,
    password_confirmation,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(email: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    email,
  })
}

export function getUserByToken(token: string) {
  return axios.post<UserModel>(GET_USER_BY_ACCESSTOKEN_URL, {
    api_token: token,
  })
}

const userList = [
  {
    email: "teacher@miamo.com",
    password: "teacher123",
    role: "teacher"
  },
  {
    email: "student@miamo.com",
    password: "student123",
    role: "student"
  }
]

export async function staticLogin(params) {
  const user = userList.find(e => e.email === params.email && e.password === params.password)
  const userLoggedInData = await UserLogin(user)

  if(userLoggedInData) {
    return user;
  } else {
    return false
  }
}