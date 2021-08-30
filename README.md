# Landing page frontend coding exercise

This exercise is designed to give you an opportunity to demonstrate your skills building frontend UIs.

## Task 📝

Your goal is to implement a page inside an imaginary app that displays information about **Real Estate** to the user, according to this [Figma design](https://www.figma.com/file/Z7mfSdykP1QtcpqL7xopXB/fincaraiz-frontend-interview?node-id=0%3A1).
- The "What will you do" input refers to the transaction API. Note that each transaction comes with a set of property types and it should be reflected in the UI.
- The "Type house" input refers to the property type API.
- The "City or ZIP code" refers to the cities API.
- The search button should redirect to the page /[transactionSlug]/[propertyTypeSlug]/[citySlug]. **DO NOT** worry about intermidiate pages.
- The view all property button should load the next batch of 5 properties.
- You **DO NOT** need to implement the email subscription submit functionality just the UI.
- You can use capitalized slugs as labels.

You have 3 hours for your submission. Reserve 10 minutes at the end of your time to fill out the SOLUTION.md file documenting in detail:

- Any context about your approach that you want to share with the reviewers - particular architectural decisions, technology choices, intentional deviations etc.
- Any known limitations of your solution and how you chose those trade-offs.
- Anything that's missing from your solution that you would add if you had more time. Please, explain in detail the 'what, how, and why' of each item.

The SOLUTION.md file is a very important part of this coding exercise and will be taken into consideration for the final score.

Once you're done, pack your solution into an archive with `npm pack` and send it back to us.
Using `npm pack` ensures that the big `node_modules` folder is not included in the archive.
Note: Email services like GMail will reject ZIP files as attachments containing JavaScript for security reasons, but sharing it through Google Drive (or a different cloud service) and including a link in the email works.

An **engineer** and a **designer** will grade your submission on code (implementation), result (UI, UX, functionality, adherence to the design specification, etc) and your solution notes, so we recommend to not compromise one over the other.
Apply the same standards to your solution you would to any solution you implement in a "real" app.
If you can't get the whole exercise done in the time box, cut scope and make informed trade-offs the same way you would for a "real" app and explain them in your SOLUTION.md.
Try to hand in a "well-rounded" submission that demonstrates your skills as well as possible.

## Backend

We deployed a mini API for you to use under `https://frontend-test-api.vercel.app/api`.
It allows you to query all the details you need in your implementation.
This is where your submission should fetch data from.

The following links give you the API explorers/documentation:

- REST: https://frontend-test-api.vercel.app/

You can also find TypeScript types for each endpoint in `types`.

## What's in the box 📦

- A Next.js application.
- React material-ui.

Keep in mind all of this is just here to save you time - you can remove, replace or add anything you'd like!

## Getting started 🚀

You can change the existing code and setup in any way you'd like.

First install dependencies:

```
npm install
```

then start the development server:

```
npm run dev
```

Afterwards your server should be accessible at http://localhost:3000

Happy coding!
