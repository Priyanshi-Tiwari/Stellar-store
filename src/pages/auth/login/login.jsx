import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div class="flex-col login-container gap-sm">
      <h2 class="login-header">Login</h2>
      <label class="login-email" for="login-email">Email Address</label>
      <input type="email" name="email" id="login-email" class="email-input" />
      <label class="login-email" for="login-password">Password</label>
      <input
        type="password"
        name="password"
        id="login-email"
        class="email-input"
      />
      <div class="show-password">
        <input
          type="checkbox"
          name="checkbox"
          class="show-pass-input"
          id="showpassword"
        />
        <label class="show-pass-input" for="showpassword">Show password</label>
        <a class="forgot-password" href="#">
          <span>Forgot password?</span>
        </a>
      </div>
      <button class="btn btn-primary-light">
        <a class="login-label" href="#">Login</a>
      </button>
      <small class="create-acc-text">
        Not a user yet?
        <Link class="create-acc-head" to="/signup">Create account</Link>
      </small>
    </div>
  )
}

export {Login}