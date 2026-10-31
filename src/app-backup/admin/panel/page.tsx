"use client";
import Button from "../../../components/elements/Button";
import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { User } from "../../../types/interfaces";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userData, setUserData] = useState<User>();

  const fetchUserProfile = async () => {
    console.log(session);

    const res = await fetch(`http://localhost:3027/ivrweb/user/${session?.user.userName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${session?.user.accessToken}`,
      },
    });
    const data = await res.json();
    setUserData(data);
  };

  return (
    <div>
      <p>This Is The Admin Panel. Only Admin Users Can Access This.</p>
      <Button onClick={fetchUserProfile}>Get User Profile</Button>

      <div>
        <p>UserName:</p>
        <p>{userData?.userName}</p>
        <p>Name:</p>
        <p>{userData?.name}</p>
        <p>Role:</p>
        <p> {userData?.role}</p>
      </div>
    </div>
  );
};

export default page;