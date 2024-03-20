"use client";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import TotalDraws from "@/components/TotalDraws/TotalDraws";
import { fetchUser } from "@/utils/actions";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const { data: session, update } = useSession();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    update();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchUser(session.token);
        setUser(user);
      } catch (e) {
        console.log(e);
      }
    };
    if (session?.token) {
      getUser();
    }
  }, [session]);

  return (
    <div
      style={{
        background:
          "linear-gradient(305deg, #1B0229 3.07%, #4A066F 47.68%, #65188E 89.86%)",
      }}
      className="w-full h-[100vh] flex items-center justify-center"
    >
      <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-2 gap-8">
        <ProfileCard user={user} />
        <TotalDraws />
      </div>
    </div>
  );
};

export default ProfilePage;
