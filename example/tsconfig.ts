
{
    "include": ["src", "rollup.config.ts"],
    "compilerOptions": {
        "target": "ES6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */,
        "declaration": true /* Generates corresponding '.d.ts' file. */,
        "outDir": "dist" /* Redirect output structure to the directory. */,
        
        /* Strict Type-Checking Options */
        "strict": true /* Enable all strict type-checking options. */,
        "noImplicitAny": true /* Raise error on expressions and declarations with an implied 'any' type. */,
        "strictNullChecks": true /* Enable strict null checks. */,
        "strictFunctionTypes": true /* Enable strict checking of function types. */,
        "strictBindCallApply": true /* Enable strict 'bind', 'call', and 'apply' methods on functions. */,
        "strictPropertyInitialization": true /* Enable strict checking of property initialization in classes. */,
        "noImplicitThis": true /* Raise error on 'this' expressions with an implied 'any' type. */,
        "alwaysStrict": true /* Parse in strict mode and emit "use strict" for each source file. */,

        /* Additional Checks */
        "noUnusedLocals": true /* Report errors on unused locals. */,
        "noUnusedParameters": true /* Report errors on unused parameters. */,
        "noImplicitReturns": true /* Report error when not all code paths in function return a value. */,
        "noFallthroughCasesInSwitch": true /* Report errors for fallthrough cases in switch statement. */,
        "noUncheckedIndexedAccess": true /* Include 'undefined' in index signature results */,

        /* Module Resolution Options */
        "moduleResolution": "node" /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */,
        "resolveJsonModule": true,
        "allowSyntheticDefaultImports": true /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */,
        "esModuleInterop": true /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */,
        
        /* Advanced Options */
        "skipLibCheck": true /* Skip type checking of declaration files. */,
        "forceConsistentCasingInFileNames": true /* Disallow inconsistently-cased references to the same file. */
    }
  }