export const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };
  
  export const sanitizeInput = (input) => {
    const sanitizedInput = input.replace(/[^a-zA-Z0-9._%+-@]/g, ''); // Remove any characters that are not allowed in an email
    return sanitizedInput;
  };
  