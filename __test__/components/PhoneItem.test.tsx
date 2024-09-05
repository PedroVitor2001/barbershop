import PhoneItem from "@/app/_components/phone-item"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"
import { toast } from "sonner"

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
})

jest.mock("sonner", () => ({
  toast: {
    success: jest.fn(),
  },
}))

describe("PhoneItem component", () => {
  it("should show barbershop number", () => {
    const phone = "(11)99999-9999"

    render(<PhoneItem phone={phone} />)

    const numberText = screen.getByText(phone)

    expect(numberText.textContent).toEqual(phone)
  })

  it("should copy phone number to clipboard and shows success toast", () => {
    const phone = "(11)99999-9999"

    render(<PhoneItem phone={phone} />)

    expect(screen.getByText(phone)).toBeInTheDocument()

    const copyButton = screen.getByRole("button", { name: /copiar/i })
    fireEvent.click(copyButton)

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith(phone)

    expect(toast.success).toHaveBeenCalledWith("Telefone copiado com sucesso!")
  })
})
