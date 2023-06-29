# React Assessment

Ever felt hungry but had no clue what to eat? Well thanks to _CiaoChow_ this will never happen again.

## Tech Stack

We'd like you to pleasebuild the CiaoChow mobile experience using:

-   [Next.js](https://nextjs.org/)
-   [Strapi](https://strapi.io/)

## Designs

The design team has been hard at work prepping [this Figma file](https://www.figma.com/file/bscWZpaWT1Leu0BGBWK0NV/CiaoChow?node-id=19%3A518) for you to follow. You'll be able to grab all assets and see all styling there. We aren't concerend about desktop at this stage so you can restrict the `<body>` to a max-width of 414px.

## User Journey

-   Review the onboarding splash screen
-   Register an account
-   Log in with the newly registered credentials
-   Be presented with something to eat
-   Don't like the option? Just click "Nah" to be given another choice (randomised)

## Strapi Integration

The API is all set up for you already at [https://ciaochow.plusnarrative.biz/](https://ciaochow.plusnarrative.biz/) and we've included the [Postman Collection](ciaochow-api-collection.json) in this repo which will show you the endpoints and payloads that you need to use.

We should be able to register a new user and then log in with that new users credentials. Bonus points for considering the unhappy paths.

You'll need to grab the JWT token returned after login so you can pass it as a bearer token when requesting "chow" ideas.

## Deployment

The client is pretty tech savvy, so when you're done, please just zip the project folder (you can exclude the node_modules) and send it to us.

Good luck and please reach out if you have any questions!
