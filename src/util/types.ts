export interface IPost {
  slug: string;
  topic: string;
  title: string;
  description: string;
  date: Date;
  edited?: Date;
}