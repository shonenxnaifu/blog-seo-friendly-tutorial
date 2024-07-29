import Image from "next/image";
import { allBlogs } from "contentLayer/generaeted";

export default function Home() {
  console.log(allBlogs);
  return (
    <main className="flex flex-col items-center justify-center">
      Lorem Ipsum 
    </main>
  );
}
