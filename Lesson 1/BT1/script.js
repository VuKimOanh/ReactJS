function isValidEmail(email) {
    var emailPattern = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    if (emailPattern.test(email)) {
        return true; // Email hợp lệ
      } else {
        return false; // Email không hợp lệ
      }
    }