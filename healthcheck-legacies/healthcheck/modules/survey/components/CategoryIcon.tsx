import { FC } from "react";
import {
  BiBookBookmark,
  BiBug,
  BiConversation,
  BiGame,
  BiGitCompare,
  BiHourglass,
  BiPackage,
  BiPlusMedical,
  BiSupport,
  BiTrip,
  BiUserVoice,
} from "react-icons/bi";

import { Category } from "../models/category";

export const stringToIconMap = {
  deliver: BiPackage,
  release: BiBug,
  fun: BiGame,
  health: BiPlusMedical,
  learning: BiBookBookmark,
  mission: BiTrip,
  pawn: BiUserVoice,
  speed: BiHourglass,
  process: BiGitCompare,
  support: BiSupport,
  teamwork: BiConversation,
} as const;

export const CategoryIcon: FC<{ category: Category }> = ({ category }) => {
  const Icon = stringToIconMap[category.icon];

  return <Icon size={32} color={"var(--text)"} />;
};
