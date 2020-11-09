# CSS layouts

## Story

Your friend Peter has no clue about CSS layouts and wants some help in his homework.
He must use different CSS layouts in a html page and asks you to help him out.
Peter is a good friend of you so you decided to make a template about the different utilities in CSS for making layouts.

## What are you going to learn?

- CSS positioning
- CSS floating
- CSS flexbox
- CSS grid

## Tasks

1. Create a navigation bar template. Make a `div` element that stays at the top of the window wherever you scroll. Make sure that nothing slides behind the element on top of the page. Create an `h1` with the content `Layouts` and make it centered in the HTML element.
    - There is a `div` tag in the HTML file containing an `h1` tag
    - The `div` tag stays on top even when scrolling down the page
    - There is no element in the top of the page that is covered by the element
    - The `h1` display the text `Layouts`
    - The `Layouts` text is presented on the middle

2. You want to show that floating can also be used for simple element positioning. Create an `img` tag in a `div` that wraps text around it. Use floating to create a 2x2 table with buttons.
    - There is a `div` tag that contains an `img`, a `p` and 4 `button` tags
    - The image wraps the text in the `p` tag
    - 2 buttons float to the left below each other
    - 2 buttons float to the right below each other

3. Create a template for a login form using the CSS flexbox. The login form's container contains 2 input field and a submit button.
    - There is a `form` tag containing 2 input field and a button
    - The container's `display` property is `flex`
    - The input fields and the button is placed below each other in the middle of the container
    - There is equal space between the container's children elements

4. CSS grid is a powerful utility that you can work with. Make an example of his simple usage with colored boxes. Make a container and place 4 `div` element in it using CSS grid.
    - There is a `div` tag that functions as a grid
    - The `div` tag has 4 `div` children with different colors
    - The grid has 5 explicit row, each `70px` high
    - The grid has 5 explicit columns and spans the window width
    - The first child span the entire grid width
    - The second child is 3 row high and span 2 width
    - The third child start at the last row and span the entire width
    - The fourth child fill up the rest of the grid cells

## General requirements

None

## Hints

- If you change something in a CSS file, you can see the changes by hard refresh the page (Windows/Linux: `Ctrl+F5`/`Ctrl+Shift+R`, Mac: `Cmd+Shift+R`)
- If you don't change it, the default positioning of an HTML element is based on its parent
- If you need text to work with use the `lorem ipsum` in the background material section

## Starting your project



## Background materials

- <i class="far fa-exclamation"></i> [Debugging CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Debugging_CSS)
- <i class="far fa-exclamation"></i> [Positioning documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
- <i class="far fa-exclamation"></i> [Floating documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Floats)
- <i class="far fa-exclamation"></i> [Flexbox documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- <i class="far fa-exclamation"></i> [Flexbox tutorial](https://flexbox.io/)
- <i class="far fa-video"></i> [How to use flexbox](https://www.youtube.com/watch?v=Vj7NZ6FiQvo&list=PLu8EoSxDXHP7xj_y6NIAhy0wuCd4uVdid) (you just need the Tutorial 2-9)
- <i class="far fa-exclamation"></i> [Grid documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
- <i class="far fa-exclamation"></i> [Grid tutorial](https://cssgrid.io/)
- <i class="far fa-video"></i> [CSS grid fundamentals](https://www.youtube.com/watch?v=T-slCsOrLcc&list=PLu8EoSxDXHP5CIFvt9-ze3IngcdAc2xKG) (you just need the Tutorial 3-11)
- <i class="far fa-book-open"></i> [Multi-column layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- <i class="far fa-candy-cane"></i> [Layout tutorial from nothing to flexbox](https://learnlayout.com/)
- <i class="far fa-exclamation"></i> [CSS basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- <i class="far fa-book-open"></i> [CSS box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- <i class="far fa-book-open"></i> [Which unit do I need to use?](https://alligator.io/css/css-units-explained/)
- <i class="far fa-candy-cane"></i> [Matching colors](https://colorsinspo.com/)
- <i class="far fa-candy-cane"></i> [Website design tutorial from 0](https://www.geeksforgeeks.org/introduction-to-html-css-learn-to-design-your-first-website-in-just-1-week/?ref=lbp)
