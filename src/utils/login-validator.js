import * as yup from 'yup'

const PASSWORD_LENGTH = 6
export const schemaValidator = yup.object({
  email: yup.string()
    .required('Enter email')
    .email('Invalid email'),
  password: yup.string()
    .required('Enter password')
    .min(PASSWORD_LENGTH, `Password can't be less then ${PASSWORD_LENGTH} symbols`)
})
