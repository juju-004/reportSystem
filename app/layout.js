import "@/styles/globals.css";

export const metadata = {
  title: "Share Application",
  description: "Share Information with using gpt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
