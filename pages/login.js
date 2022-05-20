import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="john.doe@email.com"
        onChange={handleChange}
        value={state.email}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter your password"
        onChange={handleChange}
        value={state.password}
      />
      <button>Login</button>
    </form>
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
