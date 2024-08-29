import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card className="border-none">
        <CardContent className="bg-blue px-5 py-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Copyright{" "}
            <span className="font-bold">Barbearia</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
