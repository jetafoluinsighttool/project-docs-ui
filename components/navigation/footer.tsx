import Link from "next/link"

import { Company } from "@/lib/meta"
import { IconLogo } from "../Icons/IconLogoSellerfy"

export function Footer() {
  return (
    <footer className="w-full h-16 border-t">
      <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 w-full h-full px-2 sm:py-0 py-3 sm:px-4 lg:px-8 text-sm text-muted-foreground">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <Link className="font-semibold" href={Company.link}>
            {Company.name}
          </Link>
          .
        </p>
        {Company.branding !== false && (
          <div className="text-center hidden md:block">
            <Link
              className="font-semibold"
              href="https://app.sellerfy.ai/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconLogo size={72}/>
            </Link>
          </div>
        )}
      </div>
    </footer>
  )
}
