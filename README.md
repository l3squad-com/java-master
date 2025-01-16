# java-master
A collection of quizzes to help you prepare for interviews and strengthen your skills in Java Developer Role and development.

### Create NextJS Boiler Plate App

```
npx create-next-app@latest . --use-npm
```

> Result 

```
✔ Would you like to use TypeScript? … No / Yes
✔ Would you like to use ESLint? … No / Yes
✔ Would you like to use Tailwind CSS? … No / Yes
✔ Would you like your code inside a `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to use Turbopack for `next dev`? … No / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No / Yes
Creating a new Next.js app in /Users/alamelu/opensource/java-master.

Using npm.

Initializing project with template: app-tw


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc

added 369 packages, and audited 370 packages in 38s

142 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created java-master at /Users/alamelu/opensource/java-master
```

## Open next.config.mjs

```
/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    output: isDev ? 'standalone' : 'export',
    basePath: isDev ? '' : '/<repo-name>',
    assetPrefix: isDev ? '' : '/<repo-name>',
};

export default nextConfig;
```

## Update Deploy commands in package.json

```
"predeploy": "npm run build",
"deploy": "npx gh-pages -d out --nojekyll"
```