class PostalValidator {
  constructor() {
    this.regex = /\bZIP.+/;
    // this.regex = new RegExp('ZIP.+'); линтер ругается
  }

  setPostalCodeLengthConstraint(mn, mx = '') {
    this.regex = new RegExp(`\\bZIP_\\d{${mn},${mx}}`);
    // console.log(this.regex);
    return this;
  }

  isValid(str) {
    return this.regex.test(str);
  }
}

export default PostalValidator;
