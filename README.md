# Sunny App version 2 beta R1.0

## Introduction

Introducing the Sunny App version 2.

## Project 2: Client single-page application project

This app was created for the final project for the EDX Front End Bootcamp.

## What is the Sunny App for?

Sunny is trying to solve the problem of solar panel capacity being mis-sold to consumers. Sunny is providing consumers with basic information about solar panels so they can be better informed in a negotiation with an installer.

## Tech stack for the project/ Technologies used

Front-end: React
Api back-end: Node.js
Apis: https://postcodes.io/ | EU Photovoltaic GIS system | Twilion SendGrid
Hosting: The React application is hosted on Netlify & the Node.js back-end is hosted on Heroku

> There are 2 github repositories for this project - https://github.com/johndck/solarPotentialApplication & https://github.com/johndck/solarBackend

## Features

Users search for their location using a postcode autocomplete service talking to the postcode.io api.

Once a location is found, the service queries postcode.io to obtain the longitude and latitude for the postcode.

The service then queries the EU Photovoltaic GIS system to pull in the Solar potential information.

For project purposes, there is a test email service using a post method talking to the twilio sendGrid api.

## Usage

Users simply type their postcode into the autocomplete postcode lookup service.

The service is currently found at: https://sunny-app.netlify.app/

Here is a screenshot of the homepage:

![Sunny App Landing Page](/public/assets/applicationScreenShot.jpg)
