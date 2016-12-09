

A client would like you to build a simple painting app.

# MVP

When a user visits the site they should see
  - the text "Paint me"
  - a series of colored boxes
  - a grid
  - a button that says 'Clear'

When the user clicks a colored box and clicks on a square in the grid
  - the square should change to that color

When the user has colored some boxes and clicks clear
  - the grid's color should return to white

![](assets/asset1.png?raw=true)

# 💡Feature requests

> The user would like to change the size of their grid

When a user clicks 'new grid' they should see
  - inputs for height and width
  - a 'Create' button

When a user enters a height (3) and width (4) and hits 'Create'
  - the old grid should replaced with a new grid
  - the grid should be 3 boxes high and 4 boxes wide

🚀 The user would like to be able to draw lines.

When a user clicks a 'line' icon they should switch to 'line-mode'
When a user is in line-mode and clicks two boxes
  - the boxes in between should be colored

# Resources
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- https://developer.mozilla.org/en-US/docs/Web/Events/mouseover
