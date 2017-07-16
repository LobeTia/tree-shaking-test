class Logger {
  logMessage(msg) {
    console.log(msg);
  }

  debugMessage(msg) {
    console.debug(msg);
  }
}

class NameHelper {
  getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

export {
  Logger,
  NameHelper
}