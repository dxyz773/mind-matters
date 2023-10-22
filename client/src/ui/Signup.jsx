import '@passageidentity/passage-elements/passage-register';
import React, { useEffect } from 'react';

function Signup() {
  return (
<div class=" p-4 mt-8 container mx-auto">
    <div className="text-center font-bold">
    Register
</div>
        <passage-register app-id="yKCRLJ0k5VFjLECim3ynXoSW">
        </passage-register>
</div>
  );
}

export default Signup;
