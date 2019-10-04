# Fungus Scene [Online Preview](https://eslam-nasser.github.io/)

Interactive 3D experience to better understand the morphology of a wide range of types of fungi.

## Table of contents

-   [Download](#download)
-   [Run the project locally](#run-the-project-locally)
-   [Project's Goal](#goal)
-   [Dependencies](#dependencies)
-   [Maintainers](#maintainers)
-   [Report an issue](#report-an-issue)
-   [License](#license)

## Download

You can [Download the app directly from github](https://github.com/eslam-nasser/eslam-nasser.github.io/releases/download/v1.0.2/Fungus.Scene.Setup.1.0.2.exe), its about 120 MB.

You can also use [the online version](https://eslam-nasser.github.io) without the need to download anything.

## Run the project locally

You will need to have `NodeJS` and `NPM` installed on your machine before running this project locally.

```bash
# 1) Clone the repo
git clone https://github.com/eslam-nasser/eslam-nasser.github.io.git

# 2) cd to app directory and install dependencies
cd eslam-nasser.github.io && yarn

# 3) After installing is finished you can open it locally as an electron app with this command
yarn start

# 3.1) You can also run the app in the browser assuming you have php installed on your machine, it will open on http://localhost:4000/
yarn serve

# 4) build .exe it will be in /dist folder
yarn build

# 5) if you want to modify any js file in /assets/js folder then you will have to recomplie the code running this command
yarn dev
```

## Goal

The goal of this app is to help teachers and students all around the world to visually understand the morphological differences between different kinds of fungi.

## Dependencies

Big thanks to all of these projects/libraries for helping us accelerate this project:

-   [Three.js](https://threejs.org/)
-   [Blender](https://www.blender.org)
-   [FlatIcon](https://www.flaticon.com/)

## Maintainers

This project was built as a graduation project in Plant Protection Department, Agriculture College, Fayoum University, Egypt.

Developer:

-   [Eslam nasser](https://github.com/eslam-nasser/)

Blender Designers:

-   Nada.M
-   Fatma.G
-   Yasmine.M
-   Nada.I

## Report an issue

Please if you find any scientific inaccuracies please email us at [eslam.nasser.dev@gmail.com](mailto:eslam.nasser.dev@gmail.com) or [open a new issue](https://github.com/eslam-nasser/eslam-nasser.github.io/issues/new) on this repo.

## License

Fungus Scene is licensed under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)
