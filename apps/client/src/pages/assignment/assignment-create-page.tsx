"use client";
import ConfirmUserInfo from "@/features/assignment/create/components/funnels/confirm-userInfo";
import CreateSuccess from "@/features/assignment/create/components/funnels/create-success";
import CreatingAssignment from "@/features/assignment/create/components/funnels/creating-assignment";
import InputUserInfo from "@/features/assignment/create/components/funnels/input-userinfo";
import type { 생성중 } from "@/features/assignment/create/hooks/use-create-assignment-funnel";
import useCreateAssignmentfunnel from "@/features/assignment/create/hooks/use-create-assignment-funnel";

export default function AssignmentCreatePage() {
  const funnel = useCreateAssignmentfunnel();

  return (
    <funnel.Render
      유저정보확인={
        // onNext를 넘길 때, branch1, branch2로 분기처리할 수 있어야 함.
        ({ history }) => (
          <ConfirmUserInfo
            onNext={(
              branch: "유저정보입력후생성" | "생성중",
              // 브랜치가 "유저정보입력후생성"이면, 필드를 받아와야 함.
              // 생성중이면 필드를 받아오지 않음.
              fildProps?: 생성중,
            ) => {
              if (branch === "유저정보입력후생성") {
                return history.push("유저정보입력후생성", {});
              }
              return history.push("생성중", {
                // biome-ignore lint/style/noNonNullAssertion: <explanation>
                ...fildProps!,
              });
            }}
          />
        )
      }
      유저정보입력후생성={({ history }) => (
        <InputUserInfo
          onNext={(branch: "유저정보입력후생성" | "생성중", fildProps?: 생성중) =>
            history.push("생성중", {
              // biome-ignore lint/style/noNonNullAssertion: <explanation>
              ...fildProps!,
            })
          }
        />
      )}
      생성중={({ history, context }) => (
        <CreatingAssignment createProps={context} onNext={() => history.push("생성완료")} />
      )}
      생성완료={({ history }) => <CreateSuccess />}
    />
  );
}
