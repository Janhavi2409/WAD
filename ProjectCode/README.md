# Is this the code you are looking for?
if yes then to use it -

1. In this file directory open terminal
> This shouldnt be a problem 

2. check if node is working 
> Typically I use `~# node` and enter.

3. Run `npm install -g http-server` if hhtpserver already not installed
>> Nah no comment here!

4. Run the server - `http-server -c-1`
> This is as obvious as it gets.
>> Output should be like this 
>><details>
>> <summary>Click me for Output!</summary>
>>
>>```
>>PS C:\Users\Admin\Desktop\ProjectCode> http-server -c-1
>> Starting up http-server, serving ./
>> 
>> http-server version: 14.1.1
>> 
>> http-server settings:
>> CORS: disabled
>> Cache: -1 seconds
>> Connection Timeout: 120 seconds
>> Directory Listings: visible
>> AutoIndex: visible
>> Serve GZIP Files: false
>> Serve Brotli Files: false
>> Default File Extension: none
>> 
>> Available on:
>>   http://192.168.56.1:8080
>>   http://172.16.5.104:8080
>>   http://127.0.0.1:8080
>>   http://172.19.224.1:8080
>>   http://172.30.32.1:8080
>> Hit CTRL-C to stop the server
>> 
>> > [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /?username=ss&password=ww" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> (node:10280) [DEP0066] DeprecationWarning: OutgoingMessage.prototype._headers is deprecated
>> (Use `node --trace-deprecation ...` to show where the warning was created)
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /style.css" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"       
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /app.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /homeController.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /loginController.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /registerController.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/13ervice.svc.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /authenticationService.js" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:36:44 GMT+0530 (India Standard Time)]  "GET /login.html" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"   
>> [Tue May 06 2025 14:36:47 GMT+0530 (India Standard Time)]  "GET /register.html" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"
>> [Tue May 06 2025 14:37:07 GMT+0530 (India Standard Time)]  "GET /home.html" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0"    
>> >
>>```
</details>

# UserRegistrationApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.10.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
