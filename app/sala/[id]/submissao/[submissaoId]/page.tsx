"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Code, LogOut, Menu, Settings, Check, X, MessageSquare } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function SubmissaoPage({ params }: { params: { id: string; submissaoId: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [comentario, setComentario] = useState("")
  const [nota, setNota] = useState(85)

  // Dados simulados da submissão
  const submissao = {
    id: params.submissaoId,
    aluno: {
      nome: "Maria Silva",
      avatar: "MS",
      email: "maria.silva@email.com",
    },
    tarefa: {
      id: "1",
      titulo: "Cálculo de Média",
      prazo: "2 dias",
    },
    data: "Hoje, 14:30",
    status: "pendente",
    codigo: `algoritmo "CalcularMedia"
var
   nota1, nota2, media: real
inicio
   escreva("Digite a primeira nota: ")
   leia(nota1)
   escreva("Digite a segunda nota: ")
   leia(nota2)
   
   media <- (nota1 + nota2) / 2
   
   escreva("A média é: ", media)
   
   se media >= 7 entao
      escreva("Aprovado!")
   senao
      escreva("Reprovado!")
   fimse
fimalgoritmo`,
    resultadosTestes: [
      {
        id: 1,
        entrada: "8.5, 7.0",
        saidaEsperada: "A média é: 7.75\nAprovado!",
        saidaObtida: "A média é: 7.75\nAprovado!",
        status: "ok",
      },
      {
        id: 2,
        entrada: "6.0, 8.0",
        saidaEsperada: "A média é: 7.0\nAprovado!",
        saidaObtida: "A média é: 7.0\nAprovado!",
        status: "ok",
      },
      {
        id: 3,
        entrada: "5.0, 6.0",
        saidaEsperada: "A média é: 5.5\nReprovado!",
        saidaObtida: "A média é: 5.5\nReprovado!",
        status: "ok",
      },
      {
        id: 4,
        entrada: "0.0, 0.0",
        saidaEsperada: "A média é: 0.0\nReprovado!",
        saidaObtida: "A média é: 0.0\nReprovado!",
        status: "ok",
      },
    ],
    comentariosAnteriores: [],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Abrir menu</span>
          </Button>
          <div className="flex items-center gap-2 mr-4">
            <Code className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">CodeLogic</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
              <span className="sr-only">Configurações</span>
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Sair</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-col flex-1">
        <div className="container py-4">
          <div className="flex items-center gap-4 mb-6">
            <Link href={`/sala/${params.id}/tarefa/${submissao.tarefa.id}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Avaliação de Submissão</h1>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{submissao.tarefa.titulo}</span>
                <span>•</span>
                <span>{submissao.aluno.nome}</span>
                <span>•</span>
                <span>{submissao.data}</span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="codigo">
                <TabsList className="mb-4">
                  <TabsTrigger value="codigo">Código Submetido</TabsTrigger>
                  <TabsTrigger value="testes">Resultados dos Testes</TabsTrigger>
                </TabsList>

                <TabsContent value="codigo">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4 border-b flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Código do Aluno</h3>
                        <p className="text-sm text-muted-foreground">Submetido em {submissao.data}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Copiar Código
                      </Button>
                    </div>
                    <div className="p-4 bg-black text-white font-mono text-sm">
                      <pre className="whitespace-pre-wrap">{submissao.codigo}</pre>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="testes">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-muted p-4 border-b">
                      <h3 className="font-medium">Resultados dos Testes Automáticos</h3>
                      <p className="text-sm text-muted-foreground">
                        Testes passados: {submissao.resultadosTestes.filter((t) => t.status === "ok").length}/
                        {submissao.resultadosTestes.length}
                      </p>
                    </div>
                    <div className="p-4 space-y-4">
                      {submissao.resultadosTestes.map((teste) => (
                        <div key={teste.id} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Teste {teste.id}</h4>
                            {teste.status === "ok" ? (
                              <Badge className="bg-green-600">Passou</Badge>
                            ) : (
                              <Badge variant="destructive">Falhou</Badge>
                            )}
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium">Entrada:</span>
                              <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">{teste.entrada}</div>
                            </div>
                            <div>
                              <span className="font-medium">Saída Esperada:</span>
                              <div className="bg-muted p-2 rounded mt-1 font-mono text-xs whitespace-pre">
                                {teste.saidaEsperada}
                              </div>
                            </div>
                            <div>
                              <span className="font-medium">Saída Obtida:</span>
                              <div
                                className={`p-2 rounded mt-1 font-mono text-xs whitespace-pre ${
                                  teste.status === "ok"
                                    ? "bg-green-50 dark:bg-green-950/30"
                                    : "bg-red-50 dark:bg-red-950/30"
                                }`}
                              >
                                {teste.saidaObtida}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 border-b">
                  <h3 className="font-medium">Avaliação do Professor</h3>
                </div>
                <div className="p-4 space-y-4">
                  <div>
                    <Label htmlFor="nota" className="flex items-center justify-between">
                      <span>Nota</span>
                      <span className="text-green-600 font-medium">{nota}%</span>
                    </Label>
                    <Slider
                      id="nota"
                      min={0}
                      max={100}
                      step={5}
                      value={[nota]}
                      onValueChange={(value) => setNota(value[0])}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="comentario">Comentário</Label>
                    <Textarea
                      id="comentario"
                      placeholder="Adicione um comentário para o aluno..."
                      value={comentario}
                      onChange={(e) => setComentario(e.target.value)}
                      className="mt-2"
                      rows={6}
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" className="flex-1">
                      <X className="h-4 w-4 mr-2" />
                      Rejeitar
                    </Button>
                    <Button className="flex-1 bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-2" />
                      Aprovar
                    </Button>
                  </div>
                </div>
              </div>

              {submissao.comentariosAnteriores.length > 0 && (
                <div className="border rounded-lg overflow-hidden mt-4">
                  <div className="bg-muted p-4 border-b">
                    <h3 className="font-medium">Comentários Anteriores</h3>
                  </div>
                  <div className="p-4 space-y-4">
                    {submissao.comentariosAnteriores.map((comentario, index) => (
                      <div key={index} className="flex gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>P</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-medium">Professor</span>
                            <span className="text-xs text-muted-foreground">Há 2 dias</span>
                          </div>
                          <p className="text-sm mt-1">{comentario}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="border rounded-lg overflow-hidden mt-4">
                <div className="bg-muted p-4 border-b">
                  <h3 className="font-medium">Informações do Aluno</h3>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{submissao.aluno.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium">{submissao.aluno.nome}</h4>
                      <p className="text-sm text-muted-foreground">{submissao.aluno.email}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={`/dashboard/professor/alunos/${submissao.aluno.nome.toLowerCase().replace(" ", "-")}`}>
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Enviar Mensagem
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
