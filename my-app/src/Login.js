import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/user/userSlice';
import './Login.css'
function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter your full name");
    }
    auth.createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user.updateProfile({
          displayName: name,
          photoURL: profile,
        })
          .then(() => {
            dispatch(
              login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profile,
            }))
          })
      }).catch((error) => alert(error));
  };
  const loginApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL
      }))
    }).catch(error => alert(error));
  };
  return (
    <div className='login'>

      <img src='https://career.gatech.edu/sites/default/files/images/linkedin-banner_0.png' />
      <form>
        <input placeholder='Please enter your full name'
          value={name}
          onChange={e => setName(e.target.value)}
          type='text' />

        <input
          placeholder="Profile pic URL(optional)"
          type="text"
          value={profile}
          onChange={e => setProfile(e.target.value)}
        />

        <input placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email' />

        <input placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password' />

        <button type='submit' onClick={loginApp}>Sign In</button>
      </form>
      <p>Not a user?
        <span className='login_register' onClick={register}>Register now</span>
      </p>

    </div>
  )
}

export default Login