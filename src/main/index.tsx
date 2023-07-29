import React, {Suspense} from 'react';
import {Text, View} from 'react-native';

import {ThemeProvider} from '~/data/use-cases';

import {StyledComponentsDefaultTheme} from '~/infra/theme';

export function Main(): JSX.Element {
  const styledProvider = new StyledComponentsDefaultTheme();
  const Theme = new ThemeProvider(styledProvider).getTheme('dark');

  return (
    <Suspense
      fallback={
        <View>
          <Text>Loading...</Text>
        </View>
      }>
      <Theme>
        <View />
      </Theme>
    </Suspense>
  );
}
