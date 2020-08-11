import React from "react";
import { ColorClause } from "../ColorClause";

interface SettingFormProps {
  className?: string;
  onClick: () => void;
  settedOptionName: string;
  currentOptionName: string;
  colors: string[];
}

export const ColorSettingForm: React.SFC<SettingFormProps> = (props) => {
  return (
    <div className={props.className}>
      <ColorClause firstLine="test" className={props.className}>
        {[...Array(10).keys()].map((e, i) => (
          <div key={i}>{i}</div>
        ))}
      </ColorClause>
    </div>
  );
};
