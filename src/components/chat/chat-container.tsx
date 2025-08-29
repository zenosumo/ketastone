"use client"

import { useEffect, useRef } from "react"
import { ChatMessage, type ChatMessageProps } from "./chat-message"
import { ChatInput } from "./chat-input"
import { cn } from "@/lib/utils"

export interface ChatContainerProps {
  messages: Omit<ChatMessageProps, "className">[]
  onSendMessage: (message: string) => void
  isLoading?: boolean
  className?: string
  placeholder?: string
}

export function ChatContainer({
  messages,
  onSendMessage,
  isLoading = false,
  className,
  placeholder
}: ChatContainerProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className={cn("flex flex-col h-full", className)}>
      {/* Chat Header */}
      <div className="border-b px-6 py-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <h1 className="text-lg font-semibold">Chat Assistant</h1>
        <p className="text-sm text-muted-foreground">
          Ask me anything - I&apos;m here to help!
        </p>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-muted-foreground">
                Start a conversation
              </h2>
              <p className="text-sm text-muted-foreground">
                Send a message to begin chatting with the assistant.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-1">
            {messages.map((message, index) => (
              <ChatMessage
                key={index}
                {...message}
              />
            ))}
            {isLoading && (
              <ChatMessage
                message="Thinking..."
                role="assistant"
                className="opacity-60"
              />
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Chat Input */}
      <ChatInput
        onSendMessage={onSendMessage}
        disabled={isLoading}
        placeholder={placeholder}
      />
    </div>
  )
}