import { Loader } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <div className="flex flex-col items-center gap-3">
        <Loader className="w-20 h-20 animate-spin" />
        <p className="text-md text-gray-600">Loading page...</p>
      </div>
    </div>
  );
}
