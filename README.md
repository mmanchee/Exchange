# _jsExchange_

#### _Week 6 Solo Project for Epicodus, September 11th, 2020_

#### By _**Mike Manchee**_

## Description

A currency exchange project. The program asks the user to specify a currency from, currency to, and an amount. The program then converts the currency as requested. 

<!-- Brainstorming
API call to ExchangeRate-API
Build one exchange from US Dollars to SK Won
build in error handling
Build for there to other currencies, A to B (where A is the Dollar and B is all other currencies)
Then A (as any currency) to B (as any currency)
ideas:
exchange ticker (might take too many calls)
investigate function call delay
graphics changing one coin into another

 -->
### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
|  1. Get API Key and hide in evn | API | env |
|  2. Receive correct information from API | input | verified |
|  3. Parse Function, correctly separate collected information | EUR | .8449 |
|  4. Exchange Function, use API data and convert | Dollar | Franc |
|  5. Expand API call to except any currency | request | requested currency |
|  6. Expand Exchange to allow for any conversion | any currency | any currency |
|  7. Add extra information for the user | extra | Videos and Links |

## Setup/Installation Requirements

* Download option
  * Download files from GitHub repository by click Code and Download Zip
  * Extract files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with The Exchange!

* Cloning options
  * For cloning please use the following GitHub [tutorial](https://docs.github.com/en/enterprise/2.16/user/github/creating-cloning-and-archiving-repositories/cloning-a-repository)
  * Place files into a single directory 
  * Run GitBASH in directory
    * Type "npm install" - to install Node Package Manager and additional files
    * Type "npm run start" - to open compiled browser and view project
  * Have fun with The Exchange!

## Known Bugs

no known bugs

## Technologies Used

Project Specific
* API call with error handling
  * API documentation located [Here](https://www.exchangerate-api.com/docs/overview)

Main Programs
* HTML
* CSS
  * Bootstrap
* JavaScript
  * JQuery
* NPM 
  * JSON - WebPack Creation


### Other Links
[GitHub](https://github.com/mmanchee)

### License

Copyright (c) 2020 **_{Mike Manchee}_**
Licensed under MIT