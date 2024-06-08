import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/sections/Header";
import { FormProvider } from "@/context/FormContext";

const poppins = Poppins({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Home Organizer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <FormProvider>
          <Header />
          {children}
        </FormProvider>
      </body>
    </html>
  );
}
