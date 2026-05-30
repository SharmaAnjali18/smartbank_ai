import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const registerUser = async () => {

    try {

      const res = await axios.post(
        "http://localhost:8000/register",
        {
          name,
          email
        }
      );

      alert(res.data.message);

      navigate("/login");

    } catch(err) {

      alert(
        err.response?.data?.message ||
        "Registration failed"
      );

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

      <div className="
        bg-white/70
        backdrop-blur-lg
        border border-white/30
        shadow-2xl
        rounded-3xl
        p-10
        w-full
        max-w-md
      ">

        <h1 className="
          text-4xl
          font-bold
          text-center
          text-blue-700
        ">
          SmartBank AI
        </h1>

        <p className="
          text-center
          text-gray-500
          mt-3
        ">
          Create your account
        </p>

        {/* Name */}

        <div className="mt-8">

          <input
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              border border-gray-200
              outline-none
              focus:ring-4
              focus:ring-blue-200
            "
          />

        </div>

        {/* Email */}

        <div className="mt-5">

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              p-4
              rounded-2xl
              border border-gray-200
              outline-none
              focus:ring-4
              focus:ring-blue-200
            "
          />

        </div>

        {/* Register Button */}

        <button
          onClick={registerUser}
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
          "
        >
          Register
        </button>

        {/* Login Link */}

        <p className="
          text-center
          mt-6
          text-gray-600
        ">
          Already have an account?

          <Link
            to="/login"
            className="
              text-blue-600
              font-semibold
              ml-2
            "
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}