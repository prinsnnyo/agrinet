"use client"

import { useState } from "react"

export function IOSSegmentedControl({
  options,
  defaultValue,
}: {
  options: string[]
  defaultValue: string
}) {
  const [selected, setSelected] = useState(defaultValue)

  return (
    <div className="bg-white p-1 rounded-lg flex mb-4 shadow-sm">
      {options.map((option) => (
        <button
          key={option}
          className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${
            selected === option ? "bg-green-50 text-[#111111] shadow-sm" : "text-[#8E8E93]"
          }`}
          onClick={() => setSelected(option)}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
