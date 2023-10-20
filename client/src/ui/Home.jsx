function Home() {
  return <div>
    <div id="homeIntro">
      <h1 id="stay_on_track">Stay On Track With  Your Personal <span id="well-being">Well-being</span> Companion </h1>
      <p id="receive_personalized">Receive personalized activity recommendations to boost your mental health and track your progress on a journey towards a happier, more balanced you. Let us be your guide to a better state of mind.</p>
    </div>
    <div id="homepageButtons">
      <button id="signUpBtn">Sign Up</button>
      <button id="learnMoreBtn">Learn More</button>
    </div>
    <div id="secondRowContainer">
      <div id="ourMissionContainer">
        <h2 id="missionHeading">Our Mission</h2>
        <p id="missionStatement">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis felis velit, egestas vel dui sed, semper convallis quam. Cras id eros felis. Sed vehicula, ex vitae euismod suscipit, lacus erat sagittis dolor, non volutpat erat tellus ac velit. Phasellus placerat consequat risus in bibendum. Morbi condimentum dui sem, ut posuere purus lacinia id. Pellentesque in dolor vulputate, vehicula leo ac, ultricies nibh. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
        <div id="learn-more-mission-btn-container"><button id="learnMoreMissionBtn">Learn More</button></div>
      </div>
      <div id="phoneTargetImage">IMAGE HERE!</div>
    </div>
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
  </div>


}

export default Home;
Home;


