import { StyledLink } from "./PillButton.style";

interface PillButtonProps {
  to: string;
  animate: boolean;
  text?: React.ReactNode;
  children?: React.ReactNode;
}

export function PillButton({ to, text, children, animate }: PillButtonProps) {
  const paddingFix = (children) ? true : false;

  return (
    <StyledLink to={to} animate={animate.toString()} paddingfix={paddingFix.toString()}>
      {children}
      {text}
    </StyledLink>
  );
}
