const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'User with exact email wasn\'t find. Try again!',
  INVALID_PASSWORD: 'Wrong password. Try again!',
  EMAIL_EXISTS: 'User with this email already registered',
  auth: 'Please log in to system',
  smallPassword: 'Password length can\'t be less then 6 symbols'
}

export function error(message) {
  return ERROR_CODES[message] ? ERROR_CODES[message] : 'Unknown error'
}
