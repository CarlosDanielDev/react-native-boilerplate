export interface ThemeProtocol {
  getTheme(theme: string): (params: any) => any;
}
