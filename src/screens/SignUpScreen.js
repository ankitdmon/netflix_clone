import React,{useRef} from 'react'

import { auth } from '../firebase';
import './SignUpScreen.css'

function SignUpScreen() {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => {
      alert(error.message)
    });
  };

  return (
    <div className='signUpScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="Email" />
        <input ref={passwordRef} placeholder='Password' type="password" />
        <button className="submit_button"
          type="submit"
          onClick={signIn}
        >Sign In</button>

        <h4>
          <span className='signUp_grey '>New to Netflix?</span>
          <span className='signUp_link'
            onClick={register}> Sign Up now.</span>
        </h4>
      </form>
    </div>
  )
}

export default SignUpScreen