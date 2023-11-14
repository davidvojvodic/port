import { ToggleTheme } from "@/components/toggle-theme";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex p-12 items-center">
      Hello
      <ToggleTheme />
    </main>
  );
}
