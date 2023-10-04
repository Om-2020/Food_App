import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
    const err = useRouteError();
    //cartconsole.log(err);
  return (
    <div>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>

    </div>
  )
}

export default Error;