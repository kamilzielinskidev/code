import { FC } from "react";

import { Result } from "./models";
import {
  callWithInputValue,
  createWikipediaArticleUrl,
  searchHeaderTextFromState,
} from "./PF";
import { resultsState, searchState } from "./state";

const Container: FC = ({ children }) => (
  <div className="mt-5 mx-auto grid grid-cols-1 max-w-md">{children}</div>
);

const Header: FC = () => <h1 className="text-5xl">Wikipedia API Search</h1>;

const Search: FC = () => (
  <input
    className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
    type="text"
    onChange={callWithInputValue(searchState().setSearch)}
    placeholder="Search..."
  />
);

const Results: FC = ({ children }) => <div>{children}</div>;

const ResultsHeader: FC = () => (
  <h1 className="mt-4">{searchHeaderTextFromState(searchState())}</h1>
);

const ResultsList: FC = ({ children }) => (
  <div className="mt-4">{children}</div>
);

const Result: FC<Result> = ({ title, description, pageId }) => (
  <div className="mt-2 border rounded p-4">
    <ResultHead link={createWikipediaArticleUrl(`${pageId}`)}>
      {title}
    </ResultHead>
    <ResultDescription>{description}</ResultDescription>
  </div>
);

const ResultHead: FC<{ link: string }> = ({ children, link }) => (
  <a className="text-3xl text-blue-600" href={link}>
    {children}
  </a>
);

const ResultDescription: FC = ({ children }) => (
  <p className="mt-2">{children}</p>
);

export const App: FC = () => (
  <Container>
    <Header />
    <Search />
    <Results>
      <ResultsHeader />
      <ResultsList>
        {resultsState().results.map((result) => (
          <Result key={result.pageId} {...result} />
        ))}
      </ResultsList>
    </Results>
  </Container>
);
