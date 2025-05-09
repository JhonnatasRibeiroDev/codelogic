"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Code, LogOut, Menu, Settings, Edit, Copy, Download, MoreHorizontal } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function TarefaPage({ params }: { params: { id: string; tarefaId: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dados simulados da tarefa
  const tarefa = {
    id: params.tarefaId,
    titulo: "Cálculo de Média",
    descricao:
      "Criar um algoritmo em Portugol que calcule a média de duas notas e determine se o aluno está aprovado ou reprovado.",
    prazo: "2 dias",
    status: "ativa",
    submissoes: 28,
    dificuldade: "Fácil",
    requisitos: [
      "Solicitar duas notas ao usuário",
      "Calcular a média aritmética",
      "Exibir a média calculada",
      'Se a média for maior ou igual a 7, exibir "Aprovado!"',
      'Caso contrário, exibir "Reprovado!"',
    ],
    dicas: 'Lembre-se de usar a estrutura condicional "se-senao" para verificar se o aluno foi aprovado ou reprovado.',
    casosTeste: [
      { id: 1, entrada: "8.5, 7.0", saidaEsperada: "A média é: 7.75\nAprovado!", status: "ok" },
      { id: 2, entrada: "6.0, 8.0", saidaEsperada: "A média é: 7.0\nAprovado!", status: "ok" },
      { id: 3, entrada: "5.0, 6.0", saidaEsperada: "A média é: 5.5\nReprovado!", status: "ok" },
      { id: 4, entrada: "0.0, 0.0", saidaEsperada: "A média é: 0.0\nReprovado!", status: "ok" },
    ],
    solucaoModelo: `algoritmo "CalcularMedia"
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
  }

  // Dados simulados de submissões
  const submissoes = [
    {
      id: 1,
      aluno: "Maria Silva",
      avatar: "MS",
      data: "Hoje, 14:30",
      status: "aprovado",
      nota: 100,
      progresso: 100,
    },
    {
      id: 2,
      aluno: "João Oliveira",
      avatar: "JO",
      data: "Hoje, 13:15",
      status: "aprovado",
      nota: 90,
      progresso: 90,
    },
    {
      id: 3,
      aluno: "Ana Santos",
      avatar: "AS",
      data: "Ontem, 18:45",
      status: "aprovado",
      nota: 85,
      progresso: 85,
    },
    {
      id: 4,
      aluno: "Pedro Costa",
      avatar: "PC",
      data: "Ontem, 16:20",
      status: "reprovado",
      nota: 60,
      progresso: 60,
    },
    {
      id: 5,
      aluno: "Carla Souza",
      avatar: "CS",
      data: "Há 2 dias",
      status: "pendente",
      progresso: 0,
    },
  ]

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
            <Link href={`/sala/${params.id}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{tarefa.titulo}</h1>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4 mr-2" />
                        Ações
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Edit className="h-4 w-4 mr-2" />
                        Editar Tarefa
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="h-4 w-4 mr-2" />
                        Duplicar Tarefa
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Exportar Submissões
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Algoritmos Básicos</span>
                <span>•</span>
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                  Prazo: {tarefa.prazo}
                </Badge>
                <span>•</span>
                <span>Dificuldade: {tarefa.dificuldade}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="detalhes">
            <TabsList className="mb-6">
              <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
              <TabsTrigger value="submissoes">Submissões</TabsTrigger>
              <TabsTrigger value="solucao">Solução Modelo</TabsTrigger>
            </TabsList>

            <TabsContent value="detalhes">
              <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Descrição da Tarefa</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Objetivo</h3>
                        <p className="text-muted-foreground">{tarefa.descricao}</p>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Requisitos</h3>
                        <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                          {tarefa.requisitos.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-medium mb-2">Dicas</h3>
                        <p className="text-muted-foreground">{tarefa.dicas}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Casos de Teste</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {tarefa.casosTeste.map((caso) => (
                        <div key={caso.id} className="border rounded-lg p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium">Teste {caso.id}</h4>
                            <Badge className="bg-green-600">Válido</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div>
                              <span className="font-medium">Entrada:</span>
                              <div className="bg-muted p-2 rounded mt-1 font-mono text-xs">{caso.entrada}</div>
                            </div>
                            <div>
                              <span className="font-medium">Saída Esperada:</span>
                              <div className="bg-muted p-2 rounded mt-1 font-mono text-xs whitespace-pre">
                                {caso.saidaEsperada}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="submissoes">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Submissões dos Alunos</h2>
                <Button variant="outline">Exportar Resultados</Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-muted p-4 font-medium text-sm">
                  <div className="col-span-4">Aluno</div>
                  <div className="col-span-2">Data</div>
                  <div className="col-span-2 text-center">Status</div>
                  <div className="col-span-2 text-center">Nota</div>
                  <div className="col-span-2 text-center">Ações</div>
                </div>
                <Separator />

                {submissoes.map((submissao, index) => (
                  <div key={submissao.id}>
                    <div className="grid grid-cols-12 p-4 items-center text-sm">
                      <div className="col-span-4 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{submissao.avatar}</AvatarFallback>
                        </Avatar>
                        <span>{submissao.aluno}</span>
                      </div>
                      <div className="col-span-2">{submissao.data}</div>
                      <div className="col-span-2 text-center">
                        {submissao.status === "aprovado" && <Badge className="bg-green-600">Aprovado</Badge>}
                        {submissao.status === "reprovado" && <Badge variant="destructive">Reprovado</Badge>}
                        {submissao.status === "pendente" && <Badge variant="outline">Pendente</Badge>}
                      </div>
                      <div className="col-span-2 text-center">
                        {submissao.status !== "pendente" ? (
                          <div className="flex items-center justify-center gap-2">
                            <Progress value={submissao.progresso} className="h-2 w-16" />
                            <span>{submissao.nota}%</span>
                          </div>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </div>
                      <div className="col-span-2 flex justify-center">
                        <Button variant="outline" size="sm" asChild>
                          <Link href={`/sala/${params.id}/submissao/${submissao.id}`}>
                            {submissao.status === "pendente" ? "Avaliar" : "Detalhes"}
                          </Link>
                        </Button>
                      </div>
                    </div>
                    {index < submissoes.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solucao">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Solução Modelo</h2>
                <Button variant="outline">Copiar Código</Button>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="bg-muted p-4 border-b">
                  <h3 className="font-medium">Código de Referência</h3>
                  <p className="text-sm text-muted-foreground">
                    Esta solução serve como referência para avaliação das submissões dos alunos.
                  </p>
                </div>
                <div className="p-4 bg-black text-white font-mono text-sm">
                  <pre className="whitespace-pre-wrap">{tarefa.solucaoModelo}</pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
