import Link from "next/link";
import Image from "next/image";
import profileImage from "@/public/profile-img.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-full overflow-hidden border border-solid border-dark dark:border-gray mr-4">
        <Image
          src={profileImage}
          alt="Codebucks"
          className="w-full h-auto rounded-full"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg md:text-xl">Codebucks</span>
    </Link>
  );
};

export default Logo;
