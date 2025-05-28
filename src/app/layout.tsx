export const metadata = {
  title: 'Vânia Costura Criativa',
  description: 'Transformando suas idéias em realidade.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
