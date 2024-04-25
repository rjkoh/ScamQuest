import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "Frontend",
  description: "This is the frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
