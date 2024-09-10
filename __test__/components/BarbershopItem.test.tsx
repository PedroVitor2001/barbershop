import { render, screen } from "@testing-library/react"
import BarbershopItem from "../../app/_components/barbershop-item"
import { Barbershop } from "@prisma/client"
import "@testing-library/jest-dom"

describe("BarbershopItem component", () => {
  const mockBarberShop: Barbershop = {
    id: "14e66875-f05b-4ef0-8591-f84bade7e3ed",
    name: "Barbearia Vintage",
    address: "Rua da Barbearia, 123",
    phones: [],
    description: "",
    imageUrl: "https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  }

  it("should renders barbershop name, address and image", () => {
    render(<BarbershopItem barbershop={mockBarberShop} />)

    expect(screen.getByText(mockBarberShop.name)).toBeInTheDocument()

    expect(screen.getByText(mockBarberShop.address)).toBeInTheDocument()

    const image = screen.getByTestId("barbershop-image")
    expect(image).toBeInTheDocument()
  })
})
