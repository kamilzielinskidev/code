export type PopupHorizontalPosition = "START" | "END";

export type Styles = Readonly<Record<string, string>>;

export type University = {
  name: string;
};

export type UniversityResponse = {
  web_pages: string[];
  name: string;
  "state-province": null;
  domains: string[];
  alpha_two_code: "PL";
  country: "Poland";
};
