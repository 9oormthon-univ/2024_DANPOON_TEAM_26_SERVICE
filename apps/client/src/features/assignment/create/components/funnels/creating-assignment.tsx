"use client";

import monitor from "@/assets/images/create-assignment.png";
import { Badge } from "@/shared/ui/badge";
import Typography from "@/shared/ui/common/typography/typography";
import Flex from "@/shared/ui/wrapper/flex/flex";
import Image from "next/image";
import { useEffect } from "react";
import CreateAssignmentLayout from "./create-assignment-layout";

interface CreatingAssignmentProps {
  createProps: {
    field: string[];
    tech: string[];
    company: string[];
  };
  onNext: () => void;
}

export default function CreatingAssignment({ createProps, onNext }: CreatingAssignmentProps) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const interval = setInterval(() => {
      // polling
      onNext();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // fileds, tech, company를 하나의 배열로 합침
  const entries = Object.entries(createProps).reduce<string[]>(
    // biome-ignore lint/performance/noAccumulatingSpread: <explanation>
    (acc, [key, value]) => [...acc, ...value],
    [],
  );

  return (
    <CreateAssignmentLayout>
      <Flex direction="col" alignItems="center" justifyContent="center" className="p-4 bg-white">
        <Flex direction="col" alignItems="center" gap="2" className="mb-12">
          <Typography as="h1" size="lg" weight="semibold" align="center">
            현재 아래 키워드를 활용해 과제 생성하고 있어요!
          </Typography>
          <Typography as="p" size="lg" weight="semibold" align="center">
            잠시만 기다려주세요!
          </Typography>
        </Flex>

        <div className="relative mb-16">
          <Image src={monitor} alt="creating-assignment" width={609} height={300} />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
            <div className="w-16 h-16 border-t-4 border-r-6 border-primary rounded-full animate-spin"></div>
          </div>
        </div>

        <Flex wrap="wrap" gap="6" alignItems="center" justifyContent="center" className="max-w-2xl">
          {entries.map((keyword) => (
            <Badge key={keyword} className="bg-[#862E2A] py-2 px-5 rounded-3xl">
              <Typography as="span" size="sm" weight="semibold" color="white">
                {keyword}
              </Typography>
            </Badge>
          ))}
        </Flex>
      </Flex>
    </CreateAssignmentLayout>
  );
}
