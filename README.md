Developers: 
Andres Leon Orozco
Eduardo Ojeda Paladino
Rony Chinchilla Azofeifa
Kairo Chacon Maleanos

## Start

first, you must install all dependencies
```bash
npm install

```

## To build and Run application in production

First, compile and optimize the code, ready to be deployed:

```bash
npm run build
```

then start the start the application with the optimize code:

```bash
npm start
```

## To start the Prolog server, open a new terminal in root folder

Change to the right folder using the following command: 

```bash
cd prolog
```
Then, initiate Prolog server using the following command:

```bash
swipl .\ServerProlog.pl
```

## In case you need to run project from dev environment

## If port 3000 is already in use and you want to run a Next.js application on a different port:

Then, you can specify a different port when starting your application. 
To do this, you can use the -p or --port option followed by the port number you want to use. 
For example, if you want to run your application on port 4000 instead of port 3000, you can do the following:

```bash
npm run dev -- -p 4000
# or if you're using yarn:
yarn dev -p 4000
```