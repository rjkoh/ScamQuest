import "./globals.css";

export const metadata = {
  title: "ScamQuest",
  description: "This is the frontend for ScamQuest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
