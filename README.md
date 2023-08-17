---

# Todo Application

Angular, Bootstrap, and the Observer Pattern were used to build this Todo Application. You are able to add and remove items from a to-do list using the application.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Assumptions and Decisions](#assumptions-and-decisions)

## Getting Started

### Prerequisites

Make sure you have the following prerequisites before you start:

- npm and Node.js must be set up on your computer.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone git@gitlab.com:a_mohit/todo-application-angular.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-application-angular
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the development server:

   ```bash
   ng serve
   ```

2. To access the application, open your web browser and go to 'http://localhost:4200'.

3. To add tasks to the task list, use the input area. To add the job, either click the "Add" button or press Enter.

4. To remove a task from the list, click the "Delete" button next to list item.

## Testing

In order to guarantee the application's functionality, unit tests have been added.

1. Run the unit tests:

   ```bash
   ng test
   ```

   The tests will be run by the Karma test runner when this command is executed. The test results will be displayed on the terminal.

## Assumptions and Decisions

The following expectations and choices were made during the development of the Todo application:

- The application's modular and component-based architecture uses Angular as the frontend framework.
- The styling for a responsive user interface is done using the Bootstrap framework.
- RXJS is used to manage async calls, like subscribing to the task list updates.
- The task lists are stored in the browsers memory. They do not be saved between browser sessions. Operations related to Todo lists are managed by a service called (`TodoService`).
- The application was developed to serve as an easy example of adding and removing tasks. This project does not provide complex features like modifying tasks or task categories.
- By using Jasmine & Karma, unit testes are written to maintain the correct functionalities without breaking.

---
