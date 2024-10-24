import "bootstrap/scss/bootstrap.scss";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./globals.scss";
import CursorFollower from "@/shared/CursorFollower";
import SmoothScroll from "@/shared/SmoothScroll";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        <CursorFollower />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
