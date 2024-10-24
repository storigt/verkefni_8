import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module",  // Set to "module" to enable ES6 import/export
      globals: globals.browser, // Include browser-specific globals like window, document
    }
  },
  pluginJs.configs.recommended,
];