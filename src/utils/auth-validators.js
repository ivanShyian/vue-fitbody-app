import * as yup from 'yup'

const PASSWORD_LENGTH = 6
export const schemaValidatorLogin = yup.object({
  email: yup.string()
    .required('Enter email')
    .email('Invalid email'),
  password: yup.string()
    .required('Enter password')
    .min(PASSWORD_LENGTH, `Password can't be less then ${PASSWORD_LENGTH} symbols`)
})

export const registerValidator = yup.object({
  gender: yup.string().required('Choose gender please'),
  name: yup.string().required('Type your name or nickname'),
  birth: yup.object({
    day: yup.number()
      .typeError('Day must be a number')
      .required('You must choose day of your birth')
      .positive('Day can\'t be less than 0')
      .max(31, 'Max count of days in month is 31, bro :D'),
    month: yup.number()
      .typeError('Choose month please')
      .required('You must choose your month of birth from the list')
      .positive()
      .max(12),
    year: yup.number()
      .typeError('Year must be a number')
      .required('You must choose year of your birth')
      .min(1935, 'If you are over 85 years old - we didn\'t recommend you to use our app')
      .max(2015, 'Come back when you gonna be older :)')
  }),
  email: yup.string()
    .required('Enter email')
    .email('Invalid email'),
  password: yup.string()
    .required('Required password')
    .min(PASSWORD_LENGTH, `Password can't be less then ${PASSWORD_LENGTH} symbols`),
  passwordCheck: yup.string('Repeat password please')
    .required('Required password')
    .min(PASSWORD_LENGTH, `Password can't be less then ${PASSWORD_LENGTH} symbols`)
})
