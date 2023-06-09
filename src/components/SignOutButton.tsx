"use client";

import { FC, useState } from "react";
import { Button } from "@/ui/Button";
import { signOut } from "next-auth/react";
import { toast } from "./ui/Toast";

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<any>(false);

  const signUserOut = async () => {
    setIsLoading(true);
    try {
      await signOut();
    } catch (error) {
      toast({
        title: "Error signing out",
        message: "please try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      Sign out
    </Button>
    // <Button onClick={signUserOut}>Sign out</Button>
  );
};

export default SignOutButton;
