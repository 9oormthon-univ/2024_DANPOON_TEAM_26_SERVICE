import EvaluationComment from "@/features/evaluation/ui/evaluation-comment";
import EvaluationOverallScore from "@/features/evaluation/ui/evaluation-overall-score";
import EvaluationResultInfo from "@/features/evaluation/ui/evaluation-result-info";
import Typography from "@/shared/ui/common/typography/typography";
import Flex from "@/shared/ui/wrapper/flex/flex";

const EvaluationResultPage = () => {
  return (
    <Flex as="main" direction="col" className="py-10">
      <Typography as="h1" className="font-bold text-4xl text-center mb-10">
        AI 리뷰 결과
      </Typography>
      <section className="self-center w-full max-w-2xl px-24 space-y-7">
        <EvaluationResultInfo />
      </section>
      <hr className="my-20 border-[#D9D9D9] w-screen" />
      <section className="self-center w-full max-w-2xl px-24 space-y-3">
        <EvaluationOverallScore />
      </section>
      <hr className="my-20 border-[#D9D9D9] w-screen" />
      <EvaluationComment />
    </Flex>
  );
};

export default EvaluationResultPage;