import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#050505]">
      <div className="w-full max-w-md mx-4 border border-[#1F2937] bg-[#0A0A0A] rounded-lg p-6">
        <div className="flex mb-4 gap-2">
          <AlertCircle className="h-8 w-8 text-[#FF00A0]" />
          <h1 className="text-2xl font-bold text-[#F0F0F0]">404 Page Not Found</h1>
        </div>
        <p className="mt-4 text-sm text-[#6B7280]">
          The page you requested does not exist in this system.
        </p>
      </div>
    </div>
  );
}
