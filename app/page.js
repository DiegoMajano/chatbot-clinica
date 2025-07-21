import Chatbot from "@/components/chat/Chatbot";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import AboutUs from "@/components/landing/AboutUs";
import Contact from "@/components/landing/Contact";
import ChatbotButton from "@/components/landing/ChatbotButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col gap-[32px] items-center sm:items-start">
        
        <Hero />

        <Services />

        <AboutUs />

        <Contact />       

        <ChatbotButton />

      </main>
      <Footer />
    </div>
  );
}
