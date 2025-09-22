# XPawn Assignment: Dynamic Multi-Table Search

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Choices & Thought Process

- Tech Stack: React, TypeScript, Next.js, Shadcn UI
  - Chose Shadcn just to maintain a consistent UI; it also has a large component library to take advantage of given the time to work on this
  - Next.js + Vercel is easy to deploy
- Usually, I design mobile-first, but in this case I actually designed desktop-first and didn't design for mobile at all
  - Firstly, due to the time constraint (if this was a longer project I'd eventually update the design for mobile)
  - Designed for desktop-first as the purpose of this app is to view large amounts of data, which is cumbersome on mobile regardless of how good the UI is
- Started off with the left panel first and implementing the various filters to apply to the list of datasets
  - Some filters don't apply to any of the datasets given (e.g. under Theme, there's an "Automotive" tag that doesn't apply to any of the tables) but are there as examples of how the app can be extended later
  - I know the references given were just as examples, but I quite liked the UI in the HuggingFace page that was given, so I used that as a base
- Afterwards, implemented the right panel i.e. the table display, including the various table filters

## Additional Features

- Resizable panels
- For any individual table:
  - Sort ascending/descending by any column
  - Perform a global search on the table
  - Show/hide any columns
- Hosted at [xpawn-zz.vercel.app](https://xpawn-zz.vercel.app)

## (Hypothetical) Next Steps

- Wanted an option for the user to upload their own files (I actually had most of it ready but ran out of time, so I left it commented out)
- Ideally the multi-table views should also stack horizontally too; at the moment they only stack vertically since it was faster to program that way
- Add skeleton loaders when fetching data (I had the components imported but never implemented them)
- Add option to open dataset in a separate page
- Not as many comments in the code as I would like (sorry about that, again that was due to time)
