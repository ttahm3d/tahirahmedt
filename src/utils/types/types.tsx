export type ThemeToggleType = {
  theme: string;
  toggleTheme: () => void;
};

export type BlogType = {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  brief: string;
};
