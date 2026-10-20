import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  imports: [],
  templateUrl: './basics.html',
  styleUrl: './basics.scss',
})
export class Basics {  
  /*
  Create a New Angular Project:  
    1- Make sure that Node.js, npm, and Angular CLI are installed.
    2- Navigate to the folder where you want to create your Angular project: 
        cd path/to/your/project/folder 
    2-Run the following command to create a new project: ng new 1-first-angular-app 
    3- The CLI will prompt you with some configuration options:
        Would you like to add Angular routing? → Type Y (Yes) if you want to use routing.
        Which stylesheet format would you like to use? → SCSS (recommended) or CSS.
    4- Angular CLI will now generate all the necessary files and install dependencies.
    5- ++ Add "rootDir": "./src" in tsconfig.spec.json under "compilerOptions", since this project is created under nested folders

  Run Project:
    1- Move into the project folder: cd 1-first-angular-app 
    2- Start the Angular development server: ng serve 
    3- After the build process completes, open your browser and visit: http://localhost:4200/
  */

  /*
    Q: How can you add my-first-component in app-component: 
    1- import my-first-component on top of the app.component.ts file: 
      import { FirstComponentComponent } from './first-component/first-component.component';
    2- add my-first-component in the imports of @Component:
      @Component({ …  imports: [RouterOutlet, FirstComponentComponent], …  })
    3- add my-first-component tag in the app component.html: 
      <app-first-component></app-first-component>
  */ 
}
