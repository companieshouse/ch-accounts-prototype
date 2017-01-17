# File company accounts prototype

## About the prototype kit

The prototype kit provides a simple way to make interactive prototypes that look like pages on GOV.UK. These prototypes can be used to show ideas to people you work with, and to do user research.

Read the [project principles](docs/principles.md).

> You must protect user privacy at all times, even when using prototypes. Prototypes made with the kit look like GOV.UK, but do not have the same security provisions. Always make sure you are handling user data appropriately.

## Installation instructions

You need Node.js to run this prototype. To check if you have it installed try:

```
node --version
```

Your version should be 4.4.2

If you don't have Node, download it here: [http://nodejs.org/](http://nodejs.org/).

## Getting started

#### Install dependencies

Open a command line app (Terminal on OSX) and change to the unzipped directory. Then run:

```
npm install
```

npm install by itself doesn't really tell you what it is doing. To see what is happening during install, instead run this:

```
npm install --verbose
```

This will install extra code that the prototype kit needs.

#### Run the app

```
node start.js
```

Go to [localhost:3000](http://localhost:3000) in your browser.

If you want to view multiple prototypes at the same time you can give them unique port numbers, like this:

```
PORT=3005 node start.js
```

To avoid conflicts we recommend using ports between 3000 and 3009. To change the port number permanently, edit the port variable in /server.js.

#### Hot reload

Any code changes should update in the browser without you restarting the app.

## Heroku Deployment

#### Setup Remote - one time activity

Open a command line app (Terminal on OSX) and navigate to repo dir. Then run:

```
git remote add heroku git@heroku.com:ch-accounts-prototype-dev.git
```

Check heroku remote is set:

```
git remote -v
```
shows heroku remote set
```
heroku	git@heroku.com:ch-accounts-prototype-dev.git (fetch)
heroku	git@heroku.com:ch-accounts-prototype-dev.git (push)
```

#### Deploy changes to Heroku

Make sure you push from up to date master branch:

```
git push heroku master
```

Go to [https://ch-accounts-prototype-dev.herokuapp.com](https://ch-accounts-prototype-dev.herokuapp.com) in your browser.

## Installation instructions

- [Installation guide for new users (non technical)](docs/install/introduction.md)
- [Installation guide for developers (technical)](docs/developer-install-instructions.md)

## Guides

1. [Setting up git](docs/guides/setting-up-git.md)
2. [Publishing on the web (Heroku)](docs/guides/publishing-on-heroku.md)
3. [Using GOV.UK Verify](docs/guides/using-verify.md)

## Other documentation

- [Prototype kit principles](docs/principles.md)
- [Making pages](docs/making-pages.md)
- [Writing CSS](docs/writing-css.md)
- [Updating the kit to the latest version](docs/updating-the-kit.md)
- [Tips and tricks](docs/tips-and-tricks.md)
- [Creating routes (server-side programming)](docs/creating-routes.md)

## Community

We have two Slack channels for the Prototype kit. You'll need a government email address to join them.

* [Slack channel for users of the prototype kit](https://ukgovernmentdigital.slack.com/messages/prototype-kit/)
* [Slack channel for developers of the prototype kit](https://ukgovernmentdigital.slack.com/messages/prototype-kit-dev/)
