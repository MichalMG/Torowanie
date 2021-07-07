function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^(((?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}))$/;
  return re.test(String(phone).toLowerCase());
}

const options = {
  required(value) {
    return value ? '' : 'Pole wymagane'
  },
  email(value) {
    return validateEmail(value) ? '' : 'Nieprawidłowy email';
  },
  password(value) {
    return value.length > 5 ? '' : 'Minimum 6 znaków'
  },
  phone(value) {
    return validatePhone(value) ? '' : 'Nieprawidłowy numer';
  },
  length(value, rule) {
    return value.length <= rule.length ? '' : `Maxymalna ilość znaków to: ${rule.length}`
  }
}

export default function validation(value, rules = []) {

  for (let i = 0; i < rules.length; i++) {
    const rule = rules[i];
    if (rule instanceof Object) {
      const response = options[rule.rule](value, rule);
      if (response) {
        return response;
      }
    } else {
      const response = options[rule](value);
      if (response) {
        return response;
      }
    }
  }

  return '';
}