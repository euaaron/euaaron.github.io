import { StyledLink } from "./PillButton.style";

interface PillButtonProps {
  to: string;
  text?: React.ReactNode;
  children?: React.ReactNode;
  animate?: boolean;
}

export function PillButton({ to, text, children, animate }: PillButtonProps) {
  const paddingFix = (children) ? 'true' : 'false';
  const anim = animate ? 'true' : 'false';

  return (
    <StyledLink to={to} animate={anim} paddingfix={paddingFix}>
      {children}
      {text}
    </StyledLink>
  );
}
