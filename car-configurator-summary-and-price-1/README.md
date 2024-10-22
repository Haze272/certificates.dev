---
difficulty: 2
training: true
chapter: "Chapter 9: Challenge roundup"
tags: angular
---

# Car Configurator: Summary and Price

# Challenge Description

The app you have to update is a simplified version of https://www.tesla.com/modelx/design.
In this challenge, we focus on displaying a recap of the total cost of the selected car model and options.

## Requirements

- Update the router config to add a route to http://localhost:4200/step3 that renders the pre-generated `step3.component`.
- Disallow step 3 route navigation as long as car and color aren't selected on step 1 and config is selected in step 2.
- Complete `configurator.service` to compute the car's total price using a computed Signal.
- Complete the `step3.component` to display the right information: Cost of every chosen option (color, config, yoke, tow hitch, etc.) in properly formatted USD prices as illustrated below, as well as the total cost.
- The user should be able to go back to step 1 or 2 and change the configuration, then come back to step 3 to see the updated cost.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.
- The project has `mini.css` as a dependency for basic styling.

## Example of Finished Application

This is an example of what the functionality should look like for the completed exercise. If you’d like to mimic this style, feel free to do so, but it is not required.

![Finished app in this challenge](https://images.certificates.dev/roundup-3-screenshot.gif)
