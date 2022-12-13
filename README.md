## Project 3 - Simple MERN Stack

### Set Lists

This is a React app. Mongoose, Express, Apollo, graphQL.

My final project for school. Right now it's acting as a set list organiser for musicians to make lists of songs and organise those songs into set lists. It is an intentionally simple pattern, because this stem cell is the starting point for the two freelance projects I've got underway right now, a barbershop's gallery and calendar and an insurance brokerage's site. It could be a blog, a messageboard, a recipe site. Etc. It is still my model to refine, and barrage with test-cases and minor adjustments to code in the name of scientific inquiry.

The backend is an express server with two protected authentication routes but other than that the data layer is graphQL. It talks to my Mongoose cluster on Atlas. Apollo gives context to React on the frontend. Database information flows to the front where the authenticated user can add, delete, edit songs and sets. I'm in the process of fleshing this out as an individual experience for each user, something unrequired for MVP delivery to deadline. For fun and practice, styling is pure CSS.

[deployed to heroku here](https://hopeful-muddy.herokuapp.com/)

Screen:
![screen](/client-app/src/assets/screen.png)
