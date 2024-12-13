import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemProps {
  barbershop: Barbershop
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl border-none bg-slate-50">
      <CardContent className="p-0 px-1 pt-1">
        {/* IMAGEM */}
        <div className="relative h-[159px] w-full">
          <Image
            alt={barbershop.name}
            fill
            className="rounded-2xl object-cover"
            src={barbershop.imageUrl}
            data-testid="barbershop-image"
          />

          <Badge
            className="absolute left-2 top-2 space-x-1 bg-white"
            variant="secondary"
          >
            <StarIcon size={12} className="fill-blue text-blue" />
            <p className="text-xs font-semibold text-black">55</p>
          </Badge>
        </div>

        {/* TEXTO */}
        <div className="px-1 py-3">
          <h3 className="truncate font-semibold text-black">
            {barbershop.name}
          </h3>
          <p className="truncate text-sm text-slate-400">
            {barbershop.address}
          </p>
          <Button
            variant="gray"
            className="mt-3 w-full"
            asChild
            data-testid="button-book"
          >
            <Link href={`/barbershops/${barbershop.id}`}>
              <p className="text-black">Reservar</p>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarbershopItem
