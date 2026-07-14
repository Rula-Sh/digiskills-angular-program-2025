// <!-- =========================================================================================================== -->
// <!-- ==================================== Function Arguments & Return Types ==================================== -->
// <!-- =========================================================================================================== -->

/* Q: Write a function that take name and age as arguments, and return them, if age is greater than 30, 
      return "invalid age" */

function nameAge(name: string, age: number): string {
  // the return type is set outside the func as => :string / …
  // I can set multiple return types string | number | function etc
  // I can use :any as a return type but it's not preferred bcs it makes TS useless
  if (age > 30) return "invalide age";
  return `name: ${name}, age: ${age}`;
}


/* Q: Write a function called formatPrice, that take a price as a number and a currency as an optional parameter, 
      this function should always return the price with the currency symbol
        ex: fromatPrice (10) => '$10'
          fromatPrice (10, 'EUR') => '€10'
          fromatPrice (10, USD) => '$10'
          fromatPrice (10, undefined) => '$10' */

function fromatPrice1(price: number, currency: string = "$") {
  if (currency === "EUR") {
    currency = "€";
  }
  return `${currency}${price}`;
}

function fromatPrice2(price: number, currency: string = "USD"): string {
  let x: string;
  switch (currency) {
    case "EUR":
      x = "€";
      break;
    case "USD":
    default:
      x = "$";
      break;
  }
  return `${x}${price}`;
}

// (Better Approach)
function fromatPrice3(price: number, currency: string = "USD"): string {
  const symbols: { [key: string]: string } = { USD: "$", EUR: "€" };
  return `${symbols[currency]}${price}`;
}

// <!-- =========================================================================================================== -->
// <!-- =============================================== Union Types =============================================== -->
// <!-- =========================================================================================================== -->

/* Q: Write a function called convertToNumber, this function should take arguments of type string | number.
      - If the input is a number, return it.
      - If the input is a string, convert it to a number and return it.
      - If the conversion fails (e.g., the string contains letters), return null.
        Requirements:
          - Use union types for function arguments.
          - Ensure the function returns either a number or null.
          - Use typecasting where necessary. */

function convertToNumber1(num: string | number): number | null {
  if (typeof num === "string") {
    //OR isNaN(input)
    return Number(num); //OR parseInt(input) //OR  +input
  } else if (typeof num === "number") {
    return num;
  } else {
    return null;
  }
}

// (Better Approach)
const convertToNumber2 = (value: string | number): number | null =>
  typeof value === "number" ? value : isNaN(+value) ? null : +value;
// "" returns 0 (+"" = 0 which is a number) / "test" returns null / undefined, null, false will cause an error bcs their type is neither a string or number


/* Q: Write a function called getUserFullName, this function should take these arguments: 
      firstName (string), middleName (string), lastName (string)… If there is a middle name, return it. so 
      the output will be ("firstName middleName lastName"), If middle name is not provided, the output will 
      be ("firstName lastName"). Requirements: 1- Use union types for function parameters. 2- the return 
      type is a string. 3- Use typecasting or optional chaining to handle missing values. */

function getUserFullName(firstName: string, lastName: string, middleName?: string): string {
  return [firstName, middleName, lastName].filter(Boolean).join(" ");
}
// A required parameter cannot follow an optional, thats why we placed the middleName the last.
// .filter(Boolean) removes any falsy values (undefined, null, "", false, 0, NaN).


// <!-- =========================================================================================================== -->
// <!-- ======================================= Objects, Arrays and Tuples ======================================== -->
// <!-- =========================================================================================================== -->

/* Q: Build a function called getGradeIfItsGreaterThan80 this function should take array of students object, each 
      object should have a name and a grade, this function should return an array of students names who got a 
      grade greater than 80 */

function getGradeIfItsGreaterThan80_1(input: { name: string; grade: number }[]): string[] {
  var result: string[] = [];
  input.forEach((student) => {
    if (student.grade > 80) {
      result.push(student.name);
    }
  });
  return result;
  // OR
  for (var i: number = 0; i < input.length; i++) {
    if (input[i].grade > 80) result.push(input[i].name);
  }
  // OR
  for (var std in input) {
    if (input[std].grade > 80) result.push(input[std].name);
  }
}

// (Better Approach using Type Alias)
type Student_1 = {
  name: string;
  grade: number;
  id?: number;
  location?: string;
};

function getGradeIfItsGreaterThan80_2(students: Student_1[]): string[] {
  // or  (students: { name: string; grade: number }[]) but its not the best approach, bcs i will need to modify it everywhere it is used when the object properties change... like adding later id: number;
  return students
    .filter((students) => students.grade > 80)
    .map((students) => students.name);
}

const students = [
  { name: "std1", grade: 55 },
  { name: "std2", grade: 76 },
  { name: "std3", grade: 89 },
  { name: "std4", grade: 99 },
];

console.log(getGradeIfItsGreaterThan80_2(students));


/* Q: Write a function called printStudentGrades, this function should take an array of students objects, each 
      object should have a name and a grade, the function should print the student name and his grade, if the 
      student grade is less than 80, print "failed" */

// type Student = {    name: string;    grade: number;    }; // commented bcs its already created

function printStudentGrades1(students: Student_1[]): void {
  students.forEach((student) => {
    console.log(
      `${student.name} has grade of ${student.grade} => ${
        student.grade < 80 ? "Failed" : "Passed"
      }`,
    );
  });
}

