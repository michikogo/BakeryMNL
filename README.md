# BakeryMNL

BakeryMNL is an ecommerce site that sells pastries. They offer deliver and pickup services but up to 5 items per product. This project was created with `React Hooks`, `JSON Server` and `react-bootstrap`.

## Working Site

https://michikogo.github.io/BakeryMNL/

## Installation

1. Clone the respiratory
   ```bash
   https://github.com/michikogo/BakeryMNL.git
   ```
2. Install the packages (in cmd)
   ```bash
   npm install
   ```
3. Run the react server
   ```bash
   npm start
   ```
4. Run the Json server
   ```bash
   npx json-server --watch src/Data/db.json --port 8000
   ```

### Create New React

1. Download react in cmd

   ```bash
   npx create-react-app <fileName>
   ```

### React with JSON-Server Deployment

1. Place db.json in main branch so that it can be accessed
   https://my-json-server.typicode.com/michikogo/BakeryMNL
2. All the `fetch(<URL>)` change to `fetch(<onlineURL>)`
3. Install gh-pages using cmd:
   ```bash
   npm install gh-pages
   ```
4. Add "Homepage" property in package.json
   `http://<github-username>.github.io/<repo-name>`
5. Add predeploy and deploy on "Scripts"
   `"predeploy": "npm run build",`
   `"deploy": "gh-pages -d build"`
6. Run the following in cmd:
   ```bash
   npm run build
   ```
   ```bash
   npm run deploy
   ```
7. Check the repos settings, in the ghPages section select gh-pages branch then save.

## Branches

- master
  - Contains the main code for the project. The json file uses localhost to access the db
- main
  - Contains db.json only so that it can be accessed on https://my-json-server.typicode.com/michikogo/BakeryMNL
- OnlineJSON
  - Contains the deployed code, uses the my-json-server website to host db.json
- gh-pages
  - Byproduct of OnlineJSON
- localJSON
  - Duplicate of master that contains local hosting for db.json

## Webpages

| Webpage  |                                                    Description                                                    |             Libraries              |
| :------: | :---------------------------------------------------------------------------------------------------------------: | :--------------------------------: |
|   Home   |                            Landing page of the site, shows the food, staff and promos                             |     `react`, `react-bootstrap`     |
|  About   |                                 Where team, mission, vision and goals are placed                                  |     `react`, `react-bootstrap`     |
|  Bakery  |                                          Shows all the pastries selling                                           | `react`, `JSON`, `react-bootstrap` |
| Products | From bakery, redirects to the specific pastry. User can add to cart or buy now with the desired quality (up to 5) | `react`, `JSON`, `react-bootstrap` |
|  Order   |     Shows the summary of items bought and total price, asks user if pick up or delivery then process payment      | `react`, `JSON`, `react-bootstrap` |

## Road Map

Features that should be added/ for improvement are:

- [x] Home Page
  - [x] Create a slide show
  - [x] Add 3 pastires as recomendation
- [x] About Page
  - [x] Show team members
- [x] Page Not Found
  - [x] Show user that wrong page
- [x] Product Page
  - [x] Disable buttons until user has added a quantity
- [ ] Order Page
  - [x] Restrict phone number form to numbers only
  - [x] Create a remove button for specific items in the cart
  - [x] Create loading symbol when fetching from db
  - [x] Remove items when bought
  - [ ] User can change quantity in cart table (Will implement on future projects)
- [x] General
  - [x] Create Readme
  - [x] Research about Json deployment
  - [x] Tab image and tab title
  - [x] Redirect to top of the page
  - [x] Mobile Responsive

## Project Status

This project is done, started at March 12, 2021 until March 21,2021
