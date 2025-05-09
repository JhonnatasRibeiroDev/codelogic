"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ThemeToggle } from "@/components/theme-toggle"
import { Award, Code, LogOut, Menu, Search, Settings, Users } from "lucide-react"
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

export default function AlunoDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <Input type="search" placeholder="Buscar salas, tarefas..." className="w-full pl-8" />
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
            <Link href="/dashboard/aluno" className="flex items-center gap-2 text-green-600 font-medium">
              <Users className="h-5 w-5" />
              Minhas Salas
            </Link>
            <Link
              href="/dashboard/aluno/tarefas"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Code className="h-5 w-5" />
              Tarefas Pendentes
            </Link>
            <Link
              href="/dashboard/aluno/ranking"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Award className="h-5 w-5" />
              Ranking
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Minhas Salas</h1>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700">Entrar em Nova Sala</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Entrar em uma Sala</DialogTitle>
                  <DialogDescription>Digite o código de acesso fornecido pelo seu professor.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="codigo">Código de Acesso</Label>
                    <Input id="codigo" placeholder="Ex: ABC123" />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Cancelar</Button>
                  <Button className="bg-green-600 hover:bg-green-700">Entrar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Algoritmos Básicos</CardTitle>
                <CardDescription>Prof. Carlos Silva</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-4 w-4" />
                    <span>3 tarefas pendentes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Sua posição: 5º lugar</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full">
                  Acessar Sala
                </Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Estruturas de Dados</CardTitle>
                <CardDescription>Profa. Ana Oliveira</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-4 w-4" />
                    <span>1 tarefa pendente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    <span>Sua posição: 12º lugar</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2">
                <Button variant="outline" className="w-full">
                  Acessar Sala
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
