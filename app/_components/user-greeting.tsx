"use client"

import { useSession } from "next-auth/react"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import React from "react"

const UserGreeting = () => {
  const { data } = useSession()
  const dataAtual = new Date()

  const dataFormatada = format(dataAtual, "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  })

  return (
    <div>
      {data?.user ? (
        <div>
          <h2 className="text-xl font-bold">Olá, {data.user.name}!</h2>
          <p>{dataFormatada}.</p>
        </div>
      ) : (
        <div>
          <p>{dataFormatada}.</p>
        </div>
      )}
    </div>
  )
}

export default UserGreeting
