"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export default function DebugTheme() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 p-4 bg-background border rounded-lg shadow-lg">
      <div className="mb-2">
        <p className="text-sm font-medium">
          Tema atual: <span className="font-bold">{theme}</span>
        </p>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" onClick={() => setTheme("light")}>
          Forçar Claro
        </Button>
        <Button size="sm" variant="outline" onClick={() => setTheme("dark")}>
          Forçar Escuro
        </Button>
        <Button size="sm" variant="outline" onClick={() => setTheme("system")}>
          Sistema
        </Button>
      </div>
    </div>
  )
}
