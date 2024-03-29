import ProfileCard from "@/components/ProfileCard/ProfileCard";
import TotalDraws from "@/components/TotalDraws/TotalDraws";
import { fetchEntries, fetchUser } from "@/utils/actions";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import NotFoundPage from "../not-found";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  if (session?.token) {
    const user = await fetchUser(session.token);
    const draws = await fetchEntries(1, session.token);
    const drawsCount = {
      active: draws.currentCount,
      inactive: draws.previousCount,
      total: draws.currentCount + draws.previousCount,
    };
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
          <TotalDraws drawsCount={drawsCount} session={session} />
        </div>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default ProfilePage;
