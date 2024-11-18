import type { ComponentPropsWithRef } from "react";
import { forwardRef } from "react";

export interface ButtonProps extends ComponentPropsWithRef<"div"> {
  // 여기에 props 타입을 정의하세요
}

const Button = forwardRef<HTMLDivElement, ButtonProps>(function Button(props, ref) {
  const { ...rest } = props;

  return (
    <div ref={ref} className="bg-slate-500" {...rest}>
      <h1 className="bg-blue-100">Button 컴포넌트</h1>
    </div>
  );
});

Button.displayName = "button";

export default Button;
