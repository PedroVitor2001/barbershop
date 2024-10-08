import React from "react"
import Header from "../_components/header"
import { db } from "../_lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "../_lib/auth"
import { notFound } from "next/navigation"
import BookingItem from "../_components/booking-item"

const Bookings = async () => {
  const session = await getServerSession(authOptions)
  if (!session?.user) {
    return notFound()
  }

  const confirmedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        gte: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  const concluedBookings = await db.booking.findMany({
    where: {
      userId: (session.user as any).id,
      date: {
        lt: new Date(),
      },
    },
    include: {
      service: {
        include: {
          barbershop: true,
        },
      },
    },
    orderBy: {
      date: "asc",
    },
  })

  return (
    <div className="bg-white">
      <Header />
      <div className="space-y-3 p-5">
        <h1 className="text-xl font-bold text-black">Agendamentos</h1>
        {confirmedBookings.length > 0 && (
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-black">
            Confirmados
          </h2>
        )}
        {confirmedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
        {concluedBookings.length > 0 && (
          <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-black">
            Finalizados
          </h2>
        )}
        {concluedBookings.map((booking) => (
          <BookingItem key={booking.id} booking={booking} />
        ))}
      </div>
    </div>
  )
}

export default Bookings
