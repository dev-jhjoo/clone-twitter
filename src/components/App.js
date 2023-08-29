import React, { useState } from 'react';
import MyRouter from "components/Router";
import { authService } from 'myBase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <MyRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Clone Twitter</footer>
    </>
  );
}

export default App;
