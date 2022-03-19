import { FC } from "react";
import { IconBaseProps, IconType } from "react-icons";

export const BigIcon: FC<IconBaseProps & { icon: IconType }> = ({
  icon,
  ...props
}) => {
  const Icon = icon;
  return <Icon size={48} {...props} />;
};
