'use client'

import { useState } from 'react'

export default function Chatbot() {
  const [messages, setMessages] = useState<{ role: string, content: string }[]>([])
  const [input, setInput] = useState('')

  const sendMessage = async () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    const res = await fetch('http://46.62.130.101:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'llama3', prompt: input })
    })

    const reader = res.body?.getReader()
    const decoder = new TextDecoder('utf-8')
    let botResponse = ''

    if (reader) {
      let done = false
      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        botResponse += decoder.decode(value)
      }

      const parsed = botResponse.split('\n').filter(l => l).map(l => JSON.parse(l))
      const fullResponse = parsed.map(p => p.response).join('')
      setMessages(prev => [...prev, { role: 'assistant', content: fullResponse }])
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Chatbot AI</h1>
      <div className="border p-4 rounded h-64 overflow-y-scroll bg-gray-50">
        {messages.map((m, i) => (
          <div key={i} className={`mb-2 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
            <span className="block bg-white p-2 rounded shadow text-sm">{m.content}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 border rounded"
          placeholder="Scrivi qui..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-black text-white px-4 py-2 rounded"
        >
          Invia
        </button>
      </div>
    </div>
  )
}
