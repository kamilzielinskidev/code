import { Button as AntdButton, ButtonProps } from "antd";
import { FC } from "react";

export const Button: FC<ButtonProps> = (props) => (
  <AntdButton block type="primary" size="large" {...props} />
);
