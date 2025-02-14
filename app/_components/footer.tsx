import { Card, CardContent } from "./ui/card"

export function Footer() {
  return (
    <div>
      <Card>
        <CardContent className="px-5 py-6">
          <p className="text-sm text-gray-400">
            ©️ 2024 Copyright <span className="font-bold">Feijão Barber</span>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
