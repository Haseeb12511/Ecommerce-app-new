import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <Loader2 className="animate-spin text-4xl text-gray-500 h-12 w-12" />
  </div>
);

export default Loader;
