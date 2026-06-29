"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Proxy({ children }) {
  const router = useRouter();

  useEffect(() => {

    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);

      if (parts.length === 2) {
        return parts.pop().split(";").shift();
      }

      return null;
    };


    const token = getCookie("auth_token");


    if (!token) {
      router.push("/login");
    }

  }, [router]);


  return <>{children}</>;
}