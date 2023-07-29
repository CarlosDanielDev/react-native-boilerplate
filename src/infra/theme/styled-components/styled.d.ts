import 'styled-components';
import customTheme from '@/infra/theme/light';

declare module 'styled-components' {
  type CustomTheme = typeof customTheme;

  export interface DefaultTheme extends CustomTheme {}
}
