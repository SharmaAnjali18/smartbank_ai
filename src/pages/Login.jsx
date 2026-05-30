import { useState } from "react";
import axios from "axios";

import {
  useNavigate,
  Link
} from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  /* =========================
      SEND OTP
  ========================= */

  const sendOTP = async () => {

    if (!email) {
      return alert("Please enter email");
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/send-otp",
        { email }
      );

      alert(res.data.message);

      setOtpSent(true);

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Failed to send OTP"
      );

    } finally {

      setLoading(false);

    }

  };

  /* =========================
      VERIFY OTP
  ========================= */

  const verifyOTP = async () => {

    if (!otp) {
      return alert("Please enter OTP");
    }

    try {

      setLoading(true);

      const res = await axios.post(
        "http://localhost:8000/verify-otp",
        {
          email,
          otp
        }
      );

      alert(res.data.message);

      navigate("/");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Verification failed"
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-blue-100
      via-indigo-100
      to-purple-100
      p-6
    ">

      {/* LOGIN CARD */}

      <div className="
        w-full
        max-w-md
        bg-white/70
        backdrop-blur-lg
        border border-white/30
        shadow-2xl
        rounded-3xl
        p-10
      ">

        {/* Logo */}

        <div className="text-center">

          <h1 className="
            text-4xl
            font-extrabold
            text-blue-700
          ">
            SmartBank AI
          </h1>

          <p className="
            text-gray-500
            mt-3
          ">
            Secure Banking Authentication
          </p>

        </div>

        {/* Email Input */}

        <div className="mt-8">

          <label className="
            text-sm
            font-medium
            text-gray-700
          ">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              mt-2
              p-4
              rounded-2xl
              border border-gray-200
              outline-none
              focus:ring-4
              focus:ring-blue-200
              transition-all
            "
          />

        </div>

        {/* Send OTP Button */}

        {!otpSent && (

          <button
            onClick={sendOTP}
            disabled={loading}
            className="
              w-full
              mt-6
              bg-blue-600
              hover:bg-blue-700
              text-white
              p-4
              rounded-2xl
              font-semibold
              transition-all
              duration-300
              disabled:opacity-50
            "
          >

            {loading
              ? "Sending OTP..."
              : "Send OTP"}

          </button>

        )}

        {/* OTP SECTION */}

        {otpSent && (

          <div className="mt-6">

            <label className="
              text-sm
              font-medium
              text-gray-700
            ">
              Enter OTP
            </label>

            <input
              type="text"
              placeholder="6 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="
                w-full
                mt-2
                p-4
                rounded-2xl
                border border-gray-200
                outline-none
                focus:ring-4
                focus:ring-green-200
                transition-all
              "
            />

            <button
              onClick={verifyOTP}
              disabled={loading}
              className="
                w-full
                mt-5
                bg-green-600
                hover:bg-green-700
                text-white
                p-4
                rounded-2xl
                font-semibold
                transition-all
                duration-300
                disabled:opacity-50
              "
            >

              {loading
                ? "Verifying..."
                : "Verify OTP"}

            </button>

          </div>

        )}

        {/* Register Link */}

        <p className="
          text-center
          mt-8
          text-gray-600
        ">

          Don't have an account?

          <Link
            to="/register"
            className="
              text-blue-600
              font-semibold
              ml-2
              hover:underline
            "
          >
            Register
          </Link>

        </p>

      </div>

    </div>
  );
}