"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Award, Code, LogOut, Menu, Settings } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"

export default function RankingPage() {
  const alunos = [
    { id: 1, nome: "Maria Silva", pontos: 950, tarefas: 12, avatar: "MS" },
    { id: 2, nome: "João Oliveira", pontos: 920, tarefas: 12, avatar: "JO" },
    { id: 3, nome: "Ana Santos", pontos: 880, tarefas: 11, avatar: "AS" },
    { id: 4, nome: "Pedro Costa", pontos: 850, tarefas: 11, avatar: "PC" },
    { id: 5, nome: "Carla Souza", pontos: 820, tarefas: 10, avatar: "CS" },
    { id: 6, nome: "Lucas Ferreira", pontos: 780, tarefas: 10, avatar: "LF" },
    { id: 7, nome: "Juliana Lima", pontos: 750, tarefas: 9, avatar: "JL" },
    { id: 8, nome: "Rafael Alves", pontos: 720, tarefas: 9, avatar: "RA" },
    { id: 9, nome: "Fernanda Dias", pontos: 680, tarefas: 8, avatar: "FD" },
    { id: 10, nome: "Bruno Gomes", pontos: 650, tarefas: 8, avatar: "BG" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" size="icon" className="md:hidden mr-2">
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
            <Link href="/sala/123">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold">Ranking da Sala</h1>
              <div className="text-sm text-muted-foreground">
                <span>Algoritmos Básicos</span>
                <span> • </span>
                <span>Prof. Carlos Silva</span>
              </div>
            </div>
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
              <p className="text-sm text-muted-foreground">{alunos[1].pontos} pontos</p>
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
              <p className="text-sm text-muted-foreground">{alunos[0].pontos} pontos</p>
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
              <p className="text-sm text-muted-foreground">{alunos[2].pontos} pontos</p>
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
                    <div className="font-medium">{aluno.pontos}</div>
                    <Progress value={aluno.pontos / 10} className="h-1 mt-1" />
                  </div>
                  <div className="col-span-3 text-center">{aluno.tarefas} / 12</div>
                </div>
                {index < alunos.length - 4 && <Separator />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
