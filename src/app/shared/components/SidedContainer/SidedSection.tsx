import React, { ReactNode } from "react";
import { MainTitle } from "../MainTitle/MainTitle";
import { SidedBox, SidedContainer, SidedHeader } from "./SidedContainer.style";

interface ISidedProps {
  sectionTitle: string;
  subtitle: string | ReactNode;
  reverseHeader?: boolean;
  children: ReactNode;
}

export class SidedSection extends React.Component<ISidedProps> {  
  render() {
    return (
      <SidedContainer reverse={this.props.reverseHeader}>
        <div>
          <SidedHeader>
            <MainTitle>{this.props.sectionTitle}</MainTitle>
            <p>{this.props.subtitle}</p>
          </SidedHeader>
          <SidedBox>{this.props.children}</SidedBox>
        </div>
      </SidedContainer>
    );
  }
}
