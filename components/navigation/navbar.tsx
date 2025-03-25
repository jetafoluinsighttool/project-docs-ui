import {Navigations } from "@/settings/navigation"

import { SheetClose } from "@/components/ui/sheet"
import Anchor from "@/components/navigation/anchor"
//import Search from "@/components/navigation/search"
import { SheetLeft } from "@/components/navigation/sidebar"
import { ModeToggle } from "@/components/navigation/theme-toggle"
import { IconLogo } from "../Icons/IconLogoSellerfy"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-16 border-b backdrop-filter backdrop-blur-xl bg-opacity-5 md:px-4 px-2">
      <div className="mx-auto flex h-full items-center justify-between p-1 sm:p-3 md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeft />
          <div className="flex items-center gap-6">
            <div className="hidden md:flex">
              <IconLogo size={72}/>
            </div>
            <div className="hidden md:flex items-center gap-5 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex sm:ml-0 gap-2">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {Navigations.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="font-bold text-primary"
            absolute
            className="flex items-center gap-1 text-sm"
            href={item.href}
          >
            {item.title}{" "}
          </Anchor>
        )
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        )
      })}
    </>
  )
}
