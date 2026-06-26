"use strict";
// 1- create 1-first-ts-project folder & open it in vs code.
// 2- run "tsc --init" in terminal (creates tsconfig.json file).
// 3- uncomment rootDir / outDir lines.
// 3- create index.ts under src folder and write some code in it.
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello Typescript");
// 4- run "tsc" in terminal (notice that a index.js will be created under dist folder, that's because ts got converted to js so that it can be executed in the browser) (some other files will be created, but they are not important, so they can be deleted.).
// 5- to run the code, run "node dist/index.js", and the results will show in the terminal.
// 6- to keep the code getting converted to js without manually running it, run "tsc --watch" in another terminal, and in the first one just run "node index.js" (this is applied so that I dont keep converting the ts file to js then running it).
// "tsc –outDir dist" => will compile the ts files to js under dist folder (the dist can be replaced with the wanted destination path).
// it's better to have a root directory for ts files and an outer directory for js files inside the tsconfig.json so that when I want to run the ts files I use "tsc" instead of naming every file to create its js file in the outer directory.
//  I can update tsconfig.json under "compilerOptions" to the following: (by that update, runnig the code will become "node js/index.js").
//      "rootDir": "./src", // i can update it to "./" => means that its under the current folder which is 1-first-ts-project (the folder must exist before compiling).
//      "outDir": "./dist", // i can update it to "js" (the folder is created if it does not exist).
//# sourceMappingURL=index.js.map