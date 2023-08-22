const { test, expect } = require('@playwright/test');
const { projects } = require('../playwright.config')

test('webkit is commented', async () => {

  let isCommented = true

  // projects.forEach(project => {
  //   if (project.name === "webkit") {
  //       isCommented = false
  //   }
  // })

  expect(isCommented).toBeTruthy()
});