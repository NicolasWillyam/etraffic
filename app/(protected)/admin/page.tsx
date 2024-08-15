"use client";
import { RoleGate } from "@/app/auth/role-gate";
import FormSuccess from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import React from "react";
import { toast } from "sonner";

const AdminPage = () => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API Route!");
        console.log("OKAY");
      } else {
        toast.success("Forbidden API Route!");
        console.log("FORBIDDEN");
      }
    });
  };
  return (
    <Card className="bg-hover justify-between items-center p-2.5 rounded-xl w-[600px] shadow-sm">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">Admin Side</p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <RoleGate allowedRole={UserRole.USER}>
          <FormSuccess message="You are allowed to see this content!" />
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only API Route</p>
            <Button onClick={onApiRouteClick}>Click to test</Button>
          </div>
          <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-md">
            <p className="text-sm font-medium">Admin-only Server Action</p>
            <Button>Click to test</Button>
          </div>
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;