import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Container, Wapper } from "./styled";

const AppBar = () => {
  const { data: session } = useSession();
  console.log({ session });

  return (
    <Container>
        <Link
        style={{ textDecoration: "none", padding: "0px 50px", }}
         href={"/"}>Home</Link>

        <Link
          style={{ textDecoration: "none", padding: "0px 50px", }}
          className="text-sky-600 hover:text-sky-700"
          href={"/admin/panel"}
        >
          Admin Panel
        </Link>

        <Link
        style={{ textDecoration: "none", padding: "0px 50px", }}
        className="text-sky-600 hover:text-sky-700" href={"/user"}>
          User Panel
        </Link>

        <Wapper>
          {session?.user ? (
            <>
              <p> {session.user.name}</p>
              <button onClick={() => signOut()}>
                Sign Out
              </button>
            </>
          ) : (
            <button onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </Wapper>
    </Container>
  );
};

export default AppBar;
