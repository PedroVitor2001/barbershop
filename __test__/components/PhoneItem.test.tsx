import PhoneItem from "@/app/_components/phone-item"
import { render, screen } from "@testing-library/react"

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
})

jest.mock("sonner", () => {
  toast: {
    sucess: jest.fn()
  }
})

describe("PhoneItem component", () => {
  it("should show barbershop number", () => {
    const phone = "(11)99999-9999"

    render(<PhoneItem phone={phone} />)

    const numberText = screen.getByText(phone)

    expect(numberText.textContent).toEqual(phone)
  })
})
