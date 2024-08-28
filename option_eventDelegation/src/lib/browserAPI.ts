type BrowserXYNode<A> = A & {
  nodeName: string;
  parentNode: BrowserXYNode<A> | undefined;
};

type BrowserZNode<A> = A & {
  nodeName: string;
  parentNode: BrowserZNode<A> | null;
};

type MockBrowserRestProps = {
  id?: string;
};

export type BrowserNode =
  | BrowserXYNode<MockBrowserRestProps>
  | BrowserZNode<MockBrowserRestProps>;
