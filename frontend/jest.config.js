/** @type {import('jest').Config} */
// ============================================================
// 故意漏掉 testEnvironment: 'jsdom' 配置,用于测试识别能力
// ============================================================
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  testMatch: ['**/__tests__/**/*.test.(ts|tsx|js)']
};