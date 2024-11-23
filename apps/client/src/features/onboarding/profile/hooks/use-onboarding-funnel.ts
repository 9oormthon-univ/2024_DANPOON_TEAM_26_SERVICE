import type {
  Complete,
  InputGithub,
  InputTechAndCompany,
  OnboardingFunnel,
  SelectJob,
} from "@/entities/onboarding/schema/onboard-funnel";
import {
  CompleteSchema,
  InputGithubSchema,
  InputTechAndCompanySchema,
  OnboardingSchema,
  SelectJobSchema,
} from "@/entities/onboarding/schema/onboard-funnel";
import { useFunnel } from "@use-funnel/browser";

export default function useOnboardingFunnel() {
  const funnel = useFunnel<{
    InputName: OnboardingFunnel;
    InputGithub: InputGithub;
    SelectJob: SelectJob;
    InputTechAndCompany: InputTechAndCompany;
    // InputEducation: InputEducation;
    Complete: Complete;
  }>({
    id: "onboarding",
    initial: {
      step: "InputName",
      context: {},
    },
    steps: {
      InputName: { parse: OnboardingSchema.parse },
      InputGithub: { parse: InputGithubSchema.parse },
      SelectJob: { parse: SelectJobSchema.parse },
      InputTechAndCompany: { parse: InputTechAndCompanySchema.parse },
      // InputEducation: { parse: InputEducationSchema.parse },
      Complete: { parse: CompleteSchema.parse },
    },
  });

  return funnel;
}
