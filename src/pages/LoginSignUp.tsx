const LoginSignUp = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#fae3ff]">
      <div className="bg-white p-8 rounded-lg shadow-lg min-w-[40%] flex flex-col gap-4">
        <h3 className="text-lg font-semibold">SighUp</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded-md focus:outline-0"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 border border-gray-300 rounded-md focus:outline-0"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-md focus:outline-0"
        />
        <button className="bg-purple-600 text-white py-3 rounded-md hover:bg-purple-700 transition">
          Create Account
        </button>

        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <span className="text-purple-600 cursor-pointer">Login</span>
        </p>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="border border-gray-600" />
          <p className="text-gray-600 text-sm">
            By creating an account, you agree to our Terms of Service and
            Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
