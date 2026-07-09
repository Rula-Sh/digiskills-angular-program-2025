// 1- Install node.js by running the command 'node -v'
// 2- Install TypeScript:'npm install -g typescript' and verify Installation by 'tsc -v' 
// 3- Create '1-first-ts-project' folder & open it in vs code.
// 4- Initialize the project by running 'tsc --init' (creates tsconfig.json file). 
// 5- Uncomment rootDir / outDir lines in tsconfig.json.
// 6- Create index.ts file under src folder and write some code in it.

console.log("Hello Typescript");

// 7- Convert the ts code to js by running 'tsc index.ts' or 'tsc' for all ts files, this command will create index.js under "dist" folder {based on "outDir " destination in tsconfig.json} (some other files will be created, but they are not important, so they can be deleted.).
//     * The compiler can’t run TS files by def, I need to copy the code as js file, so that it can be executed in the browser.
//     * "tsc –outDir dist" => will compile the ts files to js under dist folder (the dist can be replaced with the wanted destination path).
//     * It's better to have a root directory for ts files and an outer directory for js files inside the tsconfig.json so that when I want to run the ts files I use "tsc" instead of naming every file to create its js file in the outer directory.
//     * I can update tsconfig.json under "compilerOptions" to the following: (by that update, running the command will become "node js/index.js").
//         "rootDir": "./src", // i can update it to "./" => means that its under the current folder which is 1-first-ts-project (the folder must exist before compiling).
//         "outDir": "./dist", // i can update it to "js" (the folder is created if it does not exist).
// 8- To run the code (the JavaScript file), write 'node dist/index.js', and the results will show in the terminal. (use'node index.js' if the file was in the root folder).
// 9- To keep the code getting converted to js without manually doing it every time, run 'tsc --watch' in another terminal, and in the first one just run 'node index.js' (this is done so that I dont keep converting the ts file to js then running it).