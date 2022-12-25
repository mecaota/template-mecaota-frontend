module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig-jest.json',
      useESM: true,
    },
  },
  testMatch: ['**/*.test.+(ts|tsx|js)'],
};
