"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, ArrowLeft, CheckCircle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function RecuperarSenhaPage() {
  const [loading, setLoading] = useState(false)
  const [emailEnviado, setEmailEnviado] = useState(false)
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulação de envio de email
    setTimeout(() => {
      setLoading(false)
      setEmailEnviado(true)
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Code className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">CodeLogic</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <Link
              href="/login"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para login
            </Link>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recuperar Senha</CardTitle>
              <CardDescription>Informe seu email para receber instruções de recuperação de senha.</CardDescription>
            </CardHeader>
            <CardContent>
              {emailEnviado ? (
                <Alert className="bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-900">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Email enviado!</AlertTitle>
                  <AlertDescription>
                    Enviamos instruções de recuperação de senha para {email}. Verifique sua caixa de entrada e siga as
                    instruções para redefinir sua senha.
                  </AlertDescription>
                </Alert>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                      {loading ? "Enviando..." : "Enviar instruções"}
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm text-muted-foreground">
                Lembrou sua senha?{" "}
                <Link href="/login" className="text-green-600 hover:underline">
                  Voltar para login
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>

      <footer className="w-full border-t py-4">
        <div className="container flex flex-col items-center justify-center gap-2 md:flex-row md:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeLogic. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/termos" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Termos
            </Link>
            <Link href="/privacidade" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
