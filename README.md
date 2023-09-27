This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## If port 3000 is already in use and you want to run a Next.js application on a different port:

Then, you can specify a different port when starting your application. 
To do this, you can use the -p or --port option followed by the port number you want to use. 
For example, if you want to run your application on port 4000 instead of port 3000, you can do the following:

```bash
npm run dev -- -p 4000
# or if you're using yarn:
yarn dev -p 4000
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

