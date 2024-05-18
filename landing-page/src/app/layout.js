import "./globals.css";
import Nav from "./nav";
import Footer from "./footer";

export const metadata = {
  title: "Harvest - Revolutionising Education",
  description: "Personalised Teaching with Every Student's Insights. Empower your teaching with detailed performance analytics and personalized feedback.",
  icons: {
    icon: "/favicon.ico",
  },
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
