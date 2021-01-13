# poc-microfrontend-with-iframes

## Description

This repository contains a proof of concept about the implementation of an application with microfrontends architecture using iframes.

## Getting Started

The application builded in this POC is an main app that simulate a portal that execute other apps

The main app can be called the orchestator app because him responsability is the execute other apps and comunicate with each other.

The small apps can be called smart apps.    


### Code Organization


- **Main**: This folder contains the orchestator app (this app is builded with Angular)

- **Smart-a**: This is the one of the smart apps that the main portal executes (this app is builted with react)

- **Smart-b**: This is the one of the smart apps that the main portal executes (this app is builted with vue)  


## Authors

- [Iván Sánchez Díaz](https://github.com/isanchezd1988)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details






