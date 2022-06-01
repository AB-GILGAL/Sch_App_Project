import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";

const Login = ({ csrfToken }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      ...state,
      redirect: false,
      callbackUrl: "/",
    });
    if (res.error) setError(res.error);
  };

  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover flex justify-center h-screen py-20 backg"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODh8fHNjaG9vbCUyMGNvbXBvdW5kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400",
      }}
    >
      <div className="max-w-3xl mx-auto p-10">
        <h1 className="text-center text-3xl text-white font-semibold italic">
          Log In
        </h1>
        <div className="border p-10 rounded-lg bg-gradient-to-r from-gray-400 to-transparent">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <p>{error}</p>}
            <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
            <div>
              <label htmlFor="email" className="block text-2xl text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block border border-slate-400  w-full rounded-lg text-xl p-1 outline-none"
                placeholder="john.doe@email.com"
                onChange={handleChange}
                value={state.email}
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-2xl text-white mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="block border border-slate-400  w-full rounded-lg text-xl p-1 outline-none"
                placeholder="Enter your password"
                onChange={handleChange}
                value={state.password}
              />
            </div>
            <p className="text-white">
              Don't have an account?{" "}
              <Link className="text-red-600 font-bold" href="/signUp">
                Sign Up
              </Link>
            </p>
            <button className="text-center text-white text-lg font-bold bg-green-400 rounded-full px-2">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  return {
    props: {
      csrfToken: await getCsrfToken(ctx),
    },
  };
}

export default Login;