function printStudentGrades2(students: Student_1[]): void {
  for (let student of students) {
    // (let student in students) is for objects not arrays
    console.log(
      student.grade > 80
        ? `${student.name} passed with grade a of ${student.grade}`
        : `${student.name} failed`,
    );
  }
}

function printStudentGrades3(student: Student_1[]): string[] {
  return student.map(
    (student) =>
      `${student.name} grade is ${student.grade} => ${
        student.grade > 80 ? "Passed" : "Failed"
      }`,
  );
}

function printStudentGrades4(student: Student_1[]): string[] {
  var res = "Failed";
  return student
    .filter((student) =>
      student.grade > 80 ? (res = "Passed") : (res = "Failed"),
    )
    .map((student) => `${student.name} grade is ${student.grade} ${res}`);
}


/* Q: Write a function called getStudentsInfo, it takes an array of students objects and returns an array of tuples, 
      each tuple contains: studentId (number) / studentName(string) / studentIsGraduated(boolean). and
      each student object contains: id:number / name:string / major: string / isGraduated: boolean 
      Bonus: Get only graduated students info */

type Student_2 = {
  id: number;
  name: string;
  major: string;
  isGraduate: boolean;
};

function getStudentsInfo(students: Student_2[]): [number, string, boolean][] {
  return students.map(({ id, name, isGraduate }) => [id, name, isGraduate]);
}

function getGraduatedStudentsInfo(students: Student_2[]): [number, string, boolean][] {
  return students
    .filter((student) => student.isGraduate)
    .map(({ id, name, isGraduate }) => [id, name, isGraduate]);
}


// <!-- =========================================================================================================== -->
// <!-- ====================================== Type Alias & Index Signature ======================================= -->
// <!-- =========================================================================================================== -->

/* Q: Write a TypeScript type called "UserSettings", this type allows dynamic keys where:
        1- Each key is a string (representing the setting name).
        2- Each value is either a string or Boolean (representing the setting value).
      Then create an object called "setting" using this type and add the following properties: 
      "theme"-> "light" / "hasNotifications"-> true / "isAutoSave"-> false….
      Bonus: Write a function "getSettingValue" that takes "settings" and a key as arguments and returns the 
             corresponding value. */

type UserSettings = {
  [key: string]: string | boolean;
};

const settings: UserSettings = {
  theme: "light",
  hasNotification: true,
  isAutoSave: false,
};
// I can name the key 1 or true… bcs the compiler will consider the key as string

function getSettingsValue(setting: UserSettings, key: string): string | boolean {
  return setting[key]; // returns the keys values
}

console.log(getSettingsValue(settings, "theme")); // returns light
console.log(getSettingsValue(settings, "unknownKey")); // returns undefined


// <!-- =========================================================================================================== -->
// <!-- =========================================== Intersection Types ============================================ -->
// <!-- =========================================================================================================== -->

/* Q: Define an intersection type StudentAthlete that combines Student and Athlete. 
      The object must have name, grade, sport, and team properties. */

type Student_3 = { name: string; grade: number };
type Athlete = { sport: string; team: string };

type StudentAthlete = Student_3 & Athlete; // & (Intersection) requires ALL properties from BOTH types, extra properties are NOT allowed
type StudentOrAthlete = Student_3 | Athlete; // | (Union) Must match AT LEAST ONE type completely, it Can have extra properties, BUT only if they belong to the OTHER type in the union


// <!-- =========================================================================================================== -->
// <!-- =============================================== Interfaces ================================================ -->
// <!-- =========================================================================================================== -->

/* Q: Create a Product interface that has id (number)/ name (string)/ price (number)/ An optional discount (number).
      Then create object Item that follows this interface.
      Bonus: Modify the solution by adding getProductDetails function, 
             which takes a Product object and returns a formatted string. */

interface Product {
  id: number;
  name: string;
  price: number;
  discount?: number;
}

let item1: Product = {
  id: 1,
  name: "ChocoRush",
  price: 1.49,
};

function getProductDetails(product: Product): string {
  return product.discount
    ? `${product.name} has a price $${product.price} with ${product.discount}% discount.`
    : `${product.name} has a price $${product.price} (there is no discount available).`;
}


// <!-- =========================================================================================================== -->
// <!-- ================================================ Generics ================================================= -->
// <!-- =========================================================================================================== -->

/* Q: Create a generic function "wrapInArray" that takes a single value and returns it as an array of same type. */

function wrapInArray<T>(value: T): T[] {
  return [value];
}


/* Q: Create a generic function called pair that takes two values of different types and returns them as a tuple [FirstType, SecondType]. */

function pair<Val1, Val2>(val1: Val1, val2: Val2): [Val1, Val2] {
  return [val1, val2];
}

// <!-- =========================================================================================================== -->
// <!-- ============================================== Utility Types ============================================== -->
// <!-- =========================================================================================================== -->

/* Q: 1- Define a type NotPendingStatus that includes "approved" and "rejected", but excludes "pending".
      2- Create a type called UserWithoutEmail that includes everything from User except email.
      3- Create a type called UserBasicInfo that only includes id and name from User.
      4- Define a constant object settings that cannot be modified after initialization. */

// Q1:
type status = "approved" | "rejected" | "pending";
type NotPendingStatus = Exclude<status, "pending">;
// Q2:
interface User {
  id: number;
  username: string;
  email: string;
}
type UserWithoutEmail = Omit<User, "email">;
// Q3:
type UserBasicInfo = Pick<User, "id" | "username">;
// Q4:
type Settings = { brightness: number; volume: number; language: string };
const userSettings: Readonly<Settings> = {
  brightness: 55,
  volume: 87,
  language: "English",
};