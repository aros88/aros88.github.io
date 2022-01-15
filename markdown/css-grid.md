<style>
  .highlight {
    background: lightcoral;
    color: white;
    border-radius: 0.2rem;
    padding: 0.2rem;
  }

  .post__grid__backdrop {
    background: lightgrey;
    opacity: 0.5;
    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .figure {
    display: flex;
  }

  .figure figcaption {
    margin: 0.5rem;
    text-align: center;
  }

  .figure img {
    width: 100%;
    display: inline-block;
    margin: 0 auto;
  }

  .post__grid__example-flex-container {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;
  }

  .post__grid__example-main-container {
    position: relative;
    width: 75%;
    margin: 1rem auto;
    padding: 1rem;
    text-align: left;
  }
  .post__grid__example-main-inline-container {
    position: relative;
    width: 75%;
    margin: 1rem auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    text-align: left;
    margin: 0;
  }
  .post__grid__example-main-inline-container--width-50 {
    width: 50%;
  }

  .post__grid__example-main-container > h1,
  .post__grid__example-main-inline-container > h1 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    padding: 0;
  }

  .post__grid__example-grid-container {
    display: grid;
    border: 1px solid black;
    grid-template-rows: 4rem;
    grid-template-columns: 1fr;
  }

  .post__grid__example-main-container-margin-right-1rem {
    margin-right: 1rem;
  }
  .post__grid__example-grid-container--row-gap-1rem {
    row-gap: 0.5rem;
  }
  .post__grid__example-grid-container--column-gap-1rem {
    column-gap: 0.5rem;
  }
  .post__grid__example-grid-container--height-15rem {
    height: 15rem;
  }
  .post__grid__example-grid-container--align-items-center {
    align-items: center;
  }
  .post__grid__example-grid-container--fit-content {
    grid-template-columns: repeat(4, fit-content(15rem));
  }
  .post__grid__example-grid-container--2-equal-columns {
    grid-template-columns: repeat(2, 4rem);
  }
  .post__grid__example-grid-container--3-equal-columns-4rem {
    grid-template-columns: repeat(3, 4rem);
  }
  .post__grid__example-grid-container--4-equal-columns-4rem {
    grid-template-columns: repeat(4, 4rem);
  }
  .post__grid__example-grid-container--4-equal-columns {
    grid-template-columns: repeat(4, 1fr);
  }
  .post__grid__example-grid-container--2-equal-rows {
    grid-template-rows: repeat(2, 4rem);
  }
  .post__grid__example-grid-container--3-equal-rows {
    grid-template-rows: repeat(3, 1fr);
  }
  .post__grid__example-grid-container--3-equal-rows-4rem {
    grid-template-rows: repeat(3, 4rem);
  }
  .post__grid__example-grid-container--grid-template-areas {
    grid-template-areas: "item1 item1 item2 item2"
                         "item1 item1 item4 item4"
                         "item3 item3 item3 .";
  }
  .post__grid__example-grid-container--grid-auto-flow-column {
    grid-auto-flow: column;
  }
  .post__grid__example-grid-container--grid-auto-flow-row-dense {
    grid-auto-flow: row dense;
  }
  .post__grid__example-grid-container--grid-auto-rows {
    grid-auto-rows: 1rem;
  }
  .post__grid__example-grid-container--grid-auto-columns {
    grid-auto-columns: 1rem;
  }
  .post__grid__example-grid-container--grid-row-column {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 4;
  }
  .post__grid__example-grid-container--justify-content-start {
    justify-content: start;
  }
  .post__grid__example-grid-container--justify-content-end {
    justify-content: end;
  }
  .post__grid__example-grid-container--justify-content-center {
    justify-content: center;
  }
  .post__grid__example-grid-container--justify-content-stretch {
    justify-content: stretch;
  }
  .post__grid__example-grid-container--justify-content-space-around {
    justify-content: space-around;
  }
  .post__grid__example-grid-container--justify-content-space-between {
    justify-content: space-between;
  }
  .post__grid__example-grid-container--justify-content-space-evenly {
    justify-content: space-evenly;
  }
  .post__grid__example-grid-container--justify-items-start {
    justify-items: start;
  }
  .post__grid__example-grid-container--justify-items-end {
    justify-items: end;
  }
  .post__grid__example-grid-container--justify-items-center {
    justify-items: center;
  }
  .post__grid__example-grid-container--justify-items-stretch {
    justify-items: stretch;
  }
  .post__grid__example-grid-container--align-items-start {
    align-items: start;
  }
  .post__grid__example-grid-container--align-items-end {
    align-items: end;
  }
  .post__grid__example-grid-container--align-items-center {
    align-items: center;
  }
  .post__grid__example-grid-container--align-items-stretch {
    align-items: stretch;
  }
  .post__grid__example-grid-container--align-content-start {
    align-content: start;
  }
  .post__grid__example-grid-container--align-content-end {
    align-content: end;
  }
  .post__grid__example-grid-container--align-content-center {
    align-content: center;
  }
  .post__grid__example-grid-container--align-content-stretch {
    align-content: stretch;
  }
  .post__grid__example-grid-container--align-content-space-around {
    align-content: space-around;
  }
  .post__grid__example-grid-container--align-content-space-between {
    align-content: space-between;
  }
  .post__grid__example-grid-container--align-content-space-evenly {
    align-content: space-evenly;
  }

  .post__grid__example-grid-container > h1 {
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
  }

  .post__grid__example-grid-container--display-inline-grid {
    display: inline-grid;
  }

  .post__grid__example-grid-item {
    background: #FFAD62;
    border: 1px solid black;
    color: black;
  }
  .post__grid__example-grid-item--grid-area-item1 {
    grid-area: item1;
  }
  .post__grid__example-grid-item--grid-area-item2 {
    grid-area: item2;
  }
  .post__grid__example-grid-item--grid-area-item3 {
    grid-area: item3;
  }
  .post__grid__example-grid-item--grid-area-item4 {
    grid-area: item4;
  }
  .post__grid__example-grid-item--grid-row-span-2 {
    grid-row: span 2;
  }
  .post__grid__example-grid-item--grid-column-span-2 {
    grid-column: span 2;
  }
  .post__grid__example-grid-item--grid-item-height-2rem {
    height: 2rem;
  }
  .post__grid__example-grid-item--grid-item-width-2rem {
    width: 2rem;
  }
  .post__grid__example-grid-item--grid-item-justify-self-start {
    justify-self: start;
  }
  .post__grid__example-grid-item--grid-item-justify-self-end {
    justify-self: end;
  }
  .post__grid__example-grid-item--grid-item-justify-self-center {
    justify-self: center;
  }
  .post__grid__example-grid-item--grid-item-justify-self-stretch {
    justify-self: stretch;
  }
  .post__grid__example-grid-item--grid-item-align-self-start {
    align-self: start;
  }
  .post__grid__example-grid-item--grid-item-align-self-end {
    align-self: end;
  }
  .post__grid__example-grid-item--grid-item-align-self-center {
    align-self: center;
  }
  .post__grid__example-grid-item--grid-item-align-self-stretch {
    align-self: stretch;
  }

  .post__grid__example-grid-item > h1 {
    font-size: 1rem;
    margin: 1rem;
  }

  @media (max-width: 950px) {
    .post__grid__example-main-container,
    .post__grid__example-main-inline-container {
      width: 100%;
    }

    .post__grid__example-main-inline-container+.post__grid__example-main-inline-container  {
      margin-top: 1rem;
    }

    .post__grid__example-flex-container {
      display: block;
    }

    .figure {
      display: block;
    }
  }
