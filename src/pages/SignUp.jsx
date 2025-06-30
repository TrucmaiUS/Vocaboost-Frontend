import "../assets/icons/index";
import { Link } from "react-router-dom";
import AccountPageInput from "../components/AccountPageInput"
import MainPageLogo from "../assets/Logo.svg"
import { GoogleLogo } from "../assets/icons/index";

import authService from "../services/authService";

const handleSignUp = async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (password !== confirmPassword) {
    alert("Mật khẩu nhập lại không khớp!");
    return;
  }

  try {
    const res = await authService.register({ email, password });
    alert(res.message || "Đăng ký thành công! Kiểm tra email.");
  } catch (error) {
    alert(error.response?.data?.error || "Lỗi đăng ký.");
    console.error(error);
  }
};

const handleGoogleSignUp = () => {
  window.location.href = "http://localhost:3000/api/auth/google";
};


export default function SignUp() {
    return (
        <div className="grid-container">
            <div className="left-grid">
                <Link to="/" className="signup-logo">
                    <img src={MainPageLogo} alt="logo-page" />
                </Link>

                <div className="signup-container">

                    <div className="signup-signup-container">
                        <Link to="/signin" className="signup-signup-button">Sign in</Link>
                        <Link to="" className="signup-signup-button">Sign up</Link>
                    </div>

                    <Link onClick={handleGoogleSignUp} className="signup-google">
                        <img src={GoogleLogo} alt="google-logo" />
                        Continue with Google account
                    </Link>


                    <form className="signup-form" onSubmit={handleSignUp}>
                    <AccountPageInput
                        label="Email:" name="email" type="text" placeholder="Enter your email" required
                    />

                    <AccountPageInput
                        label="Password:" name="password" type="password" placeholder="Enter password" required
                    />

                    <AccountPageInput
                        label="Enter the password again:" name="confirmPassword" type="password" placeholder="Repeat password" required
                    />

                    <AccountPageInput type="submit" value="Sign up" />
                    </form>


                    {/* Back button  */}
                    <div className="signup-back-button-container">
                        <Link to="/" className="signup-back-button">Back</Link>
                    </div>
                </div>
            </div>

            <div className="right-grid">

            </div>
        </div>
    );
}