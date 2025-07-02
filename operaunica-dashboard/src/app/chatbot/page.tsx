'use client'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([])
  const [input, setInput] = useState('')

  const send = () => {
    if (!input) return
    setMessages((m) => [...m, input, 'This is a fake response...'])
    setInput('')
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">AI Chatbot</h1>
      <div className="border rounded p-4 space-y-2 h-60 overflow-y-auto bg-white">
        {messages.map((m, i) => (
          <div key={i} className="text-sm">
            {m}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1"
          placeholder="Ask something..."
        />
        <Button onClick={send}>Send</Button>
      </div>
    </div>
  )
}
