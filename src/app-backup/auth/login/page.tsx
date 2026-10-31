"use client";
import Button from "../../../components/elements/Button";
import TextBox from "../../../components/elements/Textbox";
import { signIn } from "next-auth/react";
import { useRef } from "react";
import {Container, Wapper} from "./styled"
import React, {useState} from "react";

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const LoginPage = ({ searchParams }: IProps) => {
  const userName = useRef("");
  const pass = useRef("");
  // const [userInfo, setUserInfo] = useState({email: "", password: ""})
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
  return (
    <Container>
      {searchParams?.message && <p>{searchParams?.message}</p>}
      <Wapper>
        <TextBox lableText="Email" onChange={(e) => (userName.current = e.target.value)} />
        <TextBox lableText="Password" type={"password"} onChange={(e) => (pass.current = e.target.value)} />
        <Button onClick={onSubmit}>Login</Button>
      </Wapper>
    </Container>
  );
};

export default LoginPage;