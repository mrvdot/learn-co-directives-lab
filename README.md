# Angular Directives

## Setup

You'll need the test runner [http://karma-runner.github.io/0.13/index.html](karma) to run the tests, as well as the bower dependencies. Before starting, run `npm install -g karma && bower install` in the directory where you cloned this repository. You can then use `karma start` to run the tests which will continously watch the directory and re-run the tests anytime code changes.

## Description

The goal of this lab is to practice using built-in Angular directives to dynamically display multiple types of data in differing ways. By the end you'll be able to iterate over both objects and arrays, dynamically set classes based on properties of individual elements within those collections, conditionally display a subset of those elements, as well as respond to user input via event directives.

## Instructions

Inside `js/app.js` there are the shells for five directives, each with all the necessary properties setup, aside from the template. To pass the tests, fill out the template portions with the necessary HTML and directives to satisfy the various tests. 