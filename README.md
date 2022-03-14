## Building a bot to sign up for gym classes with Node & Puppeteer

A beginner’s guide to building Node apps and automating tedious tasks with Express and Puppeteer.

This article is a little showcase for the capabilities of Puppeteer and a tutorial how to quickly implement it in a Node app. It’s based on a problem I had the other day when trying to sign up for a class in my local gym.

We will use Node, Express, Nodemon and Puppeteer to build a simple script to automatically sign up for gym classes 24 hours before; just the moment the registration is unlocked. This will guarantee us a slot on the limited list of participants… and a slightly unfair advantage over others. This guide requires a working installation of Node and NPM on your machine.

The problem statement: Ever since Covid-19 hit the gyms, slots for my favourite classes were reduced to a limited number of participants. My gym’s web app allows members to sign up for classes 24 hours ahead of start. Some of the classes are so beloved; mere seconds after their signup unlocks, they’re already filled up.

Signups are hidden behind a login-wall and then listed in a huge table. Unfortunately, we cannot extract the API calls and authentication tokens and there are no specific URLs for each individual class. That’s why we will pretend to be a regular Chrome user via Puppeteer.

What is Puppeteer? Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.

Read the rest of the tutorial here: https://samihamed.medium.com/building-an-automated-bot-to-sign-up-for-gym-classes-with-node-puppeteer-b812ea4a859b