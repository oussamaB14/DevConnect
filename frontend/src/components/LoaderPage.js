//import { Loader } from "lucide-react";
import logo from "../assets/images/DevConnect.(1)(1).png";
import { useState, useEffect } from "react";

export default function LoaderPage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="mb-6 flex items-center justify-center w-full max-w-md">
        <img
          src={logo}
          alt="DevConnect Logo"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-300 transition-all duration-200 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-lg font-medium text-gray-600">
        Loading... 
      </p>
    </div>
  );
}
