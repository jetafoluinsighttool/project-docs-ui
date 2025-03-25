import Link from "next/link"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">Jet Afolu Insight Tool Docs</h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Una plataforma sencilla de documentación de Jet Afolu Insight Tool
      </p>
      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Entrar
        </Link>
      </div>
    </div>
  )
}
