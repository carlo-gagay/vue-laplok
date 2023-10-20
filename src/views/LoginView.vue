<script setup>
import GuestLayout from '../layouts/GuestLayout.vue'
</script>

<template>
  <GuestLayout>
    <div class="page-wrapper">
      <div class="page-content--bge5">
        <div class="container">
          <div class="login-wrap">
            <div class="login-content">
              <div class="login-form">
                <form id="frmLogin">
                  <div class="banner">
                    <h2>Welcome to<br />Recording and Resetting</h2>
                    <h3>Access your LapLok account below.</h3>
                  </div>
                  <h2>Login</h2>
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      class="au-input au-input--full"
                      type="email"
                      id="txt_in_Email"
                      name="EmailAddress"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      class="au-input au-input--full"
                      type="password"
                      id="txt_in_password"
                      name="PasswordHash"
                      placeholder="Password"
                      required
                    />
                    <span class="eyespan" role="button" title="Show Password" id="passBtn">
                      <i class="fa fa-eye-slash" aria-hidden="true"></i>
                    </span>
                  </div>
                  <button
                    class="au-btn au-btn--block au-btn--blue m-b-20"
                    id="btnLogin"
                    type="button"
                    @click="() => $router.push('/account-details')"
                  >
                    Log In
                  </button>
                  <div class="login-checkbox">
                    <label> </label>
                    <label>
                      <a
                        id="forgot_password"
                        href="https://reset.laplok.com/Security/Account/ForgetPassword"
                        >Forgotten your Password?</a
                      >
                    </label>
                  </div>
                  <div class="social-login-content">
                    <div class="social-button">
                      <p>Don't have an account yet?</p>
                      <button
                        class="au-btn au-btn--block au-btn--blue m-b-20"
                        id="btnCreateAccount"
                        type="button"
                        @click="() => $router.push('/register')"
                      >
                        Create Account
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </GuestLayout>
</template>
