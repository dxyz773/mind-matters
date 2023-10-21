import '@passageidentity/passage-elements/passage-register';
import React, { useEffect } from 'react';

function Signup() {
  
  function checkvalidation(){
    console.log("The identifier is "+ identifier );
    return true
  }
  //add user to database here 
  function beforeAuth(identifier) {
   console.log("the identifier is "+ identifier)
    return true
  }

  useEffect(() => {
    const passageRegisterElement = document.querySelector('passage-register');

    if (passageRegisterElement) {
      // Set the beforeAuth callback
      passageRegisterElement.beforeAuth = beforeAuth;
    }
  }, []);

  return (
    <div>
      <passage-register app-id="yKCRLJ0k5VFjLECim3ynXoSW"></passage-register>
    </div>
  
  );
}

export default Signup;
