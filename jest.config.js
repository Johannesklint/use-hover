module.exports = {
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
}
