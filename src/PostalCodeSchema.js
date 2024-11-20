class PostalValidator {
  constructor() {
    this.regex = new RegExp('^ZIP.*$');
  }
  // isCode(str) {
  //   return `${str}`.startsWith('ZIP');
  // }

  setPostalCodeLengthConstraint(mn, mx = '') {
    // this.min = mn;
    // this.max = mx;
    this.regex = new RegExp(`^ZIP_.{${mn},${mx}}$`);
    // console.log(this.regex);
    return this;
  }
// xyzZIP_123vw
  // isNormLength(str) {
  //   if (!this.min) return true;
  //   const [, code] = str.split('_');
  //   return this.min <= code.length && this.max >= code.length;
  // }

  isValid(str) {
    // return this.isCode(str) && this.isNormLength(str);
    return this.regex.test(str);
  }
}

export default PostalValidator;
