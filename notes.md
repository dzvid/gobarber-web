# Class notes - Go Barber web

## Initial concepts and development environment settings

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

---

6. Using Root Import

- To use root import is necessary to customize the create react project (override
  some properties), for this it is necessary to install 02 libs:

  ```sh
  yarn add --dev customize-cra react-app-rewired
  ```

- At the root of the project, create the file `config-overrides.js` (it is nodejs
  code, not a react component).

- To override the babel root import plugin it is necessary to install the it:

  ```sh
  yarn add --dev babel-plugin-root-import
  ```

  Add the following configuration to the file `config-overrides.js`:

  ```js
  const { addBabelPlugin, override } = require('customize-cra');

  module.exports = override(
    addBabelPlugin([
      'babel-plugin-root-import',
      {
        rootPathSuffix: 'src',
      },
    ])
  );
  ```

- Now you can import using `~` (til), it will represent the root of the project `src`;
- It is also necessary to replace the scripts (start, build and test) values of `react-scripts` to `react-app-rewired`.

- It is also necessary to configure eslint:

  - Install the lib:

    ```sh
    yarn add --dev eslint-import-resolver-babel-plugin-root-import
    ```

  - Add the following lines to `.eslintrc.js`:

  ```js
    settings: {
      'import/resolver': {
        'babel-plugin-root-import': {
          rootPathSuffix: 'src',
        },
      },
    },
  ```

  - And the last setting to allow to open a file when clicking in the import statement:

    - At the root of the project, create the file `jsconfig.json` with the
      following content:

      ```js
      {
        "compilerOptions": {
        "baseUrl": "src",
          "paths": {
            "~/*": ["*"]
          }
        }
      }
      ```

---

## User: authentication and register.

1.  Style signin and register pages (authentication page):
    The styles.js of those pages will be located at the `src/pages/_layouts/auth` bcoz the pages look alike.

- Install the lib polished:
  ```sh
  yarn add polished
  ```

---

2. Unform lib:

- Install the lib:
  ```sh
  yarn add @rocketseat/unform
  ```

---

3. Form input validation:

- Install yup lib:
  ```
  yarn add yup
  ```

---

4. Redux and Redux Saga configuration:

- Install libs:

  ```
  yarn add redux redux-saga react-redux reactotron-redux reactotron-redux-saga immer
  ```

- Create the store foler, reducers, etc

---

5. Authentication feature:

- Install axios to make requests:
  ```sh
  yarn add axios
  ```

---

6. Store user profile information/data:

---

7. Persist auth token and user profile information:

- In this lesson we will persist the informations in the browser local storage.
- Install the `redux-persist` lib:

  ```sh
  yarn add redux-persist
  ```

- Create a file `~/store/persistReducers.js` to contain the redux-persist setup.

---

8. Add loading animation during authentication process

---

9. Toast notifications:

- Add toastify library:

```sh
yarn add react-toastify
```

- Import the toastify styles in the global styles.
- Import the toast base component in App.js, and now you can use it wherever you want :)

---

10. Create user account feature:

---

11. Client authenticated requests:

- Resume: After the client is logged in the app, every request to the API should contain the JWT token in the authorization header.

---

## Header and Notifications

1. Header component.

---

2. Notifications component.

- Install react-icons lib:
  ```sh
  yarn add react-icons
  ```
- Install a scroll bar lib (and import its css in the global style):
  ```sh
  yarn add react-perfect-scrollbar
  ```

---

3. Notifications.

- Install date-fns lib to work with date informations:
  ```sh
  yarn add date-fns@next
  ```
