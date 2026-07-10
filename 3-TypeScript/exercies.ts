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