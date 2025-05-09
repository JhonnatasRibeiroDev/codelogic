import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Code, GraduationCap, Users } from "lucide-react"
import DebugTheme from "./debug-theme"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">CodeLogic</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#recursos" className="text-sm font-medium hover:underline underline-offset-4">
              Recursos
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:underline underline-offset-4">
              Como Funciona
            </Link>
            <Link href="#depoimentos" className="text-sm font-medium hover:underline underline-offset-4">
              Depoimentos
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/login">
              <Button variant="outline">Entrar</Button>
            </Link>
            <Link href="/cadastro">
              <Button className="bg-green-600 hover:bg-green-700">Cadastrar</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Aprenda lógica de programação com <span className="text-green-600">Portugol</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Uma plataforma educacional completa para professores e alunos dominarem os conceitos de programação
                    usando uma linguagem em português.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/cadastro?tipo=professor">
                    <Button className="bg-green-600 hover:bg-green-700">Sou Professor</Button>
                  </Link>
                  <Link href="/cadastro?tipo=aluno">
                    <Button variant="outline">Sou Aluno</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-br from-green-100 to-green-200 dark:from-green-950 dark:to-green-900 p-6 shadow-lg">
                  <div className="absolute inset-0 bg-grid-black/5 dark:bg-grid-white/5 bg-[size:20px_20px]" />
                  <div className="relative rounded-lg bg-background/80 backdrop-blur-sm p-4 shadow-md">
                    <pre className="text-sm text-green-600 dark:text-green-400">
                      <code>{`algoritmo "OlaMundo"
inicio
   escreva("Olá, mundo!")
   escreva("Bem-vindo à CodeLogic")
fimalgoritmo`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="recursos" className="w-full py-12 md:py-24 lg:py-32 bg-muted/40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos Principais</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Tudo o que você precisa para ensinar e aprender lógica de programação
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Salas Virtuais</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Crie e gerencie salas de aula virtuais para seus alunos com facilidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Code className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Interpretador Online</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Execute e teste códigos em Portugol diretamente na plataforma.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <GraduationCap className="h-12 w-12 text-green-600" />
                <h3 className="text-xl font-bold">Ranking de Alunos</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Acompanhe o progresso dos alunos com um sistema de ranking gamificado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
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
      <DebugTheme />
    </div>
  )
}
