import PostalValidator from './src/PostalCodeSchema.js';
import IpValidator from './src/IpAddressSchema.js';
import UserValidator from './src/UserSchema.js';

class Validator {
  postalCode() {
    return new PostalValidator();
  }

  ipAddress() {
    return new IpValidator();
  }

  user() {
    return new UserValidator();
  }
}

const v = new Validator();
const postalCodeSchema2 = v.postalCode();
console.log(postalCodeSchema2.isValid('ZIP_12345')); // true
const postalCodeSchema3 = v.postalCode().setPostalCodeLengthConstraint(4);
console.log(postalCodeSchema3.isValid('ZIP_12345')); // true

const ipAddressSchema = v.ipAddress().ipAddressValues();
console.log(ipAddressSchema.isValid('27.16.0')); // true
ipAddressSchema.isValid('27.0.0.1'); // true
ipAddressSchema.isValid('172.16.0.1'); // false
ipAddressSchema.isValid('8.8.8.8'); // false
export default Validator;
