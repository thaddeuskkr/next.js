import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script id="layout-before-interactive" strategy="beforeInteractive">
          {`
            window.layoutBeforeInteractiveExecuted = true;
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
