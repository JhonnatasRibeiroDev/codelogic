"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  ArrowLeft,
  Code,
  LogOut,
  Menu,
  Plus,
  Settings,
  Users,
  Award,
  FileText,
  Clock,
  MoreHorizontal,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function SalaPage({ params }: { params: { id: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dados simulados da sala
  const sala = {
    id: params.id,
    nome: "Algoritmos Básicos",
    descricao: "Turma A - 2º Semestre",
    codigo: "ALG123",
    alunos: 32,
    tarefas: 8,
  }

  // Dados simulados de tarefas
  const tarefas = [
    {
      id: "1",
      titulo: "Cálculo de Média",
      descricao: "Criar um algoritmo que calcule a média de duas notas",
      prazo: "2 dias",
      status: "ativa",
      submissoes: 28,
      dificuldade: "Fácil",
    },
    {
      id: "2",
      titulo: "Verificação de Números Primos",
      descricao: "Desenvolver um algoritmo que verifica se um número é primo",
      prazo: "5 dias",
      status: "ativa",
      submissoes: 15,
      dificuldade: "Médio",
    },
    {
      id: "3",
      titulo: "Ordenação de Vetores",
      descricao: "Implementar um algoritmo de ordenação (bubble sort)",
      prazo: "7 dias",
      status: "ativa",
      submissoes: 10,
      dificuldade: "Difícil",
    },
    {
      id: "4",
      titulo: "Calculadora Simples",
      descricao: "Criar uma calculadora com operações básicas",
      prazo: "Encerrado",
      status: "encerrada",
      submissoes: 30,
      dificuldade: "Fácil",
    },
  ]

  // Dados simulados de alunos
  const alunos = [
    { id: 1, nome: "Maria Silva", submissoes: 8, progresso: 95, avatar: "MS" },
    { id: 2, nome: "João Oliveira", submissoes: 7, progresso: 90, avatar: "JO" },
    { id: 3, nome: "Ana Santos", submissoes: 8, progresso: 85, avatar: "AS" },
    { id: 4, nome: "Pedro Costa", submissoes: 6, progresso: 75, avatar: "PC" },
    { id: 5, nome: "Carla Souza", submissoes: 5, progresso: 65, avatar: "CS" },
  ]

  // Dados simulados de submissões recentes
  const submissoesRecentes = [
    {
      id: 1,
      aluno: "Maria Silva",
      avatar: "MS",
      tarefa: "Cálculo de Média",
      data: "Hoje, 14:30",
      status: "pendente",
    },
    {
      id: 2,
      aluno: "João Oliveira",
      avatar: "JO",
      tarefa: "Verificação de Números Primos",
      data: "Hoje, 13:15",
      status: "pendente",
    },
    {
      id: 3,
      aluno: "Ana Santos",
      avatar: "AS",
      tarefa: "Cálculo de Média",
      data: "Ontem, 18:45",
      status: "avaliado",
      nota: 95,
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
            <Link href="/dashboard/professor">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">{sala.nome}</h1>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    Configurações
                  </Button>
                  <Button className="bg-green-600 hover:bg-green-700" size="sm">
                    Compartilhar Código
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{sala.descricao}</span>
                <span>•</span>
                <span>Código: {sala.codigo}</span>
              </div>
            </div>
          </div>

          <Tabs defaultValue="tarefas">
            <TabsList className="mb-6">
              <TabsTrigger value="tarefas">Tarefas</TabsTrigger>
              <TabsTrigger value="alunos">Alunos</TabsTrigger>
              <TabsTrigger value="submissoes">Submissões</TabsTrigger>
              <TabsTrigger value="ranking">Ranking</TabsTrigger>
            </TabsList>

            <TabsContent value="tarefas">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Tarefas da Sala</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova Tarefa
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Criar Nova Tarefa</DialogTitle>
                      <DialogDescription>Defina os detalhes da nova tarefa para os alunos.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="titulo">Título da Tarefa</Label>
                        <Input id="titulo" placeholder="Ex: Cálculo de Média" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="descricao">Descrição</Label>
                        <Textarea id="descricao" placeholder="Descreva o objetivo desta tarefa..." rows={3} />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="prazo">Prazo de Entrega</Label>
                          <Input id="prazo" type="date" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="dificuldade">Nível de Dificuldade</Label>
                          <select
                            id="dificuldade"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="facil">Fácil</option>
                            <option value="medio">Médio</option>
                            <option value="dificil">Difícil</option>
                          </select>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="requisitos">Requisitos</Label>
                        <Textarea
                          id="requisitos"
                          placeholder="Liste os requisitos que a solução deve atender..."
                          rows={3}
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="testes">Casos de Teste</Label>
                        <Textarea
                          id="testes"
                          placeholder="Defina os casos de teste para avaliação automática..."
                          rows={3}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button className="bg-green-600 hover:bg-green-700">Criar Tarefa</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Tarefas Ativas</h3>
                </div>
                {tarefas
                  .filter((t) => t.status === "ativa")
                  .map((tarefa) => (
                    <Card key={tarefa.id}>
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{tarefa.titulo}</CardTitle>
                            <CardDescription>{tarefa.descricao}</CardDescription>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Editar</DropdownMenuItem>
                              <DropdownMenuItem>Duplicar</DropdownMenuItem>
                              <DropdownMenuItem>Encerrar</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Prazo: <span className="font-medium">{tarefa.prazo}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Dificuldade: <span className="font-medium">{tarefa.dificuldade}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Submissões:{" "}
                              <span className="font-medium">
                                {tarefa.submissoes}/{sala.alunos}
                              </span>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/sala/${sala.id}/tarefa/${tarefa.id}`}>Ver Detalhes</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}

                <div className="flex items-center justify-between mt-6 mb-2">
                  <h3 className="font-medium">Tarefas Encerradas</h3>
                </div>
                {tarefas
                  .filter((t) => t.status === "encerrada")
                  .map((tarefa) => (
                    <Card key={tarefa.id} className="bg-muted/40">
                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle>{tarefa.titulo}</CardTitle>
                            <CardDescription>{tarefa.descricao}</CardDescription>
                          </div>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>Reativar</DropdownMenuItem>
                              <DropdownMenuItem>Duplicar</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-500">Excluir</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Prazo: <span className="font-medium">{tarefa.prazo}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Dificuldade: <span className="font-medium">{tarefa.dificuldade}</span>
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span>
                              Submissões:{" "}
                              <span className="font-medium">
                                {tarefa.submissoes}/{sala.alunos}
                              </span>
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button variant="outline" className="w-full" asChild>
                          <Link href={`/sala/${sala.id}/tarefa/${tarefa.id}`}>Ver Detalhes</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="alunos">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Alunos da Sala</h2>
                <div className="flex items-center gap-2">
                  <Button variant="outline">Exportar Lista</Button>
                  <Button className="bg-green-600 hover:bg-green-700">Convidar Alunos</Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-muted p-4 font-medium text-sm">
                  <div className="col-span-5">Aluno</div>
                  <div className="col-span-2 text-center">Submissões</div>
                  <div className="col-span-3 text-center">Progresso</div>
                  <div className="col-span-2 text-center">Ações</div>
                </div>
                <Separator />

                {alunos.map((aluno, index) => (
                  <div key={aluno.id}>
                    <div className="grid grid-cols-12 p-4 items-center text-sm">
                      <div className="col-span-5 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{aluno.avatar}</AvatarFallback>
                        </Avatar>
                        <span>{aluno.nome}</span>
                      </div>
                      <div className="col-span-2 text-center">
                        {aluno.submissoes}/{tarefas.length}
                      </div>
                      <div className="col-span-3">
                        <div className="flex items-center justify-center gap-2">
                          <Progress value={aluno.progresso} className="h-2 w-32" />
                          <span className="text-xs">{aluno.progresso}%</span>
                        </div>
                      </div>
                      <div className="col-span-2 flex justify-center gap-1">
                        <Button variant="ghost" size="icon">
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {index < alunos.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="submissoes">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Submissões Recentes</h2>
                <Button variant="outline">Ver Todas</Button>
              </div>

              <div className="space-y-4">
                {submissoesRecentes.map((submissao) => (
                  <Card key={submissao.id}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>{submissao.avatar}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{submissao.aluno}</CardTitle>
                            <CardDescription>{submissao.tarefa}</CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{submissao.data}</span>
                          {submissao.status === "pendente" ? (
                            <Badge>Pendente</Badge>
                          ) : (
                            <Badge
                              variant="outline"
                              className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-400 dark:border-green-800"
                            >
                              {submissao.nota}%
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardFooter className="pt-0">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/sala/${sala.id}/submissao/${submissao.id}`}>
                          {submissao.status === "pendente" ? "Avaliar Submissão" : "Ver Detalhes"}
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ranking">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Ranking da Sala</h2>
                <Button variant="outline">Configurar Pontuação</Button>
              </div>

              <div className="grid gap-8 md:grid-cols-3 mb-8">
                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gradient-to-b from-silver-100 to-silver-200 dark:from-slate-800 dark:to-slate-900">
                  <div className="relative mb-2">
                    <Avatar className="h-20 w-20 border-4 border-silver-400 dark:border-slate-600">
                      <AvatarFallback className="text-xl">{alunos[1].avatar}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-silver-400 dark:bg-slate-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mt-2">{alunos[1].nome}</h3>
                  <p className="text-sm text-muted-foreground">920 pontos</p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gradient-to-b from-amber-100 to-amber-200 dark:from-amber-950 dark:to-amber-900">
                  <div className="relative mb-2">
                    <Avatar className="h-24 w-24 border-4 border-amber-400 dark:border-amber-700">
                      <AvatarFallback className="text-2xl">{alunos[0].avatar}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-amber-400 dark:bg-amber-700 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <Award className="h-6 w-6 text-amber-500 dark:text-amber-400 mt-1" />
                  <h3 className="font-bold text-lg mt-1">{alunos[0].nome}</h3>
                  <p className="text-sm text-muted-foreground">950 pontos</p>
                </div>

                <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-gradient-to-b from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30">
                  <div className="relative mb-2">
                    <Avatar className="h-20 w-20 border-4 border-amber-300 dark:border-amber-800">
                      <AvatarFallback className="text-xl">{alunos[2].avatar}</AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-2 -right-2 bg-amber-300 dark:bg-amber-800 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mt-2">{alunos[2].nome}</h3>
                  <p className="text-sm text-muted-foreground">880 pontos</p>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 bg-muted p-4 font-medium text-sm">
                  <div className="col-span-1 text-center">#</div>
                  <div className="col-span-5">Aluno</div>
                  <div className="col-span-3 text-center">Pontos</div>
                  <div className="col-span-3 text-center">Tarefas Concluídas</div>
                </div>
                <Separator />

                {alunos.slice(3).map((aluno, index) => (
                  <div key={aluno.id}>
                    <div className="grid grid-cols-12 p-4 items-center text-sm">
                      <div className="col-span-1 text-center font-medium">{index + 4}</div>
                      <div className="col-span-5 flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{aluno.avatar}</AvatarFallback>
                        </Avatar>
                        <span>{aluno.nome}</span>
                      </div>
                      <div className="col-span-3 text-center">
                        <div className="font-medium">{850 - index * 30}</div>
                        <Progress value={(850 - index * 30) / 10} className="h-1 mt-1" />
                      </div>
                      <div className="col-span-3 text-center">
                        {aluno.submissoes} / {tarefas.length}
                      </div>
                    </div>
                    {index < alunos.length - 4 && <Separator />}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
