import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Footer from "@/app/_components/footer"

describe("Footer component", () => {
  it("should render 'barbearia' text", () => {
    render(<Footer />)

    const textElement = screen.getByText(/barbearia/i)
    expect(textElement).toBeInTheDocument()
  })

  it("should display the current year", () => {
    const currentYear = new Date().getFullYear()

    render(<Footer />)

    const yearElement = screen.getByText((content) =>
      content.includes(currentYear.toString()),
    )
    expect(yearElement).toBeInTheDocument()
  })
})
