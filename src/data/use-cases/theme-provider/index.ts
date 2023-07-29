import {ThemeProtocol} from '~/data/protocols';

export class ThemeProvider {
  constructor(private readonly themeProcotol: ThemeProtocol) {}

  getTheme(theme: string) {
    return this.themeProcotol.getTheme(theme);
  }
}
