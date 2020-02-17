Class notes - Go Barber web

---

1. Configure app navigation (routes):

- Install react-router-dom:

  ```sh
  yarn add react-router-dom
  ```

- Create the following folders:

  - `src/pages`
  - `src/routes`: contains the routes configurations, create the file `index.js`;
  - `src/services`:
    -Inside the folder create the file `history.js` (used to navigate the user between pages) and install the history lib:
    ```sh
     yarn add history
    ```

---

2. Configure Reactotron:

- Install Reactotron plugin:
  ```sh
  yarn add reactotron-react-js
  ```
- Create the file `src/config/ReactotronConfig.js`.

---

3. Private Routes (Checks if the user is authenticated to allow access to a given page, not checking JWT token yet):
   In some use cases its necessary to allow or limit an user to access certain pages (i.e: when the user is logged in, go to dashboard, otherwise go to signup or other page), so how do we do it?
   Use the `isPrivate` property in the Route.

- Create the file `src/routes/Route.js`, it will contain our RouterWrapper component that is responsible to check if the user can access or not a given page.
- Validate props. Install Prop types lib:
  ```sh
  yarn add prop-types
  ```

---

4. Template Layouts:

- Create a folder `_layouts` to contain common layouts used in the project:
  - `auth/index.js` contain the authentication layout (for the login page);
  - `default/index.js` contain the layout for the authenticated user;
- Install styled components: `yarn add styled-components`;
- Apply the layout in the `src/routes/Route.js` file;
- Now set a layout depending if the user is logged in or not:
  `const Layout = signed ? DefaultLayout : AuthLayout;`

---

5. Global style:
