// .commitlintrc.js
module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat", // 새로운 기능
        "fix", // 버그 수정
        "perf", // 성능 개선
        "refactor", // 코드 리팩토링
        "test", // 테스트 코드 추가/수정
        "ci", // CI 설정 변경
        "docs", // 문서 수정
        "build", // 빌드 관련 변경
        "chore", // 기타 변경
      ],
    ],
    "subject-max-length": [2, "always", 50], // 커밋 제목은 50자 이내
    "subject-empty": [0, "never"], // subject 빈 값 허용
    "type-empty": [0, "never"], // type 빈 값 허용
  },
};
