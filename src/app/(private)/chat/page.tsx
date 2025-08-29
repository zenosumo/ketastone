"use client"

import { useState } from "react"
import { ChatContainer } from "@/components/chat/chat-container"
import { type ChatMessageProps } from "@/components/chat/chat-message"

export default function ChatPage() {
  const [messages, setMessages] = useState<Omit<ChatMessageProps, "className">[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSendMessage = async (message: string) => {
    // Add user message
    const userMessage: Omit<ChatMessageProps, "className"> = {
      message,
      role: "user",
      timestamp: new Date(),
    }
    
    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Omit<ChatMessageProps, "className"> = {
        message: "I'm a mockup chat assistant. In a real implementation, this would be connected to an AI service like OpenAI or Claude API to provide intelligent responses.",
        role: "assistant",
        timestamp: new Date(),
      }
      
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="h-screen">
      <ChatContainer
        messages={messages}
        onSendMessage={handleSendMessage}
        isLoading={isLoading}
        placeholder="Type your message here..."
      />
    </div>
  )
}