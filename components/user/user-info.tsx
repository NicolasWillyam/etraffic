import { User } from "@prisma/client";
import React from "react";
import { ExtendedUser } from "../../next.auth";
import { Card, CardContent, CardHeader } from "../ui/card";

interface UserInfoProps {
  user?: ExtendedUser;
  label: string;
}

const UserInfo = ({ user, label }: UserInfoProps) => {
  return (
    <Card className="bg-hover justify-between items-center p-2.5 rounded-xl w-[600px] shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between  bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">ID</p>
          <p className="p-1 px-2 rounded bg-hover text-sm">{user?.id}</p>
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Name</p>
          <p className="p-1 px-2 rounded bg-hover text-sm">{user?.name}</p>
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Email</p>
          <p className="p-1 px-2 rounded bg-hover text-sm">{user?.email}</p>
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Role</p>
          <p className="p-1 px-2 rounded bg-hover text-sm">{user?.role}</p>
        </div>
        <div className="flex flex-row items-center justify-between bg-white rounded-lg p-3 shadow-sm">
          <p className="text-sm font-medium">Two Factor Authenciation</p>
          <p className="p-1 px-2 rounded bg-hover text-sm">{user?.isTwoFactorEnabled ? "ON" : "OFF"}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfo;
