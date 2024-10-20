
import "./globals.css";
export const metadata = {
  title: "Home page",
  description: "Description of home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
