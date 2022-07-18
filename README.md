# Welcome to example test framework!

## Executing
Tests are placed in `cypresseducation/cypress/e2e/` folder. To run tests, navigate to `cypresseducation/cypress/` and execute:
```
npm cypress run
```
or
```
npm cypress open
```
> To run tests you have to install Node.js and cypress.

## Framework structure

# Pages

In this folder we create class for every page we are going to work with, idea is simple - every page has pretty same structure, so we can create common methods for base elements (f.e. headers, popups) in the base class and inherit it into other page classes. At the same moment every page has its own methods for elements in it.

# Locators

This file consists of classes with xpaths and locators to every element on every page, it is usefull to do because if path changes, we don't need to change it everywhere, we can just change it in this file.

# Other folders

Other folders are common for all cypress projects, main thing to know - *support* folder, in this folder we keep functions that we are going to use in every other file in project, for example fucntions to run before test starts (setup).
