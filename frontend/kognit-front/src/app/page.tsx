"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {

    if(authenticated){
      router.push("/dashboard");
    } else {
      router.push("/login");
    }

  }, []);
  return (
    <>
    </>
  )
}
