import { createAction } from '@reduxjs/toolkit'

type AuthByEmailAndPasswordType = {
  email: string
  password: string
}

const loginByEmailAndPassword = createAction<
  AuthByEmailAndPasswordType,
  'LOG_IN_BY_EMAIL_PASSWORD'
>('LOG_IN_BY_EMAIL_PASSWORD')

const signupByEmailAndPassword = createAction<
  AuthByEmailAndPasswordType,
  'SIGN_UP_BY_EMAIL_PASSWORD'
>('SIGN_UP_BY_EMAIL_PASSWORD')
const authSuccess = createAction<string, 'AUTH_SUCCESS'>('AUTH_SUCCESS')

const authActions = {
  loginByEmailAndPassword,
  signupByEmailAndPassword,
  authSuccess,
}

export default authActions
