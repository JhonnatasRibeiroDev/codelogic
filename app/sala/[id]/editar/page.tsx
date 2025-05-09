"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowLeft, Code, LogOut, Menu, Settings, Save, Trash2, Copy } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function EditarSalaPage({ params }: { params: { id: string } }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Dados simulados da sala
  const [sala, setSala] = useState({
    id: params.id,
    nome: "Algoritmos Básicos",
    descricao: "Turma A - 2º Semestre",
    codigo: "ALG123",
    visibilidade: "privada",
    notificacoes: true,
    rankingVisivel: true,
    comentariosPermitidos: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSala((prev) => ({ ...prev, [name]: value }))
  }

  const handleToggle = (name: string, value: boolean) => {
    setSala((prev) => ({ ...prev, [name]: value }))
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
            <Link href={`/sala/${params.id}`}>
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Editar Sala</h1>
                <div className="flex items-center gap-2">
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Save className="h-4 w-4 mr-2" />
                    Salvar Alterações
                  </Button>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Configure as opções da sala e gerencie suas preferências
              </div>
            </div>
          </div>

          <Tabs defaultValue="geral">
            <TabsList className="mb-6">
              <TabsTrigger value="geral">Geral</TabsTrigger>
              <TabsTrigger value="acesso">Acesso</TabsTrigger>
              <TabsTrigger value="avancado">Avançado</TabsTrigger>
            </TabsList>

            <TabsContent value="geral">
              <div className="max-w-2xl space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome da Sala</Label>
                  <Input id="nome" name="nome" value={sala.nome} onChange={handleChange} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descricao">Descrição</Label>
                  <Textarea id="descricao" name="descricao" value={sala.descricao} onChange={handleChange} rows={3} />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="codigo">Código de Acesso</Label>
                  <div className="flex gap-2">
                    <Input id="codigo" name="codigo" value={sala.codigo} onChange={handleChange} />
                    <Button variant="outline">
                      <Copy className="h-4 w-4 mr-2" />
                      Copiar
                    </Button>
                    <Button variant="outline">Gerar Novo</Button>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Este é o código que os alunos usarão para entrar na sala.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="visibilidade">Visibilidade da Sala</Label>
                  <select
                    id="visibilidade"
                    name="visibilidade"
                    value={sala.visibilidade}
                    onChange={(e) => setSala((prev) => ({ ...prev, visibilidade: e.target.value }))}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="privada">Privada (apenas com código de acesso)</option>
                    <option value="institucional">Institucional (visível para sua instituição)</option>
                    <option value="publica">Pública (visível para todos)</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notificacoes">Notificações</Label>
                    <p className="text-sm text-muted-foreground">Receber notificações sobre atividades nesta sala</p>
                  </div>
                  <Switch
                    id="notificacoes"
                    checked={sala.notificacoes}
                    onCheckedChange={(checked) => handleToggle("notificacoes", checked)}
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="acesso">
              <div className="max-w-2xl space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="rankingVisivel">Ranking Visível</Label>
                    <p className="text-sm text-muted-foreground">Permitir que os alunos vejam o ranking da sala</p>
                  </div>
                  <Switch
                    id="rankingVisivel"
                    checked={sala.rankingVisivel}
                    onCheckedChange={(checked) => handleToggle("rankingVisivel", checked)}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="comentariosPermitidos">Comentários entre Alunos</Label>
                    <p className="text-sm text-muted-foreground">
                      Permitir que os alunos comentem nas submissões uns dos outros
                    </p>
                  </div>
                  <Switch
                    id="comentariosPermitidos"
                    checked={sala.comentariosPermitidos}
                    onCheckedChange={(checked) => handleToggle("comentariosPermitidos", checked)}
                  />
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium mb-4">Gerenciamento de Alunos</h3>

                  <div className="space-y-2">
                    <Label>Remover Alunos</Label>
                    <p className="text-sm text-muted-foreground mb-2">Selecione os alunos que deseja remover da sala</p>
                    <div className="border rounded-lg p-4">
                      <p className="text-center text-muted-foreground">Nenhum aluno selecionado</p>
                    </div>
                    <Button variant="outline" className="mt-2" disabled>
                      Remover Selecionados
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="avancado">
              <div className="max-w-2xl space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Exportar Dados</h3>
                  <p className="text-sm text-muted-foreground">Exporte todos os dados relacionados a esta sala</p>
                  <div className="flex gap-2 pt-2">
                    <Button variant="outline">Exportar Submissões</Button>
                    <Button variant="outline">Exportar Lista de Alunos</Button>
                    <Button variant="outline">Exportar Tarefas</Button>
                  </div>
                </div>

                <div className="space-y-2 pt-4">
                  <h3 className="text-lg font-medium text-red-500">Zona de Perigo</h3>
                  <p className="text-sm text-muted-foreground">
                    Estas ações são irreversíveis e podem resultar na perda permanente de dados
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      Arquivar Sala
                    </Button>

                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Excluir Sala
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                          <AlertDialogDescription>
                            Esta ação não pode ser desfeita. Isso excluirá permanentemente a sala "{sala.nome}" e
                            removerá todos os dados associados a ela, incluindo tarefas, submissões e avaliações.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancelar</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-500 hover:bg-red-600">
                            Sim, excluir sala
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
