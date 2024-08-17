import Image from "next/image";
import { Button } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button type="primary">Sou um botão primary</Button>
    </main>
  );
}
