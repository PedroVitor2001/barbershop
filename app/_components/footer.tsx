import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-gray-400 text-sm">
            © 2023 Copyright <span className="font-bold">Barbearia</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
