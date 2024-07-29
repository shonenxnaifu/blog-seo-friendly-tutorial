import Link from "next/link"
import Image from "next/image"
import profileImage from "@/public/profile-img.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark">
      <div className="w-16 rounded-full overflow-hidden border border-solid border-dark">
        <Image src={profileImage} alt="Codebucks" className="w-full h-auto rounded-full"/>
      </div>
      <span className="font-bold text-xl">Codebucks</span>
    </Link>
  )
}

export default Logo