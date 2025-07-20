import Image from "next/image";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-gray-300">
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        <h1 className="text-3xl font-bold mb-6">Chatbot - Clínica de Atención Primaria</h1>
        <Chatbot />
      </main>
      <footer className="fixed bottom-0 left-0 right-0 flex gap-[24px] flex-wrap items-center justify-center">
        <p>© 2025 Chatbot Clinica. All rights reserved.</p>
      </footer>
    </div>
  );
}
