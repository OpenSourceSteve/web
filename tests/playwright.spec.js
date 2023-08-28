const { test, expect } = require('@playwright/test');
const { projects } = require('../playwright.config')

test('webkit is commented', async () => {

  let isWebkitCommented = true

  projects.forEach(project => {
    if (project.name === "webkit") {
      isWebkitCommented = false
    }
  })

  expect(isWebkitCommented).toBeTruthy()
});

test('firefox is NOT commented', async () => {

  let isFirefoxCommented = true

  projects.forEach(project => {
    if (project.name === "firefox") {
      isFirefoxCommented = false
    }
  })

  expect(isFirefoxCommented).toBeFalsy()
});