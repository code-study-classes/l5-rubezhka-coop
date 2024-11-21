class IpValidator {
  constructor() {
    this.regex = /\b27(\.[0-9]{1,3}){3}/;
  }

  //.. - от 0 до 99 - [0-9]{1,2}  
  // .. - от 100 до 199 - 1\d{2}
  // .. - от 200 до 249 - 2[0-4]\d
  // .. - от 250 до 255 - 25[0-5]

  ipAddressValues() {
    this.regex = /\b27(\.(\d{1,2}|1\d{2}|2[0-4]\d|25[0-5])){3}/;
    console.log(this)
    return this;
  }

  isValid(str) {
    return this.regex.test(str)
  }
}

export default IpValidator;
