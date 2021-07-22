[![serverless](http://public.serverless.com/badges/v3.svg)](http://www.serverless.com)
![serverless-ci workflow](https://github.com/RichardSilveira/sls-aws-nodejs-typescript-docker/actions/workflows/serverless-ci.yml/badge.svg)
![release](https://img.shields.io/github/v/tag/RichardSilveira/sls-aws-nodejs-typescript-docker?include_prereleases)


# 😄 Read me

Welcome! Here you will find useful information to debug, test, run, and deploy your serverless app using this template.

### 🤔 What the heck is this?

A professional serverless framework template for the stack **AWS, Node.js, Typescript, and Docker** with some cool features that you'll enjoy!

### ✅ Table of contents
- [Features](#-cool-additional-features)
- [Extra Plugins](#-serverless-plugins)
- [Prerequisites](#-prerequisites)


### 😎 Cool additional features

- **[Docker](https://docs.docker.com/get-started/overview/)** - To easy setup a stable CI/CD environment, plus to test locally some infrastructure such as dynamodb, and others.
- **[Jest](https://jestjs.io/)** - To test using one of the most famous JS testing libraries nowadays
- **[Husky](https://typicode.github.io/husky/#/)** - To improves your commit leveraging git hooks
- **[Conventional Commits](https://www.conventionalcommits.org/en/)** - To allow your team to add more semantic meaning to your git history
- **[Github Actions](https://github.com/features/actions)** - To automate your CI/CD workflows

### ⚡ Serverless plugins

  - [serverless-bundle](https://www.npmjs.com/package/serverless-bundle) - To internally handle webpack bundling for us 👌
  - [serverless-offline](https://www.npmjs.com/package/serverless-offline) - To emulate API Gateway + Lambda on your local machine to speed up your development cycles
  - [serverless-dotenv-plugin](https://www.npmjs.com/package/serverless-dotenv-plugin) - In this template we're using it **only** to read the envs from a `.env` file while running the function locally - `npm run local` 
  - [serverless-provisioned-concurrency-autoscaling](https://medium.com/neiman-marcus-tech/serverless-provisioned-concurrency-autoscaling-3d8ec23d10c) - Because configure it in CloudFormation by each function is a nightmare! This guy have created an awesome plugin!

  > To properly work with Lambdas in AWS you need to understand in-depth two important concepts - Reserved Concurrency and Provisioned Concurrency *(plus Auto-scaling)*, **seriously, in-depth**!

### 🎯 Prerequisites

As an organized aws developer, you'll have to create an **aws profile** for your app - *all local commands are configured to run on top of a named profile - `my-profile`*

This template does not run entirelly inside docker containers, while developing you'll run everything locally without Docker - that will be used by your CI/CD workflows. So, besides **Docker** you'll need of **Node.js** installed *(LTS always, come on...)*

### 🚀 Installation

> Hey, don't worry, I made the hard work for you! You'll only need to about the name of your service *(sometimes it's hard task, I know, I know...)*

Just run:

`serverless create --template-url https://github.com/RichardSilveira/sls-aws-nodejs-typescript-docker/ --path <service-name>`

> note: "Service" is the term used by the serverless framework to refer to our "serverless microservice" or whatever other term you are used to, but you got the idea...


### 🧑‍💻 To run the project locally while developing

> reminder: Serverless templates are not about project folder's structure - it's up to you.

The simplest way is by running `npm run local` to run your function locally.

However, a good approach is start by creating your tests + initial code base *(ts interfaces, classes, and others)* to do so you can run `npm run test` or even better `npm run test:watch` - *you'll be able to easily debug your code no matter the IDE you like.*

<<Talk about integration tests by using docker - but first test it locally using Windows directly>>

<<Which docker-compose file you'll use more while developing? Talk about it as well>>

<<remind about the semantic commit>>

### 🤖💻 To run the project remotelly from Github

<<Explain each of the docker compose' files>>

<<Talk about the github workflows>>

## WHys:
dot-env | npm run local - to read from .env file only

docker multi-staged builds

##How to:

Setup run everything locally without Docker
Run locally with Docker

#Setup:
AWS Profile
Package.json
serverless.yaml
Docker-compose files'

- What to change in case of a new project/service name

# Some checkings:

aws lambda list-functions --profile my-profile --region us-east-1

# Next steps?
Sonar
Remove the severless bundle