import FullLayout from "@/components/FullLayout";
import Link from "next/link";
import Logo from "../public/images/logo.svg"
import Image from "next/image";
import Banner from "@/components/Banner";
export default function Home() {
  return (
    <main>
      <FullLayout>
        <Banner/>
  
      </FullLayout>
     
    </main>
  )
}
