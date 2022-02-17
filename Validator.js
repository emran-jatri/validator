const Validator = (obj) => {
  const isString = () => {
    if (typeof obj.value !== "string") {
      console.log(`${obj.key} is not string!`);
    }
    return Validator(obj);
  };

  const isNumber = () => {
    if (typeof obj.value !== "number") {
      console.log(`${obj.key} is not a number!`);
    }
    return Validator(obj);
  };

  const minNumber = (minNumber) => {
    if (typeof obj.value === "number" && obj.value < minNumber) {
      console.log(`${obj.key} is less than ${minNumber}!`);
    }
    return Validator(obj);
  };

  const maxNumber = (maxNumber) => {
    if (typeof obj.value === "number" && obj.value > maxNumber) {
      console.log(`${obj.key} is less than ${maxNumber}!`);
    }
    return Validator(obj);
  };

  const isArray = () => {
    if (!Array.isArray(obj.value)) {
      console.log(`${obj.key} is not an array!`);
    }
    return Validator(obj);
  };

  const isObject = () => {
    if (typeof obj.value !== "object") {
      console.log(`${obj.key} is not an object!`);
    } else {
      if (obj.value === null || Array.isArray(obj.value)) {
        console.log(`${obj.key} is not an object!`);
      }
    }
    return Validator(obj);
  };

  const required = () => {
    if (obj.value === "" || obj.value === null || obj.value === undefined) {
      console.log(`${obj.key} is required!`);
    }
    return Validator(obj);
  };

  const minLength = (minLength) => {
    if (typeof minLength === "number") {
      if (typeof obj.value === "string" && obj.value.length < minLength) {
        console.log(`${obj.key} is smaller than it's minLength!`);
      }
    }
    return Validator(obj);
  };

  const maxLength = (maxLength) => {
    if (typeof maxLength === "number") {
      if (typeof obj.value === "string" && obj.value.length > maxLength) {
        console.log(`${obj.key} is greater than it's maxLength!`);
      }
    }
    return Validator(obj);
  };

  const isEmail = (email) => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    );
    if (!isValidEmail) {
      console.log(`${obj.key} is not valid email address!`);
    }
    return Validator(obj);
  };

  const notNull = () => {
    if (obj.value === null) {
      console.log(`${obj.key} should not be null!`);
    }
    return Validator(obj);
  };

  const isPassword = (password) => {
    // Minimum eight characters, at least one letter and one number:

    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    // Minimum eight characters, at least one letter, one number and one special character:

    // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:

    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

    const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      password
    );

    if (!isValidPassword) {
      console.log(
        `${obj.key} is not valid. it must have minimum eight characters, at least one letter and one number!`
      );
    }
    return Validator(obj);
  };

  return {
    isString,
    isNumber,
    isArray,
    isObject,
    required,
    minLength,
    maxLength,
    isEmail,
    notNull,
    isPassword,
    minNumber,
    maxNumber,
  };
};

export default Validator;
