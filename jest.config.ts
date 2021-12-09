import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleNameMapper: {
    "~(.*)$": "<rootDir>/src/$1"
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;
