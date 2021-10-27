import { pipe } from "ramda";
import { FC } from "react";

import { getInputValue, searchHeaderText } from "./PF";
import { useSearchState } from "./state";

const Container: FC = ({ children }) => (
  <div className="mt-5 mx-auto grid grid-cols-1 max-w-md">{children}</div>
);

const Header: FC = () => <h1 className="text-5xl">Wikipedia API Search</h1>;

const Search: FC = () => {
  const searchState = useSearchState();
  return (
    <input
      className="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
      type="text"
      onChange={pipe(getInputValue, searchState.setSearch)}
      placeholder="Search..."
    />
  );
};

const Results: FC = ({ children }) => <div>{children}</div>;

const ResultsHeader: FC = () => {
  const searchState = useSearchState();
  return (
    <h1 className="mt-4">{searchHeaderText(searchState.search)}</h1> // TODO: use fp-ts Either
  );
};

const ResultsList: FC = ({ children }) => (
  <div className="mt-4">{children}</div>
);

type Result = {
  title: string;
  description: string;
};

type Text = {
  text: string;
};

const Result: FC<Result> = ({ title, description }) => (
  <div className="mt-2 border rounded p-4">
    <ResultHead text={title} />
    <ResultDescription text={description} />
  </div>
);

const ResultHead: FC<Text> = ({ text }) => (
  <a className="text-3xl text-blue-600" href="#">
    {text}
  </a>
);

const ResultDescription: FC<Text> = ({ text }) => (
  <p className="mt-2">{text}</p>
);

export const App: FC = () => {
  return (
    <Container>
      <Header />
      <Search />
      <Results>
        <ResultsHeader />
        <ResultsList>
          <Result
            title={"JavaScript"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam illum nobis error voluptatem. Repellendus praesentium corporis id incidunt! Iure debitis animi ea nemo obcaecati quasi natus sequi molestiae eligendi."
            }
          />
          <Result
            title={"JavaScript"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam illum nobis error voluptatem. Repellendus praesentium corporis id incidunt! Iure debitis animi ea nemo obcaecati quasi natus sequi molestiae eligendi."
            }
          />
          <Result
            title={"JavaScript"}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore quibusdam illum nobis error voluptatem. Repellendus praesentium corporis id incidunt! Iure debitis animi ea nemo obcaecati quasi natus sequi molestiae eligendi."
            }
          />
        </ResultsList>
      </Results>
    </Container>
  );
};
