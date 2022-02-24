type HeroM = {
  id: string;
  avatarUrl: string;
  name: string;
  type: string;
  description: string;
};

export type Hero = Readonly<HeroM>;

export type HeroesList = ReadonlyArray<HeroM>;

export const Hero = (hero: Hero) => hero;

export const HeroesList = (heroesList: HeroesList) => heroesList;
