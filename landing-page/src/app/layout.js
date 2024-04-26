import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "Logo.",
  description: "Description of Logo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}
