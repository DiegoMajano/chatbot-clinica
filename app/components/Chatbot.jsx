"use client"
import React, { useEffect, useRef, useState } from "react"
import knowledgeBase from "../data/knowledgeBase.json"


export default function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hola, ¿en qué puedo ayudarte hoy?" },
  ])
  const [input, setInput] = useState("")

  const endOfMessagesRef = useRef(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {

    if (!input.trim()) return

    const userMessage = { text: input, sender: "user" }
    const botResponse = enviarPregunta(input.toLowerCase())

    setMessages((prev) => [...prev, userMessage, { text: botResponse, sender: "bot" }])
    setInput("")
  }

    const enviarPregunta = async (message) => {
      console.log(message);
      
      const res = await fetch('http://localhost:3001/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          preguntaUsuario: message,
          baseDeDatos: knowledgeBase 
        })
      });

      const data = await res.json()

      return data.respuesta
    }

    return (
      <div className="w-full max-w-xl mx-auto mt-8 p-4 border rounded-md bg-white shadow">
        <div className="h-96 overflow-y-auto space-y-2 mb-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-3 rounded-md max-w-xs ${message.sender === "bot"
                  ? "bg-blue-100 text-left"
                  : "bg-green-100 ml-auto text-right"
                }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 p-2 border rounded"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 text-white px-4 rounded"
          >
            Enviar
          </button>
        </div>
      </div>
    )
  }
