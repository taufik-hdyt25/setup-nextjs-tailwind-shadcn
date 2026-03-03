"use client";

import { Home } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-1  w-full flex-col items-center justify-center gap-5 px-4">
      <div className="relative w-full max-w-[400px] aspect-square">
        <Image
          src="/notfound.png"
          alt="Not Found"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h2 className="text-center text-2xl font-semibold text-black">
        Oops! The page you're <br className="hidden sm:block" /> looking for
        doesn't exist.
      </h2>

      {/* Deskripsi */}
      <p className="max-w-md text-center text-muted-foreground">
        The link might be broken, or the page may have been moved.{" "}
        <br className="hidden sm:block" />
        Let's get you back on track to exploring our stories.
      </p>

      <Button
        onClick={() => router.push("/")}
        variant="default"
        className="flex items-center gap-2"
      >
        <Home className="size-4" /> Back To Homepage
      </Button>
    </div>
  );
};

export default NotFoundPage;
