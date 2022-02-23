type HeroM = {
  id: string;
  avatarUrl: string;
  name: string;
  type: string;
  description: string;
};

export const Hero = (hero: Readonly<HeroM>) => hero;

export const HeroesList = (heroesList: ReadonlyArray<HeroM[]>) => heroesList;
