import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react';
import { auth, db } from "../firebase"

import Login from "./login";
import firebase from 'firebase/compat/app';
import Loading from '../components/loading';


function MyApp({ Component, pageProps }) {
  const [user ,loading] = useAuthState(auth);
useEffect(() => {
if(user){
  db.collection('users').doc(user.uid).set({
    email: user.email,
    lastseen: firebase.firestore.FieldValue.serverTimestamp(),
    photoURL: user.photoURL,

  },{marge: true});
}
  },[user]);


  if(loading) return <Loading/>
 if (!user) return <Login />

  return <Component {...pageProps} />

}

export default MyApp






