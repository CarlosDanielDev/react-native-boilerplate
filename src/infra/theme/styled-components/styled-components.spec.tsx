import {render} from '@testing-library/react-native';
import React from 'react';
import {StyledComponentsDefaultTheme} from '~/infra/theme';
import {ThemeProvider} from '~/data/use-cases';
import {Text, View} from 'react-native';

type MockThemeTextProps = {
  theme: string;
};

const MockThemeText: React.FC<MockThemeTextProps> = ({theme}) => {
  return <Text testID={theme === 'dark' ? 'dark-theme' : 'light-theme'}>Teste</Text>;
};

const makeSut = (theme: string) => {
  const provider = new StyledComponentsDefaultTheme();
  const Theme = new ThemeProvider(provider).getTheme(theme);

  return {
    getByTestId: render(
      <Theme>
        <View>
          <MockThemeText theme={provider.theme} />
        </View>
      </Theme>,
    ).getByTestId,
    provider,
  };
};

describe('StyledComponentsDefaultTheme', () => {
  it('Should provide the light theme when theme is not dark', () => {
    const theme = 'light';
    const {getByTestId, provider} = makeSut(theme);
    expect(getByTestId('light-theme')).toBeTruthy();
    expect(provider.theme).toBe(theme);
  });

  it('Should provide the dark theme when theme is dark', () => {
    const theme = 'dark';
    const {getByTestId, provider} = makeSut(theme);
    expect(getByTestId('dark-theme')).toBeTruthy();
    expect(provider.theme).toBe(theme);
  });
});
