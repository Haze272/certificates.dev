---
difficulty: 2
training: true
chapter: "Chapter 9: Challenge roundup"
tags: angular, bug fixing
---

# Car Configurator: Bug Fixes

# Challenge Description

Our application is now completed, but we identified a couple of bugs in it.

Bug #1: If the user creates a Cybertruck config and selects "tow hitch" as an option,
then the option remains active if the user switches to a different model.
Here is an example where Model 3 has a tow hitch package, which shouldn't be possible:

![bug1.png](https://images.certificates.dev/roundup-4-bug1.png)

Bug #2: After selecting a new model, another bug is present on step 2. Step 3 is clickable before selecting a car config:

![bug2.png](https://images.certificates.dev/roundup-4-bug2.png)

Bug #3: When going back to step 1, the current car model and color do not show as selected. Here Cybertruck should be selected with the right color:

![bug3.png](https://images.certificates.dev/roundup-4-bug3.png)

## Requirements

- Fix the three bugs described above. Selecting a new model should properly reset all configs and colors associated to the previous model.
- Ensure step 3 is only enabled when a config is selected in step 2.

## Other Considerations

- If you see the `data-test` attribute anywhere in the boilerplate don't remove it.

## Example of Fixed Application

This is an example of what the functionality should look like for the completed exercise.

![Finished app in this challenge](https://images.certificates.dev/roundup-4-screenshot.gif)
