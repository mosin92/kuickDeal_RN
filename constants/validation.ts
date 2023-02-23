
// Email validation 
function isValidEmail(value: any): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value: any, setEmailError: React.Dispatch<React.SetStateAction<any>>) {
    if (!value) {
        setEmailError("Email is required")
    }
    else if (isValidEmail(value)) {
        setEmailError("")
    }
    else {
        setEmailError("Invalid Email")
    }
}

//  password validation
const isValidPassword = (value: any): boolean => {
    // const res = /^(?=.{8,}$)(?=.*?[a-z].*?[a-z])(?=.*?[A-Z].*?[A-Z])(?=.*?[0-9].*?[0-9])(?=.*?\W.*?\W).*$/
    return value.length >= 8
}

const validatePassword = (value: number, setPasswordError: React.Dispatch<React.SetStateAction<any>>) => {
    if (!value)
        setPasswordError('Password is required')
    else if (isValidPassword(value)) {
        setPasswordError('')
    }
    else {
        setPasswordError("Must Contain 8 Characters")
    }
}

// confirm  password validation 

// const validateConfirmPassword = (value, setConfirmError) => {

// }

// validate FullName 

const validateName = (value: any, setNameError: React.Dispatch<React.SetStateAction<any>>) => {
    if (!value)
        setNameError("Full Name is required")
    else if (value) {
        setNameError('')
    }
}

// vaidate Mobile No

const validateMobileNo = (value: any, setMobileError: React.Dispatch<React.SetStateAction<any>>) => {
    if (!value)
        setMobileError("required*")
    else if (value.length < 11 || value.length > 11)
        setMobileError("Must be 12 digits")
    else {
        setMobileError('')
    }
}

export {
    validateEmail,
    validatePassword,
    validateName,
    validateMobileNo
}