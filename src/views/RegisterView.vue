<script setup>

</script>

<template>
    <div class="page-wrapper">
        <div class="page-content">
            <div class="container">
                <div class="login-wrap">
                    <div class="login-content">
                        <div class="login-logo">
                            <a href="#">
                                <img src="../assets/images/LapLok_Logo.png" alt="Laplok" />
                                <p class="lh-sm" style="font-size: small; color: black; ">TechLok Solutions only collects this information for backup security purposes to ensure you have a method to retrieve your code if lost or forgotten.   
                                We will not sell, distribute, or authorize 3rd parties to your data.   
                                We use extensive security protocols for securing your information.</p>
                            </a>
                        </div>
                        <div class="login-form">
                            <form id="frmSignup">

                                <div class="form-group">
                                    <label>First Name</label>
                                    <input class="au-input au-input--full" type="text" id="txtFirstName" name="FirstName" placeholder="First Name" required>
                                </div>
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input class="au-input au-input--full" type="text" id="txtLastName" name="LastNane" placeholder="Last Name" required>
                                </div>
                                <div class="form-group">
                                    <label>Email Address</label>
                                    <input class="au-input au-input--full" type="email" id="txt_up_Email" name="EmailAddress" placeholder="Email" required>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input class="au-input au-input--full" type="password" name="PasswordHash" id="txt_up_password" placeholder="Password" required>
                                </div>
                                <div class="form-group">
                                    <label style="font-size: x-small;">
                                        Your password must be at least 8 characters long, contain at least one number and have a mixture of uppercase and lowercase letters and one special character.
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input class="au-input au-input--full" type="password" name="ConfirmPassword" id="txt_up_Cpassword" placeholder="Confirm Password" required>
                                </div>
                                <button class="au-btn au-btn--block au-btn--blue m-b-20" type="button" id="btnSignUp">register</button>
                                <!-- <div id="loader" data-wordLoad="Please Wait"></div> -->
                            </form>
                            <div class="register-link">
                                <p>
                                    Already have account?
                                    <a href='https://reset.laplok.com/Security/Account/Login'>Log In</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>