import { getRuntimeEnvVars } from "@/features/env";
import Image from "next/image";

export default function Home() {
  return <h1>MY_ENV_VAR: {getRuntimeEnvVars().MY_ENV_VAR}</h1>;
}
