module.exports = {
  root: true,
  plugins: [
    `prettier`,
    `react`,
    `react-hooks`,
  ],
  extends: [
    `eslint:recommended`,
    `prettier`,
    `prettier/react`,
  ],
  // parserOptions: {
  //   ecmaVersion: 2020,
  //   ecmaFeatures: {
  //     jsx: true,
  //   },
  // },
  // settings: {
  //   react: {
  //     version: `detect`,
  //   },
  //   'import/resolver': {
  //     node: {
  //       extensions: [`.js`, `.jsx`, `.ts`, `.tsx`],
  //     },
  //     typescript: {
  //       alwaysTryTypes: false,
  //     },
  //   },
  // },
  // reportUnusedDisableDirectives: true,
  rules: {
    'prettier/prettier': 2,
    // 'array-callback-return': `error`,
    // curly: [`error`, `all`],
    // 'default-case': `error`,
    // 'dot-notation': [
    //   `error`,
    //   /* Allow when the property contains underscores, which is often needed for external APIs. */
    //   { allowPattern: `^(_[a-z]+)+$` },
    // ],
    // eqeqeq: `error`,
    // 'import/extensions': [`error`, `never`, { css: `always` }],
    // 'import/first': `error`,
    // 'import/newline-after-import': `error`,
    // /* The `import/order` rule is defined within each package's .eslintrc.js file. */
    // 'import/order': `off`,
    // 'import/prefer-default-export': `off`,
    // /* TypeScript will take care of `named` and `namespace` */
    // 'import/named': `off`,
    // 'import/namespace': `off`,
    // 'import/no-commonjs': `error`,
    // 'import/no-default-export': `error`,
    // 'import/no-extraneous-dependencies': `off`,
    // /* Doesn't work properly in code editors. Not a big deal since TypeScript catches these. */
    // 'import/no-unresolved': `off`,
    // 'import/no-unassigned-import': [`error`, { allow: [`typeface-open-sans`] }],
    // // 'import/no-useless-path-segments': [`error`, { noUselessIndex: true }],
    // 'line-comment-position': [`error`, { position: `above` }],
    // 'max-len': [
    //   `error`,
    //   {
    //     /**
    //      * Prettier handles line length for code, but in some circumstances it will go a little over
    //      * if the formatting necessitates it. The `code` value must be defined here or it will
    //      * default to 80. Making it double the prettier setting seems to work fine.
    //      */
    //     code: 200,
    //     comments: 100,
    //     ignoreUrls: true,
    //   },
    // ],
    // 'max-params': [`error`, 4],
    // 'one-var': [`error`, `never`],
    // 'new-cap': [`error`, { newIsCap: true, capIsNew: false }],
    // 'no-alert': `error`,
    // 'no-await-in-loop': `error`,
    // 'no-else-return': `error`,
    // 'no-eval': `error`,
    // 'no-implied-eval': `error`,
    // 'no-lonely-if': `error`,
    // 'no-loop-func': `error`,
    // 'no-multi-assign': `error`,
    // 'no-new-func': `error`,
    // 'no-new-object': `error`,
    // 'no-new-wrappers': `error`,
    // 'no-nested-ternary': `error`,
    // 'no-only-tests/no-only-tests': `error`,
    // 'no-param-reassign': `error`,
    // 'no-plusplus': `error`,
    // 'no-restricted-imports': [
    //   `error`,
    //   {
    //     patterns: [
    //       /**
    //        * Use the ~ prefix instead. Example: `~server-backend/...`
    //        */
    //       `@app/*`,
    //     ],
    //   },
    // ],
    // 'no-restricted-syntax': [
    //   `error`,
    //   {
    //     selector: `IfStatement > :not(BlockStatement).consequent`,
    //     message: `if statements without an explicit block statement as its body can be hard to read`,
    //   },
    //   /**
    //    * The rest of these were copied from the eslint-config-airbnb-base rules since there is
    //    * currently no way to "extend" individual ESLint rules.
    //    */
    //   {
    //     selector: `ForInStatement`,
    //     message: `for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.`,
    //   },
    //   {
    //     selector: `LabeledStatement`,
    //     message: `Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.`,
    //   },
    //   {
    //     selector: `WithStatement`,
    //     message: `\`with\` is disallowed in strict mode because it makes code impossible to predict and optimize.`,
    //   },
    // ],
    // 'no-return-assign': [`error`, `always`],
    // 'no-return-await': `error`,
    // 'no-shadow': `off`,
    // 'no-shadow-restricted-names': `error`,
    // 'no-underscore-dangle': [`error`, { allow: [`_id`, `__element`, `__typename`] }],
    // 'no-unneeded-ternary': `error`,

    // /* Disabled in favor of babel/no-unused-expressions */
    // 'no-unused-expressions': `off`,

    // 'no-useless-catch': `error`,
    // 'no-useless-concat': `error`,
    // 'no-useless-rename': `error`,
    // 'object-shorthand': [`error`, `always`, { avoidExplicitReturnArrows: true }],
    // 'prefer-const': `error`,
    // 'prefer-destructuring': [`error`],
    // 'prefer-object-spread': `error`,
    // 'prefer-template': `error`,
    // quotes: [`error`, `backtick`, { avoidEscape: true }],
    // radix: `error`,
    // 'react/destructuring-assignment': [`error`, `always`],
    // 'react/forbid-component-props': [`error`, { forbid: [`style`] }],
    // 'react/forbid-dom-props': [`error`, { forbid: [`style`] }],
    // 'react/jsx-filename-extension': [1, { extensions: [`.tsx`] }],
    // 'react/jsx-boolean-value': [`error`, `always`],
    // 'react/jsx-fragments': [`error`, `syntax`],
    // 'react/jsx-key': `error`,
    // 'react/jsx-no-duplicate-props': [`error`, { ignoreCase: true }],
    // 'react/jsx-props-no-spreading': `off`,
    // 'react/no-array-index-key': `off`,
    // 'react/no-children-prop': `error`,
    // 'react/no-danger': `error`,
    // 'react/no-deprecated': `error`,
    // 'react/prop-types': `off`,
    // 'react/state-in-constructor': `off`,
    // 'react-hooks/rules-of-hooks': `error`,
    // 'react-hooks/exhaustive-deps': `warn`,
    // 'spaced-comment': [`error`, `always`, { markers: [`/`] }],
    // yoda: `error`,
  },
};
