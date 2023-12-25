"use client";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
    const { data } = useSession();

    console.log(data);

  return (
    <div>
        <button onClick={()=>signIn("google")}>Login with Google</button>
        <button onClick={()=>signIn("github")}>Login with GitHub</button>
    </div>
  )
}

export default LoginPage;