import "~/styles/globals.css";
import NavBar from "./_components/NavBar";

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <div className="w-screen max-h-screen">
            <NavBar />
            {children}
            </div>
        </body>
      </html>
    )
  }