export type SearchState = {
  search: string;
  setSearch: (v: string) => void;
};

export type WikipediaApiResponse = {
  batchcomplete: boolean;
  continue: {
    gpsoffset: number;
    continue: string;
  };
  query: {
    pages: WikipediaPage[];
  };
};

export type WikipediaPage = {
  pageid: number;
  ns: number;
  title: string;
  index: number;
  thumbnail?: {
    source: string;
    width: number;
    height: number;
  };
  pageimage?: string;
  description?: string;
  descriptionsource?: string;
  pageprops?: { displaytitle: string };
};

export type Result = {
  pageId: number;
  title: string;
  description: string;
};

export type ResultsState = {
  results: Result[];
  setResults: (results: Result[]) => void;
};
