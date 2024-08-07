"use client"

import { SmartphoneIcon } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { toast } from "sonner"

interface PhoneItemProps {
  phone: string
}

const PhoneItem = ({ phone }: PhoneItemProps) => {
  const handleCopyPaste = (phone: string) => {
    navigator.clipboard.writeText(phone)
    toast.success("Copiado!")
  }

  return (
    <div className="flex justify-between" key={phone}>
      <div className="flex items-center">
        <SmartphoneIcon />
        <p className="text-sm">{phone}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handleCopyPaste(phone)}
      >
        Copiar
      </Button>
    </div>
  )
}

export default PhoneItem
