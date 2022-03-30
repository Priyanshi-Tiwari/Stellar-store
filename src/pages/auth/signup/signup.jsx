import React from 'react'


const SignUp = () => {
  return (
    <div class="flex-col login-container gap-sm">
      <h2 class="login-header">Sign Up</h2>
      <label class="login-email" for="signup-name">First Name</label>
      <input type="email" name="email" id="signup-name" class="email-input" />
      <label class="login-email" for="signup-last-name">Last Name</label>
      <input
        type="email"
        name="email"
        id="signup-last-name"
        class="email-input"
      />
      <label class="login-email" for="login-email">Email Address</label>
      <input type="email" name="email" id="login-email" class="email-input" />
      <label class="login-email" for="login-password">Password</label>
      <input
        type="password"
        name="password"
        id="login-email"
        class="email-input"
      />
      <label class="login-email" for="confirm-password">Confirm Password</label>
      <input
        type="password"
        name="password"
        id="confirm-password"
        class="email-input"
      />
      <div class="show-password">
        <input
          type="checkbox"
          name="checkbox"
          class="show-pass-input"
          id="showpassword"
        />
        <label class="show-pass-input" for="showpassword"
          >I agree to all terms and conditions</label
        >
      </div>
      <button class="btn btn-primary-light">
        <a class="login-label" href="#">Sign Up</a>
      </button>
    </div>
  )
}

export  {SignUp}