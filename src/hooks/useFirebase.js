import { useEffect, useState } from 'react';
import initAppAuth from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
  getIdToken,
} from 'firebase/auth';
import { useHistory } from 'react-router';

initAppAuth();

const useFirebase = () => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const [admin, setAdmin] = useState(false);
  const [token, setToken] = useState('');

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //Register User

  const registerUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setAuthError('');
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Save user to db
        saveUser(email, name, 'POST');

        //send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.replace('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorMessage, errorCode);
      })
      .finally(() => setIsLoading(false));
  };

  // Login User with email password

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Redirect
        const destination = location?.state?.from || '/';
        history.replace(destination);
        setAuthError('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode);
        setAuthError(errorCode, errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // Sign in with Google

  const signInWithGoogle = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        setUser(user);
        setAuthError('');
        // Redirect
        const destination = location?.state?.from || '/';
        history.replace(destination);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        setAuthError(errorCode, errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // observe user state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user).then((idToken) => {
          setToken(idToken);
          // console.log(idToken);
        });
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, []);
  // load admin data
  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  // Log out user

  const logout = () => {
    signOut(auth)
      .then(() => {
        history.replace('/home');
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('http://localhost:5000/users', {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert('successfully registered');
        }
      });
  };

  // return unit
  return {
    user,
    registerUser,
    logout,
    loginUser,
    isLoading,
    authError,
    signInWithGoogle,
    admin,
    token,
  };
};
export default useFirebase;
