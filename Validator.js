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
    if (typeof obj.value === "string" && obj.value === "") {
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

  return {
    isString,
    isNumber,
    isArray,
    isObject,
    required,
    minLength,
    maxLength,
  };
};

export default Validator;
