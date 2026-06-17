import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-4 border border-border bg-card rounded-lg p-6">
        <div className="flex mb-4 gap-2">
          <AlertCircle className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you requested does not exist in this system.
        </p>
      </div>
    </div>
  );
}
