import PhoneItem from "@/app/_components/phone-item"
import ServiceItem from "@/app/_components/service-item"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "@/app/_components/ui/button"
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface BarbershopPageProps {
  params: {
    id: string
  }
}

const BarbershopPage = async ({ params }: BarbershopPageProps) => {
  // chamar o meu banco de dados
  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  })

  if (!barbershop) {
    return notFound()
  }

  return (
    <div>
      {/* IMAGEM */}
      <div className="relative h-[250px] w-full">
        <Image
          alt={barbershop.name}
          src={barbershop?.imageUrl}
          fill
          className="object-cover"
        />

        <Button
          size="icon"
          variant="gray"
          className="absolute left-4 top-4 text-black"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="absolute right-4 top-4 border-none bg-white text-black"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SidebarSheet />
        </Sheet>
      </div>

      {/* TÍTULO */}
      <div className="border-b border-none bg-white p-5">
        <h1 className="mb-3 text-xl font-bold text-black">{barbershop.name}</h1>
        <div className="mb-2 flex items-center gap-2">
          <MapPinIcon className="text-blue" size={18} />
          <p className="text-sm text-black">{barbershop?.address}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarIcon className="fill-blue text-blue" size={18} />
          <p className="text-sm text-black">5,0 (499 avaliações)</p>
        </div>
      </div>

      {/* DESCRIÇÃO */}
      <div className="space-y-2 border-b border-none bg-white p-5">
        <h2 className="text-xs font-bold uppercase text-black">Sobre nós</h2>
        <p className="text-justify text-sm text-black">
          {barbershop?.description}
        </p>
      </div>

      {/* SERVIÇOS */}
      <div className="space-y-3 border-b border-solid bg-white p-5">
        <h2 className="text-xs font-bold uppercase text-black">Serviços</h2>
        <div className="space-y-3">
          {barbershop.services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
              barbershop={barbershop}
            />
          ))}
        </div>
      </div>

      {/* CONTATO */}
      <div className="space-y-3 p-5">
        {barbershop.phones.map((phone) => (
          <PhoneItem key={phone} phone={phone} />
        ))}
      </div>
    </div>
  )
}

export default BarbershopPage
