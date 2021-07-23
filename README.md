[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
![serverless-ci workflow](https://github.com/RichardSilveira/sls-aws-nodejs-typescript-docker/actions/workflows/serverless-ci.yml/badge.svg)
![release](https://img.shields.io/github/v/tag/RichardSilveira/sls-aws-nodejs-typescript-docker?include_prereleases)


# 😄 Read me

Welcome! Here you will find useful information to debug, test, run, and deploy your serverless app using this template.

### 🤔 What the heck is this?

A professional serverless framework template for the stack **AWS, Node.js, Typescript and Docker** with some cool features that you'll enjoy!

### ✅ Table of contents
- [Features](#-cool-additional-features)
- [Extra Plugins](#-serverless-plugins)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Running the project](#-to-run-the-project-locally-while-developing)
- [Github Actions](#-to-run-the-project-remotely-from-github)
- [Continuous Deployment](#-continuous-deployment)
- [Next steps](#-next-steps)

### 😎 Cool additional features

- **[Docker](https://docs.docker.com/get-started/overview/)** - To easily set up a stable CI/CD environment, plus to test some infrastructure such as dynamoDb and others locally.
- **[Jest](https://jestjs.io/)** - To test using one of the most famous JS testing libraries nowadays
- **[Husky](https://typicode.github.io/husky/#/)** - To improves your commit leveraging git hooks
- **[Conventional Commits](https://www.conventionalcommits.org/en/)** - To allow your team to add more semantic meaning to your git history
- **[Github Actions](https://github.com/features/actions)** - To automate your CI/CD workflows

### ⚡ Serverless plugins

  - [serverless-bundle](https://www.npmjs.com/package/serverless-bundle) - To internally handle webpack bundling for us 👌
  - [serverless-offline](https://www.npmjs.com/package/serverless-offline) - To emulate API Gateway + Lambda on your local machine to speed up your development cycles
  - [serverless-dotenv-plugin](https://www.npmjs.com/package/serverless-dotenv-plugin) - In this template we're using it **only** to read the envs from a `.env` file while running the function locally - `npm run local` 
  - [serverless-provisioned-concurrency-autoscaling](https://medium.com/neiman-marcus-tech/serverless-provisioned-concurrency-autoscaling-3d8ec23d10c) - Because configure it in CloudFormation by each function is a nightmare! This guy have created an awesome plugin!

  > To properly work with Lambdas in AWS, you need to understand in-depth two essential concepts - Reserved Concurrency and Provisioned Concurrency *(plus Auto-scaling)*, **seriously, in-depth**!

### 🎯 Prerequisites

As an organized AWS developer, you'll have to create an **aws profile** for your app - *all local commands are configured to run on top of a named profile - `my-profile`*.

You'll need to create a role - see `serverless.yml` > `provider` > `role` configuration section.
You'll need Node.js installed *(LTS always, come on...)*.


### 🚀 Installation

> Hey, don't worry, I did the hard work for you! You'll only need to think about the name of your service *(sometimes it's a challenging task, I know, I know...)*

Just run:

`serverless create --template-url https://github.com/RichardSilveira/sls-aws-nodejs-typescript-docker/ --path <service-name>`

> note: "Service" is the term used by the serverless framework to refer to our "serverless microservice" or whatever other term you are used to, but you got the idea...


### 🧑‍💻 To run the project locally while developing

> reminder: Serverless templates are not about the project folder's structure - that it's up to you, my friend.

The simplest way is by running `npm run local` to run your function locally.

However, a good approach is to start by creating your tests + initial codebase *(ts interfaces, classes, and others)* to do so, you can run `npm run test` or even better, `npm run test:watch` - *you'll be able to debug your code no matter the IDE you like easily.*

While developing the serverless framework (because we're using the dotenv plugin) will read the environment variables from a `.env` file at the root level, you'll need to create one with your env vars - everything is read from the env vars in this template.

> Of course, you can use Docker as well; for this template my main focus is still to use Docker for the CI/CD workflow. But in future versions, I'll focus on Docker while developing locally. For this current version, you only won't debug while running your app inside Docker, but you can run and develop - take a look at the `docker-compose.yml` > `volume` configuration have a clear picture of it.

### 🤖💻 To run the project remotely from Github

I'm leveraging multi-staged builds in Docker, so you'll need to take a look at the `Dockerfile` + on each `docker-compose` files + `.github\workflows` folder.

While running in Github Actions, the env vars won't be read from a `.env` file inside Docker containers, instead, you'll need to inform them via `Github Action secrets` + `docker-compose`' environment args + `ARG/ENV` Dockerfile' instructions.

### 😵‍💫 Continuous Deployment

The commands `test` and `package` run whenever you push something to the remote.

The command `deploy` runs whenever you push a tag - *I'm leveraging the git-flow, but you can change it if you prefer*.

After the deploy is done, you can run `aws lambda list-functions --profile <my-profile> --region <region>` to check if your function is there.


### 👨‍🔧 Next steps

- Remove the serverless-bundle plugin (to give us more control over the webpack to allow some customization - and probably this will help us to debug with Docker while developing)

- Configure sonar

- Create an example repository using this template and code a scenario using DynamoDb

- Get rid of the `serverless.local.yml` file by using a more complex variables environment management scenario.
  https://www.serverless.com/blog/devops-serverless-variables
