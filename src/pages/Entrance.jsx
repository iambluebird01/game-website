import React from 'react';
import { Link } from 'react-router-dom';

function Entrance() {
  return (
    <div>
      <Link className="link" to="login">
        Login
      </Link>
    </div>
  );
}

export default Entrance;
