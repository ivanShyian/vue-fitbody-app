const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Пользователь с данным Email не найден. Повторите попытку!',
  INVALID_PASSWORD: 'Неверный пароль. Повторите попытку!',
  auth: 'Пожалуйста войдите в систему',
  smallPassword: 'Пароль не может быть меньше 6 символов'
}

export function error(message) {
  return ERROR_CODES[message] ? ERROR_CODES[message] : 'Неизвестная ошибка'
}
