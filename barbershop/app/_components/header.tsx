import React from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Icon, MenuIcon } from "lucide-react"
import { Button } from "./ui/button"

export const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image src="/logo.png" height={18} width={120} alt="logo" />
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
