"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import Chatbot from '../chat/Chatbot'
import { MessageCircle } from 'lucide-react'

export default function ChatbotButton() {

    const [showChatbot, setShowChatbot] = useState(false)

  return (

    <>
        <div className="fixed bottom-6 right-6 z-50">
            <Button
                size="lg"
                className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-200 group"
                onClick={() => {
                    setShowChatbot((prev) => !prev)
                }}
            >
                <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">Open chat support</span>
            </Button>

            {/* Chat tooltip */}
            <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Need help? Chat with us!
                <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
        </div>

        {showChatbot && (
            <div className="fixed bottom-24 right-6 z-40 w-[360px] max-w-full shadow-2xl rounded-xl overflow-hidden">
              <Chatbot />
            </div>
        )}
    
    </>


  )
}
