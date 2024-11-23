// 유저 정보 확인이 필요해요!(user/me에서 데이터 보여줌.) -> 분기 1(생성 중), 분기 2(유저 정보 입력 후 생성)
// 유저 정보 입력후 생성: (희망 직무, 희망 기술, 희망 회사)  -> 생성 중으로 이동
// 생성 중 -> polling 하다가 생성 완료되면 생성 완료로 이동

import { useFunnel } from "@use-funnel/browser";
import { z } from "zod";

export const CreateAssignmentSchema = z
  .object({
    field: z
      .array(z.string())
      .min(1, "직군을 최소 1개 이상 선택해야 합니다.")
      .max(3, "직군은 최대 3개까지 선택 가능합니다."),
    tech: z
      .array(z.string())
      .min(1, "기술 스택을 최소 1개 이상 선택해야 합니다.")
      .max(3, "기술 스택은 최대 3개까지 선택 가능합니다."),
    company: z
      .array(z.string())
      .min(1, "관심 기업을 최소 1개 이상 선택해야 합니다.")
      .max(3, "관심 기업은 최대 3개까지 선택 가능합니다."),
  })
  .partial();

// 유저정보입력후생성 페이지에서만 모든 데이터가 필요함 -> 필수로 설정

export const 생성중스키마 = CreateAssignmentSchema.required({
  field: true,
  tech: true,
  company: true,
});

export type 공통생성정보 = z.infer<typeof CreateAssignmentSchema>;
export type 생성중 = z.infer<typeof 생성중스키마>;

export default function useCreateAssignmentfunnel() {
  const funnel = useFunnel<{
    유저정보확인: 공통생성정보;
    생성중: 생성중;
    유저정보입력후생성: 공통생성정보;
    생성완료: 공통생성정보;
  }>({
    id: "create-assignment",
    initial: {
      step: "유저정보확인",
      context: {},
    },
    steps: {
      유저정보확인: {
        parse: CreateAssignmentSchema.parse,
      },
      생성중: { parse: 생성중스키마.parse },
      유저정보입력후생성: { parse: CreateAssignmentSchema.parse },
      생성완료: { parse: CreateAssignmentSchema.parse },
    },
  });

  return funnel;
}
