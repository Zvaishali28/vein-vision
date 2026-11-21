import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "react-hooks/purity": "off",
    },
  },
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "backend/**",
      "venv/**",
      "**/*.py",
      "runs/**",
      "reports/**",
      "uploads/**",
    ],
  },
];

export default eslintConfig;
