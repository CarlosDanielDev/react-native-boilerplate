import {ThemeProvider} from 'styled-components/native';

import {ThemeProtocol} from '~/data/protocols';
import light from '~/infra/theme/light';
import dark from '~/infra/theme/dark';

export class StyledComponentsDefaultTheme implements ThemeProtocol {
  theme: string;

  getTheme(theme: string): (props: any) => any {
    this.theme = theme;
    return ({children}) => (
      <ThemeProvider theme={theme === 'dark' ? dark : light}>{children}</ThemeProvider>
    );
  }
}
