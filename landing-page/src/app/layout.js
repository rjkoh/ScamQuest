import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

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
        <Footer></Footer>
      </body>
    </html>
  );
}
