import React, { useEffect, useState } from 'react';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log('uid', uid);
        setUser(user);
      } else {
        // User is signed out
        // ...
        console.log('user is logged out');
      }
    });
  }, []);

  const navigate = useNavigate();
  const [user, setUser] = useState();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate('/home');
        console.log('Signed out successfully');
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>
        {user ? (
          <div>
            <div>You are logged in with user with uid: {user?.uid}</div>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <span>You are not logged in</span>
            <button onClick={() => navigate('/login')}>Sing In</button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Home;
