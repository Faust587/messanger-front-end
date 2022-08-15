export type errorType = {
  field: string,
  value: string
}

export type validationResultType = {
  result: boolean,
  errors: errorType[]
}

export type fieldErrorType = {
  error: boolean,
  value: string
}
