import React, { useRef, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'

import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context'
import LoadingSpinner from '../UI/LoadingSpinner';

const ProfileForm = () => {
  const newPasswordRef = useRef()
  const authCtx = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const history = useHistory()


  const submitHandler = (e) => {
    e.preventDefault();

    const enteredNewPassword = newPasswordRef.current.value;

    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD_KsxbK981IH6ky97lLWpBsZpSeOLAfE4'
    setLoading(true)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: enteredNewPassword,
        returnSecureToken: false
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      setLoading(false)
      history.replace('/')
      return res.json()
    })
    .then(data => {console.log(data)})
    
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPasswordRef} type='password' minLength='7' id='new-password' />
      </div>
      <div className={classes.action}>
        {loading ? <LoadingSpinner /> : <button>Change Password</button>}
      </div>
    </form>
  );
}

export default ProfileForm;
