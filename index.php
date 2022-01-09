
<!DOCTYPE html>
<html class="no-js" lang="en">
  <head>
    <meta charset="utf-8" />

    <!--====== Title ======-->
    <title>eCommerce HTML | Login</title>

    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!--====== Favicon Icon ======-->
    <link
      rel="shortcut icon"
      href="assets/images/favicon.png"
      type="image/png"
    />

    <!--====== Tiny Slider CSS ======-->
    <link rel="stylesheet" href="assets/css/tiny-slider.css" />

    <!--====== Line Icons CSS ======-->
    <link rel="stylesheet" href="assets/css/LineIcons.css" />

    <!--====== Material Design Icons CSS ======-->
    <link rel="stylesheet" href="assets/css/materialdesignicons.min.css" />

    <!--====== Bootstrap CSS ======-->
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />

    <!--====== gLightBox CSS ======-->
    <link rel="stylesheet" href="assets/css/glightbox.min.css" />

    <!--====== nouiSlider CSS ======-->
    <link rel="stylesheet" href="assets/css/nouislider.min.css" />

    <!--====== Default CSS ======-->
    <link rel="stylesheet" href="assets/css/default.css" />

    <!--====== Style CSS ======-->
    <link rel="stylesheet" href="assets/css/style.css" />
  </head>

  <body>
    <?php
    if(isset($_REQUEST['email']))
    {  
     $email=$_REQUEST['email'];
     $pwd=$_REQUEST['pwd'];

      include("connectdb.php");
      include("basic.php");
      $sql = "SELECT uid,username,role,gender FROM user where email='$email' and pwd='$pwd'";

      $result =$connect->query($sql);

      /* fetch associative array */
      if ($row = $result->fetch_assoc()) { 
          //printf("%s (%s)\n", $row["Name"], $row["CountryCode"]);
          $uid=$row['uid'];
          $username=$row['username'];    
          $role=$row['role'];
          $gender=$row['gender'];

          echo "role='$role' gender='$gender' username='$username' uid='$uid'";

          session_start();
          $_SESSION['uid']=$uid;
          $_SESSION['role']=$role;
          $_SESSION['gender']=$gender;
          $_SESSION['email']=$email;
          $_SESSION['username']=$username;

          switchto('home.php');
      }
      else echo "帳號或密碼錯誤";

    }
    ?>
    <!--====== Page Banner Part Start ======-->


    <!--====== Navbar White Page Banner Part Ends ======-->

    <!--====== Login Part Start ======-->

            <div
              class="
                login-registration-style-1 login-registration-dark-style-1
                mt-50
              "
            >
              <h1 class="heading-4 font-weight-500 title">
                Login to your account
              </h1>
              <ul>
                <li>
                  <a href="#0" class="facebook-login-registration"
                    ><i class="lni lni-facebook-original"></i>
                    <span>Login with Facebook</span></a
                  >
                </li>
                <li>
                  <a href="#0" class="google-login-registration"
                    ><img src="assets/images/google-logo.svg" alt="" />
                    <span>Login with Google</span></a
                  >
                </li>
              </ul>
              <p class="account">or Log In with Email</p>
              <div class="login-registration-form pt-10">
                <form action="index.php" method='post'>
                  <div class="single-form form-white form-border">
                    <label>Email Address</label>
                    <div class="form-input">
                      <input type="email" name='email' placeholder="user@email.com" />
                      <i class="mdi mdi-email"></i>
                    </div>
                  </div>
                  <div class="single-form form-white form-border">
                    <label>Choose Password</label>
                    <a class="forget" href="#0">Forget Password?</a>
                    <div class="form-input">
                      <input
                        name='pwd'
                        id="password-2"
                        type="password"
                        placeholder="Password"
                      />
                      <i class="mdi mdi-lock"></i>
                      <span
                        toggle="#password-2"
                        class="mdi mdi-eye-outline toggle-password"
                      ></span>
                    </div>
                  </div>
                  <div class="single-checkbox checkbox-style-3">
                    <input type="checkbox" id="login-2" />
                    <label for="login-2"><span></span> </label>
                    <p>Remember Me</p>
                  </div>
                  <div class="single-form">
                    <button class="main-btn secondary-1-btn">Signin</button>
                  </div>
                </form>
              </div>
              <p class="login">
                Don’t have an account? <a href="#0">Sign up</a>
              </p>
            </div>
          </div>
        </div>

    <!--====== Login Part Ends ======-->

    <!--====== Bootstrap js ======-->
    <script src="assets/js/bootstrap.bundle.min.js"></script>

    <!--====== Tiny Slider js ======-->
    <script src="assets/js/tiny-slider.js"></script>

    <!--====== nouiSlider js ======-->
    <script src="assets/js/nouislider.min.js"></script>

    <!--====== count up js ======-->
    <script src="assets/js/count-up.min.js"></script>

    <!--====== gLightBox js ======-->
    <script src="assets/js/glightbox.min.js"></script>

    <!--====== Main js ======-->
    <script src="assets/js/main.js"></script>
  </body>
</html>
