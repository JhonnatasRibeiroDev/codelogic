"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, Eye, EyeOff, ArrowLeft } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CadastroPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const tipo = searchParams.get("tipo") || "professor"

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    // Simulação de cadastro
    setTimeout(() => {
      setLoading(false)
      if (tipo === "professor") {
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

      <main className="flex-1 flex items-center justify-center p-4 py-8">
        <div className="w-full max-w-2xl">
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
              <CardTitle>{tipo === "professor" ? "Cadastro de Professor" : "Cadastro de Aluno"}</CardTitle>
              <CardDescription>
                {tipo === "professor"
                  ? "Crie sua conta de professor para começar a criar salas e tarefas para seus alunos."
                  : "Crie sua conta de aluno para participar de salas e resolver desafios de programação."}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCadastro}>
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="nome">Nome</Label>
                      <Input id="nome" placeholder="Seu nome completo" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="senha">Senha</Label>
                      <div className="relative">
                        <Input id="senha" type={showPassword ? "text" : "password"} placeholder="••••••••" required />
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
                    <div className="grid gap-2">
                      <Label htmlFor="confirmar-senha">Confirmar Senha</Label>
                      <Input
                        id="confirmar-senha"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                      />
                    </div>
                  </div>

                  {tipo === "professor" ? (
                    <>
                      <div className="grid gap-2">
                        <Label htmlFor="instituicao">Instituição de Ensino</Label>
                        <Input id="instituicao" placeholder="Nome da instituição onde você leciona" required />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="area">Área de Atuação</Label>
                          <Select defaultValue="computacao">
                            <SelectTrigger id="area">
                              <SelectValue placeholder="Selecione sua área" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="computacao">Ciência da Computação</SelectItem>
                              <SelectItem value="sistemas">Sistemas de Informação</SelectItem>
                              <SelectItem value="engenharia">Engenharia de Software</SelectItem>
                              <SelectItem value="tecnico">Ensino Técnico</SelectItem>
                              <SelectItem value="medio">Ensino Médio</SelectItem>
                              <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="experiencia">Experiência com Programação</Label>
                          <Select defaultValue="intermediario">
                            <SelectTrigger id="experiencia">
                              <SelectValue placeholder="Selecione seu nível" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="iniciante">Iniciante</SelectItem>
                              <SelectItem value="intermediario">Intermediário</SelectItem>
                              <SelectItem value="avancado">Avançado</SelectItem>
                              <SelectItem value="especialista">Especialista</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="bio">Biografia (opcional)</Label>
                        <Textarea
                          id="bio"
                          placeholder="Conte um pouco sobre sua experiência e áreas de interesse"
                          rows={3}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="instituicao-aluno">Instituição de Ensino</Label>
                          <Input id="instituicao-aluno" placeholder="Nome da sua instituição de ensino" required />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="curso">Curso</Label>
                          <Input id="curso" placeholder="Seu curso atual" required />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="nivel">Nível de Ensino</Label>
                          <Select defaultValue="graduacao">
                            <SelectTrigger id="nivel">
                              <SelectValue placeholder="Selecione seu nível" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fundamental">Ensino Fundamental</SelectItem>
                              <SelectItem value="medio">Ensino Médio</SelectItem>
                              <SelectItem value="tecnico">Ensino Técnico</SelectItem>
                              <SelectItem value="graduacao">Graduação</SelectItem>
                              <SelectItem value="pos">Pós-graduação</SelectItem>
                              <SelectItem value="outro">Outro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="experiencia-aluno">Experiência com Programação</Label>
                          <Select defaultValue="iniciante">
                            <SelectTrigger id="experiencia-aluno">
                              <SelectValue placeholder="Selecione seu nível" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nenhuma">Nenhuma</SelectItem>
                              <SelectItem value="iniciante">Iniciante</SelectItem>
                              <SelectItem value="intermediario">Intermediário</SelectItem>
                              <SelectItem value="avancado">Avançado</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="interesses">Interesses (opcional)</Label>
                        <Textarea
                          id="interesses"
                          placeholder="Quais áreas da programação mais te interessam?"
                          rows={3}
                        />
                      </div>
                    </>
                  )}

                  <div className="flex items-center space-x-2">
                    <Checkbox id="termos" required />
                    <label htmlFor="termos" className="text-sm text-muted-foreground">
                      Concordo com os{" "}
                      <Link href="/termos" className="text-green-600 hover:underline">
                        termos de serviço
                      </Link>{" "}
                      e{" "}
                      <Link href="/privacidade" className="text-green-600 hover:underline">
                        política de privacidade
                      </Link>
                    </label>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
                    {loading ? "Criando conta..." : "Criar conta"}
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-sm text-muted-foreground">
                Já tem uma conta?{" "}
                <Link href="/login" className="text-green-600 hover:underline">
                  Faça login
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
