# BakeryMNL

This project was created with `React Hooks`, `JSON Server` and `react-bootstrap`.

## Working Site

There is no working site yet :(

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

### React Deployment

1. Deploying the project type the following in cmd:

   ```bash
   npm run build
   ```

## Branches

- master - main project code

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

- [ ] Home Page
  - [ ] Make Design
- [x] About Page
  - [x] Make Design
- [x] Page Not Found
  - [x] Make Design
- [ ] Product Page
  - [x] Disable buttons until user has added a quantity
  - [ ] Add 3 random items as recomendation
- [x] Order Page
  - [x] Restrict phone number form to numbers only
  - [x] Create a remove button for specific items in the cart
  - [x] Create loading symbol when fetching from db
  - [x] Remove items when bought
  - [ ] User can change quantity in cart table
- [x] General
  - [x] Create Readme
  - [x] Research about Json deployment
  - [x] Tab image and tab title
  - [x] Redirect to top of the page

## Project Status

This project is ongoing, started at March 12, 2021
