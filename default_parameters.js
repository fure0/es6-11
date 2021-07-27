/**
 * Default parameters
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 */
{
    // 💩
    {
      function printMessage(message) {
        if (message == null) {
          message = 'default message';
        }
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
  
    // ✨
    {
      function printMessage(message = 'default message') {
        console.log(message);
      }
  
      printMessage('hello');
      printMessage();
    }
    console.clear();
  }