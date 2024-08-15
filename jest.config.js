process.env.TZ = 'UTC'

export default {
  rootDir: './src',
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  // testEnvironment: '@happy-dom/jest-environment',
  // testEnvironment: 'jest-environment-jsdom',
  transform: {
    '\\.(t|j)sx?$': '@swc/jest',
  },
}