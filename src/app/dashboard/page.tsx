import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth/next";
import { notFound } from "next/navigation";
import React from "react";

export default async function AdminDashboard() {
  const session = await getServerSession(authOptions);
  if (!session || session.user.role !== "admin") {
    notFound();
  }
  return (
    <div className="h-[100vh] pt-26">
      <h1>test</h1>
    </div>
  );
}
