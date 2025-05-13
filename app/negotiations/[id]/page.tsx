"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import { useState } from "react"
import { IOSNavBar } from "@/components/ios-nav-bar"
import { IOSTabBar } from "@/components/ios-tab-bar"
import { IOSHomeIndicator } from "@/components/ios-home-indicator"

export default function NegotiationDetail({ params }: { params: { id: string } }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "buyer",
      text: "Hello, I'm interested in your Premium Jasmine Rice. Would you consider ₱42 per kg for a bulk order of 2,000 kg?",
      time: "May 12, 10:30 AM",
    },
    {
      id: 2,
      sender: "you",
      text: "Thank you for your interest. Our listed price is ₱45 per kg, but I could offer ₱44 per kg for your bulk order.",
      time: "May 12, 11:15 AM",
    },
    {
      id: 3,
      sender: "buyer",
      text: "I appreciate the offer. Could we meet in the middle at ₱43 per kg? We're looking for a long-term supplier.",
      time: "May 12, 2:45 PM",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "you",
          text: message,
          time: "Just now",
        },
      ])
      setMessage("")
    }
  }

  return (
    <div className="p-5 max-w-md mx-auto flex flex-col h-screen">
      <IOSNavBar title="Negotiation" backLink="/negotiations" />

      <Card className="bg-white rounded-xl shadow-sm overflow-hidden mb-4 mt-2">
        <div className="p-4">
          <h3 className="font-medium mb-3 text-[#111111]">Premium Jasmine Rice</h3>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Buyer:</span>
              <span className="text-[#111111]">Metro Supermarket</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Quantity:</span>
              <span className="text-[#111111]">2,000 kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Your offer:</span>
              <span className="font-medium text-[#111111]">₱45 per kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Their offer:</span>
              <span className="font-medium text-[#111111]">₱42 per kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#8E8E93]">Status:</span>
              <span className="text-green-600">Active</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mt-4">
            <Button variant="outline" className="text-green-600 border-green-600 rounded-full">
              Accept ₱42/kg
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 rounded-full">Counter Offer</Button>
          </div>
        </div>
      </Card>

      <div className="flex-1 overflow-y-auto mb-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "you" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl p-3 ${
                msg.sender === "you" ? "bg-green-600 text-white" : "bg-[#E5E5EA]"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`text-xs mt-1 ${msg.sender === "you" ? "text-green-100" : "text-[#8E8E93]"}`}>{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2 sticky bottom-0 pb-20">
        <Input
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
          className="bg-white rounded-full border-[#E5E5EA] h-12"
        />
        <Button onClick={handleSendMessage} className="bg-green-600 hover:bg-green-700 rounded-full h-12 w-12 p-0">
          <Send className="h-5 w-5" />
        </Button>
      </div>

      <IOSTabBar />
      <IOSHomeIndicator />
    </div>
  )
}
