### API To Scan Twitter for Keywords

### Twitter API Scan - Summary
+ This was completed at part of a code challenge.
+ The app should use HTTP Get to access Twitter API for tweets with specific keywords.
+ Hourly, the app should aggregate, count and store the tweets in semi-persistent storage.
+ The app should use Post to update the hourly count to a specific endpoint.
+ It is expected that development follows TDD with unit-testing.
+ Total time spent on this should not exceed four hours.

### How This Works
+ Index.js is the entry point for the program.
+ Active folders include lib, routes and test.
+ Server.js represents the server and requires the middleware in routes.
+ scan_routes.js leverages HTTP methods for Get and Post.
+ aggregate.js addresses the counting, hourly timer and local storage component.
+ handle_error.js was created to handle server-side call back errors.
+ scan_test.js tests the HTTP methods using mocha and chai.
+ aggregate_test.js is a placeholder to test the counting and storage functionality.
+ I spent 4.5 hours on this project.
