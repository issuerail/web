export interface Issue {
  id: number;
  type: string;
  status: string;
  priority: string;
  version: string;
  owner: string;
  summary: string;
  project: string;
  component: string;
  reporter: string;
}
