module.exports = {
  testMatch: [
    '<rootDir>/tests/**/*.test.js',
  ],
  collectCoverageFrom: [
    'backend/src/**/*.js',
    '!backend/src/index.js', // Excluir punto de entrada si no es necesario
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleDirectories: ['node_modules', 'backend/node_modules'],
};