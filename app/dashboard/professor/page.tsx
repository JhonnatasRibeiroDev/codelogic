"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, LogOut, Menu, Plus, Search, Settings, Users } from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProfessorDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const salas = [
    {
      id: "1",
      nome: "Algoritmos Básicos",
      descricao: "Turma A - 2º Semestre",
      alunos: 32,
      tarefas: 8,
      tarefasPendentes: 3,
      ultimaAtividade: "2 horas atrás",
    },
    {
      id: "2",
      nome: "Estruturas de Dados",
      descricao: "Turma B - 2º Semestre",
      alunos: 28,
      tarefas: 5,
      tarefasPendentes: 1,
      ultimaAtividade: "5 horas atrás",
    },
    {
      id: "3",
      nome: "Lógica Avançada",
      descricao: "Turma C - 2º Semestre",
      alunos: 24,
      tarefas: 12,
      tarefasPendentes: 0,
      ultimaAtividade: "1 dia atrás",
    },
  ]

  const estatisticas = {
    totalAlunos: 84,
    totalSalas: 3,
    totalTarefas: 25,
    submissoesHoje: 47,
    mediaDesempenho: 78,
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
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar salas, alunos..." className="w-full pl-8" />
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
      <div className="flex flex-1">
        <aside
          className={`w-64 border-r bg-background p-6 ${isMenuOpen ? "block fixed inset-y-0 z-50 mt-16" : "hidden md:block"}`}
        >
          <nav className="flex flex-col gap-4">
            <Link href="/dashboard/professor" className="flex items-center gap-2 text-green-600 font-medium">
              <Users className="h-5 w-5" />
              Minhas Salas
            </Link>
            <Link
              href="/dashboard/professor/tarefas"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code className="h-5 w-5" />
              Banco de Tarefas
            </Link>
            <Link
              href="/dashboard/professor/alunos"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Users className="h-5 w-5" />
              Alunos
            </Link>
            <Link
              href="/dashboard/professor/estatisticas"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Users className="h-5 w-5" />
              Estatísticas
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <Tabs defaultValue="salas">
            <TabsList className="mb-6">
              <TabsTrigger value="salas">Minhas Salas</TabsTrigger>
              <TabsTrigger value="estatisticas">Estatísticas</TabsTrigger>
              <TabsTrigger value="pendentes">Pendentes</TabsTrigger>
            </TabsList>

            <TabsContent value="salas">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Minhas Salas</h1>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Plus className="h-4 w-4 mr-2" />
                      Nova Sala
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Criar Nova Sala</DialogTitle>
                      <DialogDescription>Preencha as informações para criar uma nova sala virtual.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="nome">Nome da Sala</Label>
                        <Input id="nome" placeholder="Ex: Lógica de Programação - Turma A" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="descricao">Descrição</Label>
                        <Textarea id="descricao" placeholder="Descreva o objetivo desta sala..." />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="codigo">Código de Acesso (opcional)</Label>
                        <Input id="codigo" placeholder="Deixe em branco para gerar automaticamente" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancelar</Button>
                      <Button className="bg-green-600 hover:bg-green-700">Criar Sala</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {salas.map((sala) => (
                  <Card key={sala.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{sala.nome}</CardTitle>
                      <CardDescription>{sala.descricao}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-muted-foreground">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4" />
                          <span>{sala.alunos} alunos</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Code className="h-4 w-4" />
                          <span>
                            {sala.tarefas} tarefas ({sala.tarefasPendentes} pendentes)
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-2">
                          Última atividade: {sala.ultimaAtividade}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-2 flex gap-2">
                      <Button variant="outline" className="flex-1" asChild>
                        <Link href={`/sala/${sala.id}`}>Acessar</Link>
                      </Button>
                      <Button variant="outline" size="icon" asChild>
                        <Link href={`/sala/${sala.id}/editar`}>
                          <Settings className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="estatisticas">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Estatísticas Gerais</h1>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Total de Alunos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-green-600">{estatisticas.totalAlunos}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Salas Ativas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-green-600">{estatisticas.totalSalas}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Total de Tarefas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-green-600">{estatisticas.totalTarefas}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Submissões Hoje</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-green-600">{estatisticas.submissoesHoje}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Média de Desempenho</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-3xl font-bold text-green-600">{estatisticas.mediaDesempenho}%</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pendentes">
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4">Submissões Pendentes</h1>
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted p-4">
                    <h3 className="font-medium">Submissões aguardando revisão</h3>
                  </div>
                  <div className="p-4">
                    <div className="space-y-4">
                      <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Cálculo de Média</h4>
                            <p className="text-sm text-muted-foreground">Algoritmos Básicos • Maria Silva</p>
                          </div>
                          <Badge>Novo</Badge>
                        </div>
                        <div className="flex justify-end">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                            <Link href="/sala/1/submissao/1">Revisar</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Ordenação de Vetores</h4>
                            <p className="text-sm text-muted-foreground">Estruturas de Dados • João Oliveira</p>
                          </div>
                          <Badge>Novo</Badge>
                        </div>
                        <div className="flex justify-end">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                            <Link href="/sala/2/submissao/2">Revisar</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-medium">Busca Binária</h4>
                            <p className="text-sm text-muted-foreground">Lógica Avançada • Ana Santos</p>
                          </div>
                          <Badge variant="outline">Há 1 dia</Badge>
                        </div>
                        <div className="flex justify-end">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                            <Link href="/sala/3/submissao/3">Revisar</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
