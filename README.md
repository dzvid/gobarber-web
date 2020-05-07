<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/dzvid/gobarber-web">
    <img src="src/assets/images/logo-purple.svg" alt="Logo" width="200" height="50">
  </a>

  <h3 align="center">GoBarber</h3>

  <p align="center">
    Frontend module
    <br />
    <a href="https://github.com/dzvid/gobarber-web"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://gobarber.netlify.com/">View Demo</a>
    ·
    <a href="https://github.com/dzvid/gobarber-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/dzvid/gobarber-web/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!-- ABOUT THE PROJECT -->

## About The Project

<div style="width: 60%; height:  auto; margin: 0 auto;">

<p>Sign In</p>

![GoBarber][product-screenshot-signin]

</br>

<p>Sign Up</p>

![GoBarber][product-screenshot-signup]

</br>

<p>Dashboard</p>

![GoBarber][product-screenshot-dashboard]

</br>

<p>Notifications</p>

![GoBarber][product-screenshot-notifications]

</br>

<p>Profile</p>

![GoBarber][product-screenshot-profile]

</br>

</div>

This application was built during Rocketseat's bootcamp to learn the usage of React Redux + Sagas + Hooks and it is also the frontend module of the [backend service built in past modules](https://github.com/dzvid/gobarber-api).
The frontend application allows a barber to:

- Create an account in the service;
- Check daily clients appointments: A dashboard shows the booked clients highlighted in yellow;
- Get notifications when new appointments are made;
- Edit profile informations: Allows to update its profile picture, email, name, password.

Another features:

- JWT authentication.

PS.: You may ask: where is the client module? It will be developed in the future.

### Built With

Main libraries and CLI tools used to built the project:

- [Axios](https://github.com/axios/axios)
- [Create react app](https://github.com/facebook/create-react-app)
- [Immer](https://github.com/immerjs/immer)
- [React](https://github.com/facebook/react)
- [React icons](https://github.com/react-icons/react-icons)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Saga](https://github.com/redux-saga/redux-saga)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [Styled components](https://github.com/styled-components/styled-components)
- [Unform](https://github.com/Rocketseat/unform)

To manage the code style and formatting:

- [ESLint](https://github.com/eslint/eslint)
- [Prettier](https://github.com/prettier/prettier)
- [EditorConfig](https://editorconfig.org/)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

Install NodeJS:

- [node](https://nodejs.org/en/)

Install a package manager:

- [yarn](https://classic.yarnpkg.com/lang/en/): Yarn 1.x (classic) was used in this project.

or

- npm

  ```sh
  npm install npm@latest -g
  ```

- Setup and execute GoBarber backend, [disponible here](https://github.com/dzvid/gobarber-api).

### Installation

1. Clone the repository:

   ```sh
   Using ssh:
   git clone git@github.com:dzvid/gobarber-web.git

   Or using https:
   git clone https://github.com/dzvid/gobarber-web.git
   ```

2. Install the project dependencies:

   ```sh
   cd gobarber-web

   yarn
   ```

   or using npm:

   ```sh
   cd gobarber-web

   npm install
   ```
3. Create the `.env` file, use the `.env.example` as template, it has a `REACT_APP_BASE_URL` variable that receives the API address for the production build.

4. Make sure the [backend service](https://github.com/dzvid/gobarber-api) is running.

5. Open a terminal window and start the development server:

   ```sh
   yarn start
   ```

   You can now view GoBarber web module in the browser at: `http://localhost:3000/`

6. You are done with configuration and ready to code! (I hope so :tada:).

<!-- USAGE EXAMPLES -->

<!-- ## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_ -->

<!-- ROADMAP -->

<!-- ## Roadmap

See the [open issues](https://github.com/dzvid/gobarber-web/issues) for a list of proposed features (and known issues). -->

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

David Oliveira - oliveiradavid.dev@gmail.com

Project Link: [https://github.com/dzvid/gobarber-web](https://github.com/dzvid/gobarber-web)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
- [Choose an Open Source License](https://choosealicense.com)
- [Img Shields](https://shields.io)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/dzvid/gobarber-web.svg?style=flat-square
[contributors-url]: https://github.com/dzvid/gobarber-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dzvid/gobarber-web.svg?style=flat-square
[forks-url]: https://github.com/dzvid/gobarber-web/network/members
[stars-shield]: https://img.shields.io/github/stars/dzvid/gobarber-web.svg?style=flat-square
[stars-url]: https://github.com/dzvid/gobarber-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/dzvid/gobarber-web.svg?style=flat-square
[issues-url]: https://github.com/dzvid/gobarber-web/issues
[license-shield]: https://img.shields.io/github/license/dzvid/gobarber-web.svg?style=flat-square
[license-url]: https://github.com/dzvid/gobarber-web/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dzvid
[product-screenshot-signin]: src/assets/screenshots/signIn.png
[product-screenshot-signup]: src/assets/screenshots/signUp.png
[product-screenshot-dashboard]: src/assets/screenshots/dashboard.png
[product-screenshot-notifications]: src/assets/screenshots/notifications.png
[product-screenshot-profile]: src/assets/screenshots/profile.png
