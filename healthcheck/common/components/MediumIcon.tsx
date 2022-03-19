import { FC } from "react";
import { IconBaseProps, IconType } from "react-icons";

export const MediumIcon: FC<IconBaseProps & { icon: IconType }> = ({
  icon,
  ...props
}) => {
  const Icon = icon;
  return <Icon size={32} {...props} />;
};
