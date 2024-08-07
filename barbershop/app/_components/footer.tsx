import React from "react"
import { Card, CardContent } from "./ui/card"

const Footer = () => {
  return (
    <footer>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            ©2023 Copyrights <span className="font-bold">FSW Babrber</span>
          </p>
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
