type Log = {
  version: string;
  title: string;
  description?: React.ReactNode;
};

export type ChangelogProps = {
  logs: Log[];
};
