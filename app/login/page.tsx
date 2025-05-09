"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, Eye, EyeOff } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>, userType: string) => {
    e.preventDefault()
    setLoading(true)

    // Simulação de login
    setTimeout(() => {
      setLoading(false)
      if (userType === "professor") {
        router.push("/dashboard/professor")
      } else {
        router.push("/dashboard/aluno")
      }
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
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Entrar na plataforma</CardTitle>
                  <CardDescription>
                    Acesse sua conta para continuar aprendendo ou ensinando lógica de programação.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="professor">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="professor">Professor</TabsTrigger>
                      <TabsTrigger value="aluno">Aluno</TabsTrigger>
                    </TabsList>

                    <TabsContent value="professor">
                      <form onSubmit={(e) => handleLogin(e, "professor")}>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="email-professor">Email</Label>
                            <Input id="email-professor" type="email" placeholder="professor@exemplo.com" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="senha-professor">Senha</Label>
                            <div className="relative">
                              <Input
                                id="senha-professor"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lembrar-professor" />
                            <label
                              htmlFor="lembrar-professor"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Lembrar de mim
                            </label>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar como Professor"}
                          </Button>
                        </div>
                      </form>
                    </TabsContent>

                    <TabsContent value="aluno">
                      <form onSubmit={(e) => handleLogin(e, "aluno")}>
                        <div className="grid gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="email-aluno">Email</Label>
                            <Input id="email-aluno" type="email" placeholder="aluno@exemplo.com" required />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="senha-aluno">Senha</Label>
                            <div className="relative">
                              <Input
                                id="senha-aluno"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                required
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-0 top-0 h-full px-3"
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                {showPassword ? (
                                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                                ) : (
                                  <Eye className="h-4 w-4 text-muted-foreground" />
                                )}
                                <span className="sr-only">{showPassword ? "Esconder senha" : "Mostrar senha"}</span>
                              </Button>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="lembrar-aluno" />
                            <label
                              htmlFor="lembrar-aluno"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Lembrar de mim
                            </label>
                          </div>
                          <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                            {loading ? "Entrando..." : "Entrar como Aluno"}
                          </Button>
                        </div>
                      </form>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-2">
                  <div className="text-sm text-muted-foreground">
                    <Link href="/recuperar-senha" className="text-green-600 hover:underline">
                      Esqueceu sua senha?
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="cadastro">
              <Card>
                <CardHeader>
                  <CardTitle>Criar uma conta</CardTitle>
                  <CardDescription>
                    Escolha o tipo de conta que deseja criar para começar a usar a plataforma.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link href="/cadastro?tipo=professor">
                      <Button className="w-full h-auto py-6 bg-green-600 hover:bg-green-700 flex flex-col items-center justify-center gap-2">
                        <span className="text-lg font-medium">Professor</span>
                        <span className="text-xs text-green-100">Crie salas e tarefas para seus alunos</span>
                      </Button>
                    </Link>
                    <Link href="/cadastro?tipo=aluno">
                      <Button
                        variant="outline"
                        className="w-full h-auto py-6 flex flex-col items-center justify-center gap-2"
                      >
                        <span className="text-lg font-medium">Aluno</span>
                        <span className="text-xs text-muted-foreground">Participe de salas e resolva desafios</span>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
