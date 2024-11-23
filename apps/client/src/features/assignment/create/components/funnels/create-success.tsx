"use client";

import SuccessImage from "@/assets/images/create-success.png";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card } from "@/shared/ui/card";
import Typography from "@/shared/ui/common/typography/typography";
import Flex from "@/shared/ui/wrapper/flex/flex";
import Image from "next/image";
import Link from "next/link";
import CreateAssignmentLayout from "./create-assignment-layout";

export default function CreateSuccess() {
  return (
    <CreateAssignmentLayout>
      <Flex direction="col" alignItems="center" justifyContent="center" className="p-4 bg-white">
        <div className="mb-8">
          <Image
            src={SuccessImage}
            alt="Github Illustration"
            width={233}
            height={137}
            className="mx-auto"
          />
        </div>

        <Flex direction="col" alignItems="center" gap="2" className="mb-8">
          <Typography as="h1" size="xl" weight="semibold" align="center" whitespace="pre-line">
            {"과제 생성이 완료 되었어요!\n지금 바로 Github를 통해 생성된 과제를 확인해보세요!"}
          </Typography>
        </Flex>

        <Card className="w-full max-w-2xl p-6 mb-8">
          <Flex direction="col" gap="4">
            <Typography as="h2" size="lg" weight="semibold" align="center">
              제목 : 게임 내 이벤트 추천 시스템
            </Typography>

            <div>
              <Typography size="base" color="muted" align="center">
                관심기업의 [넷마블]과 관심 기술의 [AI]을 접목하여
              </Typography>

              <Typography size="base" color="muted" align="center">
                넷마블에서 진행한{" "}
                <Typography as="span" color="primary" weight="bold">
                  2022년도 프론트엔드 과제전형을 기반으로 하여 생성
                </Typography>{" "}
                하였습니다.
              </Typography>
            </div>

            <Flex wrap="wrap" gap="2" className="mt-4" justifyContent="center">
              {["프론트엔드", "AI서비스", "App", "넷마블"].map((keyword) => (
                <Badge key={keyword} variant="outline" className="border-[#862E2A] text-[#862E2A]">
                  {keyword}
                </Badge>
              ))}
            </Flex>
          </Flex>
        </Card>

        <Link href="/" className="w-full">
          <Button
            className="w-full text-white py-6 rounded-3xl"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            <Typography as="span" size="sm" weight="extrabold" color="white">
              Github로 이동하기
            </Typography>
          </Button>
        </Link>
      </Flex>
    </CreateAssignmentLayout>
  );
}
