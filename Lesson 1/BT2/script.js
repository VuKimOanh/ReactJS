function isValidAccount(account) {
    var accountPattern = /^[_a-z0-9]{6,}$/;
    return accountPattern.test(account);
  }
  