"use client"

import { SmartphoneIcon } from "lucide-react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPhoneClick = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Telefone copiado com sucesso!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      {/* ESQUERDA */}
      <div className="flex items-center gap-2">
        <SmartphoneIcon color="black" />
        <p className="text-sm text-black">{phone}</p>
      </div>
      {/* DIREITA */}
      <Button
        variant="blue"
        size="sm"
        onClick={() => handleCopyPhoneClick(phone)}
        className="text-white"
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
