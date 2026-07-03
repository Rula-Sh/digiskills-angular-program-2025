// 1- create 2-typescript-webpack-starter folder
// 2- Initialize the project by 'npm init -y', which will create "package.json" file (without this file i cannot download any package) (npm should be previously installed)
// 3- Install webpack by 'npm install webpack webpack-cli webpack-dev-server --save-dev' (without --save-dev it means that the package will be used in production and development)
// 4- create webpack.config.js and add the provided code.
// 5- create app.js file under "src" folder and write some code in it.

function greetName(name: string): string {
  return `Hello ${name}!`;
}
console.log(greetName("Rula"));

// 6- Add ("start": "webpack serve",      "build": "webpack",) in package.json file under "scripts"
// 7- Install ts-loader =>   'npm i ts-loader --save-dev' which can be seen after installation in package.json
// 8- Install typescript => 'npm i typescript'
// 9- Run 'tsc --init' in terminal (creates tsconfig.json file).
// 10- Run 'tsc' in terminal, this command will create index.js under "dist" folder {based on "outDir " destination in tsconfig.json } (some other files will be created, but they are not important, so they can be deleted.).
// 11- Add index.html in dist folder and add app.js file in it
// 12- run 'npm i' (if node_modules did not exist)
// 13- run 'npm run build'
// 14- run 'npm start'
// 15- open the console in the newly opened page, and you will see the console.log message
