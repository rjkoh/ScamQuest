import "./globals.css";
import Nav from "./nav";

export const metadata = {
  title: "ScamQuest",
  description: "This is the frontend for ScamQuest",
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
