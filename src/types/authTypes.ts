export type signInDataType = {
  username: string,
  password: string
}

export type signUpDataType = {
  username: string,
  password: string,
  repeatPassword: string
}

export type signInResponse = {
  user: {
    id: string,
    email: string,
    username: string,
    activated: boolean,
  },
  accessToken: string
}
