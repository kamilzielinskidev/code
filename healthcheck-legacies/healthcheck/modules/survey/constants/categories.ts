import { Category } from "../models/category";

// TODO: move this to domain
export const categories = <Category[]>[
  {
    name: "Delivering Value",
    description:
      "Good: We deliver great stuff! We're proud of it and our stakeholders are really happy.  Bad: We deliver crap. We feel ashamed to deliver it. Our stakeholders hate us.",
    icon: "deliver",
  },
  {
    name: "Easy to Release",
    description:
      "Good: Releasing is simple, safe, painless and mostly automated.  Bad: Releasing is risky, painful, lots of manual work and takes forever.",
    icon: "release",
  },
  {
    name: "Fun",
    description:
      "Good: We love going to work and have great fun working together!  Bad: Boooooooring...",
    icon: "fun",
  },
  {
    name: "Health of Codebase",
    description:
      "Good: We're proud of the quality of our code! It is clean, easy to read and has great test coverage.  Bad: Our code is a pile of dung and technical debt is raging out of control.",
    icon: "health",
  },
  {
    name: "Learning",
    description:
      "Good: We're learning lots of interesting stuff all the time!  Bad: We never have time to learn anything.",
    icon: "learning",
  },
  {
    name: "Mission",
    description:
      "Good: We know exactly why we are here and we’re really excited about it!  Bad: We have no idea why we are here. There’s no high lever picture or focus. Our so-called mission is completely unclear and uninspiring.",
    icon: "mission",
  },
  {
    name: "Pawns or Players",
    description:
      "Good: We are in control of our own destiny! We decide what to build and how to build it.  Bad: We are just pawns in a game of chess with no influence over what we build or how we build it.",
    icon: "pawn",
  },
  {
    name: "Speed",
    description:
      "Good: We get stuff done really quickly! No waiting and no delays.  Bad: We never seem to get anything done. We keep getting stuck or interrupted. Stories keep getting stuck on dependencies.",
    icon: "speed",
  },
  {
    name: "Suitable Process",
    description:
      "Good: Our way of working fits us perfectly!  Bad: Our way of working sucks!",
    icon: "process",
  },
  {
    name: "Support",
    description:
      "Good: We always get great support and help when we ask for it!  Bad: We keep getting stuck because we can't get the support and help that we ask for.",
    icon: "support",
  },
  {
    name: "Teamwork",
    description:
      "Good: We are a totally gelled super-team with awesome collaboration!  Bad: We are a bunch of individuals that neither know nor care about what the other people in the squad are doing.",
    icon: "teamwork",
  },
];
