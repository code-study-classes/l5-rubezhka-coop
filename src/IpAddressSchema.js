class IpValidator {
  // isRealIp(str) {
  //   const digits = `${str}`.split('.');
  //   return digits.at(0) === '27' && digits.length === 4;
  // }
  constructor() {
    this.regex = /27\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]+/;
    // console.log(this.regex)
  }

  // 27.444.68849349039
  ipAddressValues() {
    // какая-то кривая регулярка, не работает, я не пофиксила, дальше сами
    this.regex = /^27(\.([0-9]{0,2}|1[0-9]{2}|2[0-4][0-9]|25[0-5])){3}$/;
    console.log(this.regex);
    return this;
  }

  // isNormDigits(str) {
  //   if (!this.checkValues) return true;
  //   const digits = str.split('.');
  //   return digits.filter((num) => num < 256 && num >= 0).length === 4;
  // }

  isValid(str) {
    // return this.isRealIp(str) && this.isNormDigits(str);
    return this.regex.test(str);
  }
}

export default IpValidator;