</style>

# Understanding the CSS Grid

## Table of Contents

- [Introduction](#introduction)
- [What is the CSS Grid?](#what-is-grid)
- [Creating a grid](#creating-a-grid)
  - [Grid vs inline-grid](#grid-vs-inline-grid)
  - [grid-template-rows / grid-template-columns](#grid-template)
    - [Helper functions](#helper-functions)
  - [grid-template-areas](#grid-template-areas)
  - [row-gap / column-gap](#grid-gap)
  - [grid-auto-rows / grid-auto-column](#grid-auto)
  - [grid-auto-flow](#grid-auto-flow)
- [Positioning items within the grid](#position-in-grid)
  - [grid-row-start / grid-row-end / grid-column-start / grid-column-end](#grid-row-and-column)
  - [grid-area](#grid-area)
- [Positioning items within their grid cell](#position-in-cell)
  - [justify-items](#justify-items)
  - [justify-content](#justify-content)
  - [justify-self](#justify-self)
  - [align-items](#align-items)
  - [align-content](#align-content)
  - [align-self](#align-self)
- [Shorthand properties](#shorthand-properties)
- [Conclusion](#conclusion)

<div id="introduction"></div>

## Introduction

The idea behind this post is to try to write a detailed description of the CSS Grid feature.
Hopefully it should be helpful for CSS beginners and experts as well.

Let me know if it was helpful for you!


<div id="what-is-grid"></div>

## What is the CSS Grid?

The CSS Grid or CSS Grid Layout is a two dimensional layout system that splits the website into rows and columns very much like HTML tables do, however, it provides many more possibilities and fine tuned control over the overall layout of the site.

Here is a good explanation taken from the W3C website:

> "Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements." [W3C](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

The grid consists of three major components: columns, gutters and margins.

Columns are defined as vertical sections that span the height of a page. It is common to see layouts consisting of 12 or 16 columns, while others may have only 3 columns. It depends on the website's needs. Gutters are the negative space between each column. Important to make the separation between columns so that the grid does not become a single element. Margins appear on the left and right sides of the grid. See [Figure 1](#figure-1) for more details.

<div class="figure" id="figure-1">
  <figure>
    <img src="/images/grid.png" />
    <figcaption>Figure 1. Grid structure. Taken from <a href="https://www.codecademy.com/learn/paths/front-end-engineer-career-path" target="_blank">Codecademy Front-End Engineer Career Path</a>.</figcaotion>
  </figure>
</div>


<div id="creating-a-grid"></div>

## Creating a grid

To create a grid, the property <code>**display: grid**</code> needs to be added to the container element along with <code>**grid-template-rows**</code> and <code>**grid-template-columns**</code> which are addressed in this section [grid-template-rows / grid-template-columns](#grid-template).
For example, given the following HTML code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container" id="grid-container"&gt;
    &lt;!-- add html code --&gt;
  &lt;/div&gt;
</pre>

To turn the **<code>div</code>** element with the class **<code>.grid-container</code>** into a grid container, the following CSS would have to be added:

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
  }
</pre>

The initial step in creating the grid has been taken.


<div id="grid-vs-inline-grid"></div>

### Grid vs inline-grid

The <code>**display: grid**</code> property will create a block level grid, while <code>**display: inline-grid**</code> will generate an inline level grid.
For example:

<pre class="prettyprint lang-html">
  &lt;div&gt;
    &lt;div class="grid-container"&gt;
      &lt;h1&gt;Grid container&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div class="grid-container"&gt;
      &lt;h1&gt;Grid container&lt;/h1&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
  }
</pre>

Would give this result:

<div class="post__grid__example-main-container">
  <h1><code>display: grid</code></h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--align-items-center">
    <h1>Grid container</h1>
  </div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--align-items-center">
    <h1>Grid container</h1>
  </div>
</div>

For cases where both grids have to be placed next to each other, there is the option to add <code>**display: inline-grid**</code> to the grid container CSS declaration. Using the same HTML code snippet shown from the previous example:

<pre class="prettyprint lang-css">
  .grid-container {
    display: inline-grid;
    border: 1px solid black;
  }
</pre>

This would yield the following result:

<div class="post__grid__example-main-container">
  <h1><code>display: inline-grid</code></h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--display-inline-grid post__grid__example-grid-container--align-items-center">
    <h1>Grid container</h1>
  </div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--display-inline-grid post__grid__example-grid-container--align-items-center">
    <h1>Grid container</h1>
  </div>
</div>


<div id="grid-template"></div>

### grid-template-rows / grid-template-columns

Both properties are used to specify the number and size of rows and columns respectively. They both have the same structure and accept the same values, which is why they are addressed together in this section.

They accept a space separated list of values. These represent the track size and the space between them represents the grid line. It is possible to set an arbitrary name for the grid line, this will allow to reference it more easily when assigning grid items to the grid.

Possible values:
- <code>**&lt;track-size&gt;**</code>: size of the row or column depending on which property is being specified. It can be a length (<code>px</code>, <code>em</code>, <code>rem</code>, etc...), a percentage, the value <code>auto</code> or a fraction of the free space in the grid (<code>fr</code>).
- <code>**&lt;line-name&gt;**</code>: arbitrary name given to the grid line, a grid line can have more than one name. It is optional.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    height: 35rem;
    width: 47.2rem;
    margin: 0;
    grid-template-rows: [first-row] auto [second-row] 5rem [third-row] 8rem [last-row];
    grid-template-columns: [first] 150px [second] 100px [third start] auto [fourth end] 100px [fifth] 150px [sixth];
  }
</pre>

Would create the following grid (can be verified by using the chrome dev tools):

<div class="figure" id="figure-2">
  <figure>
    <img src="/images/css-grid.png" />
    <figcaption>Figure 2. CSS grid created with <code>grid-template-rows</code> and <code>grid-template-columns</code>.</figcaotion>
  </figure>
</div>

Please note how in [Figure 2](#figure-2) there are column lines with multiple names, e.g. the third line has a name of <code>third</code> and of <code>start</code>.

<span class="highlight">The value <code>auto</code> will assign the remaining free space of the grid to all rows or columns that have the value specified, if they are more than one, it will divide the space and assign the result to each one.</span>

Items will be placed in the grid in order from left to right and from top to bottom unless specified otherwise.


<div id="helper-functions"></div>

#### Helper functions

There are several functions that can help when defining the structure of the grid. Whether it is to reduce the amount of code that needs to be written, or to help specify boundaries in sizes for the rows and columns. These functions are a very useful tool to know when working with grids.

- <code>**repeat**</code>: very useful to create grids quickly. It allows to specify multiple repeating values for the <code>**grid-template-rows**</code> and <code>**grid-template-columns**</code> properties. For example, the following code will create a grid with 4 rows each taking 25% of the overall grid width and 4 columns with <code>**8rem**</code>, <code>**4rem**</code> and 2 of <code>**1rem**</code> each:

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    grid-template-rows: repeat(4, 25%);
    grid-template-columns: 5rem 4rem repeat(2, 1rem);
  }
</pre>

- <code>**minmax**</code>: useful to set boundaries for the columns or rows of the grid. The functions can be nested. For example, the following code will create 4 rows each with a minimum width of <code>50px</code> and a maximum of <code>25%</code> and a column with a minimum width of <code>1rem</code> and a maximum of <code>2rem</code>.

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    grid-template-rows: repeat(4, minmax(50px, 25%));
    grid-template-columns: minmax(1rem, 2rem);
  }
</pre>

- <code>**auto-fill / auto-fit**</code>: it is not really a function, it is a value that can be specified like the <code>**auto**</code> value. For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(1rem, 4rem));
    grid-auto-rows: 4rem;
    grid-gap: 0.5rem;
    background: lightgrey;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }
</pre>

<div class="figure">
  <figure id="figure-3">
    <img src="/images/grid-items-auto-fill-img.png" />
    <figcaption>Figure 3. CSS Grid with auto-fill. Can be seen how it fills the entire row with grid items.</figcaption>
  </figure>
  <figure id="figure-4">
    <img src="/images/grid-items-auto-fit-img.png" />
    <figcaption>Figure 4. CSS Grid with auto-fit. Can be seen how it only creates as many grid items as necessary.</figcaption>
  </figure>
</div>

> The values will make the grid items jump into a new row when they reach the end of the viewport. This allows to create dynamically generated columns. In order for the values to work as spected the <code>**grid-auto-rows**</code> property will have to be specified as well (more on this on the [grid-auto-rows / grid-auto-column](#grid-auto) section). For example, using the same HTML code previously declared:

> There are CSS properties that will be explained in later sections of this post.

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: 4rem;
    grid-template-columns: repeat(auto-fill, minmax(1rem, 4rem));
    grid-auto-rows: 4rem;
    grid-gap: 0.5rem;
    justify-content: center;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }
</pre>

<div class="figure">
  <figure id="figure-5">
    <img src="/images/grid-items-auto-fill-behavior.gif" />
    <figcaption>Figure 5. CSS grid with <code>auto-fill</code> for the columns.</figcaption>
  </figure>
  <figure id="figure-6">
    <img src="/images/grid-items-auto-fit-behavior.gif" />
    <figcaption>Figure 6. CSS grid with <code>auto-fit</code> for the columns.</figcaption>
  </figure>
</div>

> <span class="highlight">Please note how the grid items are centered with the <code>**auto-fit**</code> value. While they start on the left side with the <code>**auto-fill**</code> value. It is important to know that the <code>**auto-fit**</code> value will not center the grid items unless <code>**justify-content: center**</code> is specified, while the <code>**auto-fill**</code> value will set the items to the left regardless of <code>**justify-content**</code>.</span>

> More on the <code>**justify-content**</code> property can be found in the [justify-content](#justify-content) section.


- <code>**fit-content**</code>: will try to set the size of the item to fit the content, i.e. if it requires more space, it will get it, but only as much as it needs, not more than the maximum specified as a parameter to the function. The difference with the <code>**auto**</code> value, is that, <code>**fit-content**</code> will not take more space than needed while <code>**auto**</code> will take as much space as it is available. For example, given the following code, where <code>**fit-content**</code> is given a max value of <code>**15rem**</code>:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;content&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;item 2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;item 3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;more content&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: 4rem;
    grid-template-columns: repeat(4, fit-content(15rem));
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }

  .grid-item > h1 {
    font-size: 1rem;
    margin: 1rem;
  }
</pre>

> Would result in the following:

<div class="post__grid__example-main-container">
  <h1>fit-content</h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--fit-content">
    <div class="post__grid__example-grid-item"><h1>container</h1></div>
    <div class="post__grid__example-grid-item"><h1>item 2</h1></div>
    <div class="post__grid__example-grid-item"><h1>item 3</h1></div>
    <div class="post__grid__example-grid-item"><h1>more content</h1></div>
  </div>
</div>

> It can be appreciated in the previous example that the items have a width as long as their content requires it, always within the boundaries specified of less than <code>**15rem**</code>.

> To show the effects of the <code>**fit-content**</code> function, the following example shows how the previous one would look in case that <code>**fit-content**</code> is replaced with a regular value:

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: 4rem;
    grid-template-columns: repeat(4, 1fr);
  }
</pre>

<div class="post__grid__example-main-container">
  <h1>without fit-content</h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns">
    <div class="post__grid__example-grid-item"><h1>container</h1></div>
    <div class="post__grid__example-grid-item"><h1>item 2</h1></div>
    <div class="post__grid__example-grid-item"><h1>item 3</h1></div>
    <div class="post__grid__example-grid-item"><h1>more content</h1></div>
  </div>
</div>

> In the previous case, the grid tries to create 4 columns of equal size and tries to adjust the content to fit in them.


<div id="grid-template-areas"></div>

### grid-template-areas

The property <code>**grid-template-areas**</code> allows to specify the grid layout defining names for each section. It accepts the following values:

- <code>**&lt;grid-area-name&gt;**</code>: the name of the grid area.
- <code>**.**</code>: a dot (.) signifies an empty cell.

With the grid names defined, it allows for the grid items to specify their position in a very simple way using the <code>[grid-area](#grid-area)</code> property.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    height: 15rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "item1 item1 item2 item2"
                         "item1 item1 item4 item4"
                         "item3 item3 item3 .";
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }

  .grid-item:nth-child(1) {
    grid-area: item1;
  }
  .grid-item:nth-child(2) {
    grid-area: item2;
  }
  .grid-item:nth-child(3) {
    grid-area: item3;
  }
  .grid-item:nth-child(4) {
    grid-area: item4;
  }

  .grid-item > h1 {
    font-size: 1rem;
    margin: 1rem;
  }
</pre>

Please note how in the previous CSS code snippet the strings defined in the property <code>**grid-template-areas**</code> are consistent with each other, i.e. they all have the same number of sections, all three lines have four sections. This is a requirement for the property to work correctly.

The previous code snippets will yield the following:

<div class="post__grid__example-main-container">
  <h1>grid-template-areas</h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns post__grid__example-grid-container--3-equal-rows post__grid__example-grid-container--grid-template-areas post__grid__example-grid-container--height-15rem">
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item1"><h1>1</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item2"><h1>2</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item3"><h1>3</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item4"><h1>4</h1></div>
  </div>
</div>

<span class="highlight">All areas defined must have a shape of a rectangle. Anything different would break the layout.</span>

<div id="grid-gap"></div>

### row-gap / column-gap

The properties are useful to create space between items of the grid. As their name suggest, they can add space between the rows with <code>**row-gap**</code> or between columns with <code>**column-gap**</code>.

Using the same code examples from the previous section, adding the respective properties:

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    height: 15rem;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "item1 item1 item2 item2"
                         "item1 item1 item4 item4"
                         "item3 item3 item3 .";
    row-gap: 1rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>row-gap: 1rem</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns post__grid__example-grid-container--3-equal-rows post__grid__example-grid-container--grid-template-areas post__grid__example-grid-container--height-15rem post__grid__example-grid-container--row-gap-1rem">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item1"><h1>1</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item2"><h1>2</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item3"><h1>3</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item4"><h1>4</h1></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>column-gap: 1rem</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns post__grid__example-grid-container--3-equal-rows post__grid__example-grid-container--grid-template-areas post__grid__example-grid-container--height-15rem post__grid__example-grid-container--column-gap-1rem">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item1"><h1>1</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item2"><h1>2</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item3"><h1>3</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item4"><h1>4</h1></div>
      </div>
    </div>
  </div>
</div>

There is a shorthand property that can combine the two. More about it at the [Shorthand properties](#shorthand-properties) section.


<div id="grid-auto"></div>

### grid-auto-rows / grid-auto-column

Both properties are used to specify the size of rows or columns that are added implicitly to the grid. There are two types of grid, the explicit and the implicit.
The explicit grid is defined by properties such as <code>**grid-template-rows**</code>, <code>**grid-template-columns**</code> and <code>**grid-template-areas**</code>
Here is a good definition regarding the *implicit grid*:

> "Implicit tracks get created when there are more grid items than cells in the grid or when a grid item is placed outside of the explicit grid". Taken from [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/).


Both accept the same values and have the same structure which is why they are addressed together. To specify the height of automatically added rows, the property <code>**grid-auto-rows**</code> can be used. To specify the width of automatically added columns, the property <code>**grid-auto-columns**</code> can be used.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;6&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;7&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;8&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-gap: 0.5rem;
    grid-template-rows: repeat(2, 4rem);
    grid-template-columns: repeat(2, minmax(1rem, 4rem));
    grid-auto-rows: 1rem;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>grid-auto-rows: 1rem</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--2-equal-columns post__grid__example-grid-container--2-equal-rows post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--column-gap-1rem post__grid__example-grid-container--grid-auto-rows">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>grid-auto-columns: 1rem</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--2-equal-columns post__grid__example-grid-container--2-equal-rows post__grid__example-grid-container--column-gap-1rem post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--grid-auto-flow-column">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
  </div>
</div>

When there are more grid items placed in the grid, than the amount of grid cells declared with the <code>**grid-template-rows**</code>, <code>**grid-template-columns**</code> and <code>**grid-template-areas**</code> properties, the grid will default to the sizes specified in the <code>**grid-auto-rows**</code> and <code>**grid-auto-columns**</code> properties.

It can be seen in the previous examples, that the last 4 items, have different sizes than the ones declared in the aforementioned properties, that is because the grid in the example has room for 4 items, so when eight are added the last 4 will have the size specified in the <code>**grid-template-rows**</code> property, i.e. a height of <code>**1rem**</code>. The same happens for the <code>**grid-template-columns**</code> which sets a width of <code>**1rem**</code>.

<div id="grid-auto-flow"></div>

### grid-auto-flow

Property that allows to set the order in which new implicit grid items are rendered. It specifies whether new elements should be added to rows or columns. In the previous section's example, it is possible to see how for the right side the <code>**grid-auto-flow**</code> property is set to <code>**column**</code>.

It accepts the following values:
- <code>**row**</code>: specifies that new elements should fill rows from left to right.
- <code>**column**</code>: specifies the new elements should fill columns from top to bottom.
- <code>**dense**</code>: the value invokes an algorithm that attempts to fill all holes in the grid. The value dense only changes the visual order of the grid items and might cause them to appear out of order.

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-gap: 0.5rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, minmax(1rem, 4rem));
    grid-auto-flow: row;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }

  .grid-item:nth-child(1) {
    grid-row: span 2;
  }
  .grid-item:nth-child(2) {
    grid-row: span 2;
  }
  .grid-item:nth-child(4) {
    grid-column: span 2;
  }

  .grid-item > h1 {
    font-size: 1rem;
    margin: 1rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>grid-auto-flow</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>row</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--column-gap-1rem post__grid__example-grid-container--grid-flow-rows">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-row-span-2"><h1>1</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-row-span-2"><h1>2</h1></div>
        <div class="post__grid__example-grid-item"><h1>3</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-column-span-2"><h1>4</h1></div>
        <div class="post__grid__example-grid-item"><h1>5</h1></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>row dense</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--column-gap-1rem post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--grid-auto-flow-row-dense">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-row-span-2"><h1>1</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-row-span-2"><h1>2</h1></div>
        <div class="post__grid__example-grid-item"><h1>3</h1></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-column-span-2"><h1>4</h1></div>
        <div class="post__grid__example-grid-item"><h1>5</h1></div>
      </div>
    </div>
  </div>
</div>

<span class="highlight">The value <code>**dense**</code> will override the default behavior of not taking any free space in the grid, and will try to position elements in a way to ensure that there are not empty spaces in the grid. Can cause accessibility errors, because the screen readers will read the elements as they are arranged in the DOM, so they might read a different order than what it is actually displayed because of the dense value.</span>


<div id="position-in-grid"></div>

## Positioning items within the grid


<div id="grid-row-and-column"></div>

### grid-row-start / grid-row-end / grid-column-start / grid-column-end

Properties that provide a way to position a grid item by referencing a specific grid line name. They allow the grid items to take more than one row or column. The properties that end with <code>**-start**</code> define the line where the item starts and the properties that end with <code>**-end**</code> define the line where the item ends.

They accept the following values:

- <code>**&lt;line&gt;**</code>: can be a number or a string to refer to a grid line.
- <code>**span &lt;number&gt;**</code>: useful to specify how many cells the item will take.
- <code>**span &lt;name&gt;**</code>: the item will span across until it reaches the specified grid name.
- <code>**auto**</code>: default placement.

<span class="highlight">Row grid lines and column grid lines start at 1 and end at a value that is 1 greater than the number of rows or columns the grid has. For example, if a grid has 5 rows, the grid row lines range from 1 to 6. If a grid has 8 rows, the grid row lines range from 1 to 9.</span>

If no <code>**grid-column-end/grid-row-end**</code> is declared, the item will span 1 track by default.

<span class="highlight">Grid items can overlap if they are explicitly declared to do so with the properties before mentioned. The grid tries to avoid this at all cost.</span>

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-gap: 0.5rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, minmax(1rem, 4rem));
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }

  .grid-item:nth-child(2) {
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: span 2;
  }

  .grid-item > h1 {
    font-size: 1rem;
    margin: 1rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--column-gap-1rem">
    <div class="post__grid__example-grid-item"><h1>1</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-container--grid-row-column"><h1>2</h1></div>
    <div class="post__grid__example-grid-item"><h1>3</h1></div>
    <div class="post__grid__example-grid-item"><h1>4</h1></div>
  </div>
</div>

There are two shorhand properties that can be used to specify both <code>**grid-row-start / grid-row-end**</code> and <code>**grid-column-start / grid-column-end**</code>. These are <code>**grid-row**</code> and <code>**grid-column**</code> respectively. There is more information about the shorthand properties in the [Shorthand properties](#shorthand-properties) section.



<div id="grid-area"></div>

### grid-area

The <code>**grid-area**</code> property can be used as a shorthand for specifying the values of the properties <code>**grid-row-start/grid-row-end/grid-column-start/grid-column-end**</code> or it can be used to specify a grid area defined in the <code>**grid-template-areas**</code> property.

Please refer to the example in the section <code>**[grid-template-areas](#grid-template-areas)**</code> to see a working example of the <code>**grid-area**</code> property.

As mentioned before it can be used as a shorthand:

<pre class="prettyprint lang-css">
  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
    /* grid-row-start / grid-column-start / grid-row-end / grid-column-end */
    grid-area: 2 / 2 / 4 / span 2
  }
</pre>


<div id="position-in-cell"></div>

## Positioning items within their grid cell


<div id="justify-items"></div>

### justify-items

The <code>**justify-items**</code> property positions grid items along the inline, row axis, i.e. <span class="highlight">it positions items within their grid cell</span> from left to right. The grid items must be smaller in size than their grid cell for the property to work correctly.

It accepts the following values:
- <code>**start**</code>: aligns items to the left of the grid area.
- <code>**end**</code>: aligns items to the right of the grid area.
- <code>**center**</code>: aligns grid items to the center of the grid area.
- <code>**stretch**</code>: stretches all items to fill the whole cell of the grid.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    justify-items: start;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
    width: 2rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>justify-items</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-start post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--justify-items-end post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-stretch post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
  </div>
</div>



<div id="justify-content"></div>

### justify-content

The <code>**justify-content**</code> property positions <span class="highlight">the entire grid</span> along the row axis, i.e. from left to right.

It accepts the following values:
- <code>**start**</code>: aligns the grid to the left of the grid area.
- <code>**end**</code>: aligns the grid to the right of the grid area.
- <code>**center**</code>: aligns the grid to the center of the grid area.
- <code>**stretch**</code>: stretches the grid items to increase the size of the grid to expand horizontally across the container
- <code>**space-around**</code>: includes equal amount of space on each side of the grid, resulting in double the amount of space between the columns.
- <code>**space-between**</code>: includes an equal amount of space between grid columns and no space at either end.
- <code>**space-evenly**</code>: places an even amount of space between grid columns and at either end.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    justify-content: start;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>justify-items</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-start">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--justify-content-end">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-stretch">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-around</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-space-around">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-between</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-space-between">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-evenly</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-space-evenly">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
  </div>
</div>


<div id="justify-self"></div>

### justify-self

The <code>**justify-self**</code> specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.

It accepts the following values:
- <code>**start**</code>: aligns an item to the left of the grid area.
- <code>**end**</code>: aligns an item to the right of the grid area.
- <code>**center**</code>: aligns an item to the center of the grid area.
- <code>**stretch**</code>: stretches an item to fill the whole cell of the grid.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    justify-content: center;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
    width: 2rem;
  }

  .grid-item:nth-child(2) {
    justify-self: end;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>justify-self</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem post__grid__example-grid-item--grid-item-justify-self-start"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--justify-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem post__grid__example-grid-item--grid-item-justify-self-end"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem post__grid__example-grid-item--grid-item-justify-self-center"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width- post__grid__example-grid-item--grid-item-justify-self-stretch"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-width-2rem"></div>
      </div>
    </div>
  </div>
</div>


<div id="align-items"></div>

### align-items

The <code>**align-items**</code> property positions grid items along the block or column axis, i.e. <span class="highlight">it positions items within their grid cell</span> from top to bottom. The grid items must be smaller in size than their grid cell for the property to work correctly.

It accepts the following values:
- <code>**start**</code>: aligns items to the top of the grid area.
- <code>**end**</code>: aligns items to the bottom of the grid area.
- <code>**center**</code>: aligns grid items to the center of the grid area.
- <code>**stretch**</code>: stretches all items to fill the whole cell of the grid.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    justify-items: start;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
    height: 2rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>align-items</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-items-start post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--align-items-end post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-items-center post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-items-stretch post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
  </div>
</div>



<div id="align-content"></div>

### align-content

The <code>**align-content**</code> property positions <span class="highlight">the entire grid</span> along the column axis, i.e. from top to bottom.

It accepts the following values:
- <code>**start**</code>: aligns the grid to the top of the grid area.
- <code>**end**</code>: aligns the grid to the bottom of the grid area.
- <code>**center**</code>: aligns the grid to the center of the grid area.
- <code>**stretch**</code>: stretches the grid items to increase the size of the grid to expand horizontally across the container.
- <code>**space-around**</code>: includes equal amount of space on each side of the grid, resulting in double the amount of space between the rows.
- <code>**space-between**</code>: includes an equal amount of space between grid rows and no space at either end.
- <code>**space-evenly**</code>: places an even amount of space between grid rows and at either end.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    align-content: start;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>align-content</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-start post__grid__example-grid-container--height-15rem
      post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns post__grid__example-grid-container--align-content-end post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-center post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-stretch post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-around</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-space-around post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-between</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-space-between post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>space-evenly</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--align-content-space-evenly post__grid__example-grid-container--height-15rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
        <div class="post__grid__example-grid-item"></div>
      </div>
    </div>
  </div>
</div>


<div id="align-self"></div>

### align-self

The <code>**align-self**</code> specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.

It accepts the following values:
- <code>**start**</code>: aligns an item to the top of the grid area.
- <code>**end**</code>: aligns an item to the bottom of the grid area.
- <code>**center**</code>: aligns an item to the center of the grid area.
- <code>**stretch**</code>: stretches an item to fill the whole cell of the grid.

For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div class="grid-container"&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
    &lt;div class="grid-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .grid-container {
    display: grid;
    border: 1px solid black;
    padding: 1rem;
    grid-template-rows: repeat(3, 4rem);
    grid-template-columns: repeat(3, 4rem);
    justify-content: center;
  }

  .grid-item {
    background: #FFAD62;
    border: 1px solid black;
    height: 2rem;
  }

  .grid-item:nth-child(2) {
    align-self: end;
  }
</pre>

<div class="post__grid__example-main-container">
  <div class="post__grid__backdrop"></div>
  <h1><code>justify-self</code></h1>
  <div class="post__grid__example-flex-container">
    <div class="post__grid__example-main-inline-container  post__grid__example-main-inline-container--width-50">
      <h1><code>start</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem post__grid__example-grid-item--grid-item-align-self-start"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>end</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem post__grid__example-grid-container--grid-auto-columns  post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem post__grid__example-grid-item--grid-item-align-self-end"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem  post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem post__grid__example-grid-item--grid-item-align-self-center"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
    <div class="post__grid__example-main-inline-container post__grid__example-main-inline-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__grid__example-grid-container post__grid__example-grid-container--3-equal-columns-4rem post__grid__example-grid-container--3-equal-rows-4rem  post__grid__example-grid-container--justify-content-center">
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height- post__grid__example-grid-item--grid-item-align-self-stretch"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
        <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-item-height-2rem"></div>
      </div>
    </div>
  </div>
</div>


<div id="shorthand-properties"></div>

## Shorthand properties

There are a few properties that can help reduce the amount of code that is written by accepting multiple values for other properties combined into one.

- <code>**grid-template**</code>: it is a property that combines <code>**grid-template-rows**</code> and the <code>**grid-template-columns**</code> into a single property declaration. For example:

<pre class="prettyprint lang-css">
  .grid-container {
    /* grid-template-rows: 10% 60% 200px / grid-template-columns: 20% 50% 200px */
    grid-template: 10% 60% 200px / 20% 50% 200px;
  }
</pre>

- <code>**gap**</code>: it is a property that combines <code>**row-gap**</code> and the <code>**column-gap**</code> into a single property declaration. For example, using the same code example from the <code>**[row-gap / column-gap](#grid-gap)**</code> section:

<pre class="prettyprint lang-css">
  .grid-container {
    /* row-gap: 1rem / column-gap: 1rem */
    gap: 1rem / 1rem;
  }
</pre>

<div class="post__grid__example-main-container">
  <h1><code>gap: 1rem / 1rem</code></h1>
  <div class="post__grid__backdrop"></div>
  <div class="post__grid__example-grid-container post__grid__example-grid-container--4-equal-columns post__grid__example-grid-container--3-equal-rows post__grid__example-grid-container--grid-template-areas post__grid__example-grid-container--height-15rem post__grid__example-grid-container--row-gap-1rem post__grid__example-grid-container--column-gap-1rem">
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item1"><h1>1</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item2"><h1>2</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item3"><h1>3</h1></div>
    <div class="post__grid__example-grid-item post__grid__example-grid-item--grid-area-item4"><h1>4</h1></div>
  </div>
</div>

- <code>**grid-row**</code>: it is a property that combines <code>**grid-row-start**</code> and the <code>**grid-row-end**</code> into a single property declaration. For example:

<pre class="prettyprint lang-css">
  .grid-item {
    /* start / end */
    grid-row: 2 / span 2;
  }
</pre>

- <code>**grid-column**</code>: it is a property that combines <code>**grid-column-start**</code> and the <code>**grid-column-end**</code> into a single property declaration. For example:

<pre class="prettyprint lang-css">
  .grid-item {
    /* start / end */
    grid-column: 2 / span 2;
  }
</pre>



<div id="conclusion"></div>

## Conclusion

The CSS Grid layout is a great tool for building large scale layouts that define the entirety of a website.

When it comes to choosing between Flexbox or the Grid, a good approach can be to understand whether your layout requires a 2-dimensional design or a one-dimensional one. For the first one, the Grid is the way to go, while for the later, Flexbox is the best choice.

<div class="figure" id="figure-7">
  <figure>
    <img src="/images/grid-vs-flexbox.png" />
    <figcaption>Figure 7. CSS Grid vs CSS Flexbox. Taken from <a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">CSS - The Complete Guide 2022</a>.</figcaption>
  </figure>
</div>

Hope this post has improve your understanding of the CSS Grid. It was a long one, but the feature is incredibly useful when designing great looking well designed websites that follow good practices and conventions. It's worth learning it!
