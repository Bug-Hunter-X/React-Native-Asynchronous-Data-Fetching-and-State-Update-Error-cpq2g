# React Native Asynchronous Data Fetching and State Update Error

This repository demonstrates a common error in React Native applications: attempting to access state properties before data has been fetched and the state updated asynchronously.

## The Problem

When fetching data from an API or other asynchronous source, there's a period of time between initiating the fetch and receiving the data. If your component tries to access and use this data before it's available, a runtime error will occur (e.g., `TypeError: Cannot read properties of null (reading 'name')`).

## The Solution

The solution involves conditional rendering or using optional chaining to safely access the data after the state update is complete.  The provided solution demonstrates both approaches.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app on a simulator or device.
4. Observe the error message (in the error case).
5. Switch to the solution to see how to avoid the error.
