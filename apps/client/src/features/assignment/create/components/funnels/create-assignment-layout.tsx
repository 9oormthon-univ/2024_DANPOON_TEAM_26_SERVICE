import { cn } from "@/shared/lib/utils";
import Flex from "@/shared/ui/wrapper/flex/flex";
import type { PropsWithChildren } from "react";

interface CreateAssignmentLayoutProps {
  className?: string;
}

export default function CreateAssignmentLayout({
  children,
  className,
}: PropsWithChildren<CreateAssignmentLayoutProps>) {
  return (
    <Flex direction="col" alignItems="center" justifyContent="center" className="w-full">
      <Flex
        justifyContent="center"
        className={cn("max-w-[800px] w-full", className || "h-fit-height")}
      >
        {children}
      </Flex>
    </Flex>
  );
}
