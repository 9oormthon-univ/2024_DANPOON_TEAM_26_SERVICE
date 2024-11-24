import coupang from "@/assets/images/coupang.png";
import kakao from "@/assets/images/kakao.png";
import lg from "@/assets/images/lg.png";
import toss from "@/assets/images/toss.png";

export const companies = [
  { value: "구름", label: "구름" },
  { value: "로티파일", label: "로티파일" },
  { value: "네이버", label: "네이버" },
  { value: "카카오", label: "카카오" },
  { value: "라인", label: "라인" },
  { value: "쿠팡", label: "쿠팡" },
  { value: "배달의민족", label: "배달의민족" },
  { value: "당근마켓", label: "당근마켓" },
  { value: "토스", label: "토스" },
  { value: "크래프톤", label: "크래프톤" },
  { value: "넥슨", label: "넥슨" },
  { value: "넷마블", label: "넷마블" },
  { value: "위메프", label: "위메프" },
  { value: "G마켓", label: "G마켓" },
  { value: "11번가", label: "11번가" },
  { value: "직방", label: "직방" },
  { value: "마켓컬리", label: "마켓컬리" },
  { value: "카카오게임즈", label: "카카오게임즈" },
  { value: "삼성전자", label: "삼성전자" },
  { value: "LG전자", label: "LG전자" },
  { value: "SK텔레콤", label: "SK텔레콤" },
  { value: "KT", label: "KT" },
  { value: "LG 유플러스", label: "LG 유플러스" },
  { value: "신한카드", label: "신한카드" },
  { value: "카카오모빌리티", label: "카카오모빌리티" },
  { value: "피키캐스트", label: "피키캐스트" },
  { value: "패스트파이브", label: "패스트파이브" },
  { value: "클래스101", label: "클래스101" },
];

export const companyImages = {
  카카오: kakao,
  카카오모빌리티: kakao,
  카카오게임즈: kakao,
  쿠팡: coupang,
  토스: toss,
  LG전자: lg,
};

export type Company = keyof typeof companyImages;
