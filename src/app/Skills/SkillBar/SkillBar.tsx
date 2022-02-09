import React from "react";
import { SkillBarContainer } from "./SkillBar.style";

interface ISkillBarProps {
  skillLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  skillName?: string;
  hasMaterial?: boolean;
}

type ISkillBarState = {
  isFilled: boolean;
};

export class SkillBar extends React.Component<ISkillBarProps, ISkillBarState> {
  private bars = Array(9);
  constructor(props: ISkillBarProps) {
    super(props);
    this.state = {
      isFilled: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isFilled: true,
      });
    }, 400);
  }

  render() {
    this.bars.fill("|");
    return (
      <SkillBarContainer        
        length={this.props.skillLevel}
        isFilled={this.state.isFilled}
      >
        {this.props.skillName && (
          <small className="skillName">{this.props.skillName}</small>
        )}
        <div>
          {this.bars.map((bar, index) => {
            return <span key={index}></span>;
          })}
        </div>
      </SkillBarContainer>
    );
  }
}
