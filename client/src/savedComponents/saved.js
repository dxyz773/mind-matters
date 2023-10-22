<div id="thirdRowContainer">
    <div id="welcomeBackFormContainer">
        <div id="alreadyHaveAcctQuestion">
            <p id="alreadyQuestion">Already have an account?</p>
        </div>
        <div id="welcomeBackFormTitle">
            <h1>Welcome Back</h1>
            <p id="login-to-your-account">Log into your account</p>
        </div>
        <div id="welcomeBackForm">
            <form action="#" method="post">
                <div id="emailInput">
                    <label htmlFor="email"></label>
                    <input type="email" id="welcomeBackEmail" name="email" placeholder="Enter Email" required />
                </div>
                <label htmlFor="password"></label>
                <input type="password" id="welcomeBackPassword" name="password" placeholder="Password" required pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[A-Za-z0-9!@#\$%^&*]{8,}$"
                    title="Password must be at least 8 characters long, containing at least one number, one capital letter, and one special character" />

                <div id="rememberMeCheckBox">
                    <label htmlFor="remember-me">Remember Me:</label>
                    <input type="checkbox" id="remember-me" name="remember-me" />
                    <button id="recoverBtn" type="button">Recover Password</button>

                </div>
                <div id="welcomeBackLoginButton">
                    <button id="logInBtn" type="submit">Log In</button>
                </div>
            </form>
        </div>
    </div>
    <div id="getStartedFormContainer">
        <div id="dontHaveAcctQuestion">
            <p id="dontQuestion">Don&apos;t have an account?</p>
        </div>
        <div id="getStartedFormTitle">
            <h1>Get Started With Mind Matters</h1>
        </div>
        <div id="getStartedForm">
            <form action="#" method="post">
                <div id="getStartedNameContainer">
                    <label htmlFor="name"></label>
                    <input type="text" id="getStartedName" name="name" placeholder="Full Name" required />
                </div>
                <div id="signUpEmailContainer">
                    <label htmlFor="email"></label>
                    <input type="email" id="signUpEmail" name="email" placeholder="Enter Email" required />
                </div>
                <div id="getStartedPasswordContainer">
                    <label htmlFor="password"></label>
                    <input type="password" id="getStartedPassword" name="password" placeholder="Password" required pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[A-Za-z0-9!@#\$%^&*]{8,}$"
                        title="Password must be at least 8 characters long, containing at least one number, one capital letter, and one special character" />
                </div>
                <div id="confirmPasswordContainer">
                    <label htmlFor="password"></label>
                    <input type="password" id="confirmPassword" name="password" placeholder="Password" required pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%^&*])[A-Za-z0-9!@#\$%^&*]{8,}$"
                        title="Password must be at least 8 characters long, containing at least one number, one capital letter, and one special character" />
                </div>
                <div id="createAccountButton">
                    <button id="createAccountBtn" type="submit">Create Account</button>
                </div>

            </form>
        </div>

    </div>
</div>;