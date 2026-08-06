import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

/*
  Flat config, required by ESLint 9. Replaces the old .eslintrc.json —
  Next 16 removed the `next lint` command, so linting now runs through the
  ESLint CLI, which no longer reads the legacy format.

  eslint-config-next 16 ships flat config natively, so its entry points are
  spread in directly. Do not route these through FlatCompat: the compat
  layer tries to JSON-serialize the config for schema validation and the
  plugin objects in the modern config are circular, which throws before a
  single file is linted.
*/
const config = [
  {
    // Flat config carries no implicit ignores beyond node_modules, so the
    // generated directories must be listed — otherwise ESLint lints the
    // exported build output and buries the real findings.
    ignores: [".next/**", "out/**", "next-env.d.ts"],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
];

export default config;
