import Popup from "@/components/Popup";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className="flex pt-9 ">
        <h1 className="text-6xl font-medium mb-8 bg-clip-text	text-transparent bg-gradient-to-r bg-200% shine hover:bg-gradient-to-l from-blue-600 to-red-600 ">
          Hello World!
        </h1>
      </div>

      <div className="flex items-center justify-center flex-1 gap-3">
        <button
          onClick={togglePopup}
          className="px-4 py-2 h-10 bg-lime-400 tracking-wide rounded-lg text-white "
        >
          Open Popup
        </button>
        <button
          onClick={() => router.push("/Second")}
          className="px-4 py-2 h-10 bg-red-600 tracking-wide rounded-lg text-white "
        >
          Next Page
        </button>
        {isOpen && <Popup isOpen={isOpen} setIsOpen={setIsOpen} />}
      </div>
    </div>
  );
};

export default Home;
