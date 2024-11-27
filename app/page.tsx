"use server";
import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import Hero from "./shacn/Hero";
import Feature43 from "./shacn/feature43";
import Footer2 from "./shacn/footer2";
import Stat1 from "./shacn/stat1";
import Team1 from "./shacn/team1";
import Logos3 from "./shacn/logos3";

export default async function Home() {
  return (
    <>
      <Hero />
      <Feature43 />
      <Stat1 />
      <Team1 />
      <Logos3 />
      <Footer2 />
    </>
  );
}
