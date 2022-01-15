<style>
  .line {
    position: absolute;
    left: 0;
    top: 66%;
    width: 100%;
    border: 1px dotted red;
  }

  .line-text {
    position: absolute;
    left: 0;
    top: 70%;
    width: 100%;
    text-align: center;
    font-size: 80%;
    font-weight: bold;
    color: black;
  }

  figure {
    width: 100%;
    margin: 0 auto;
  }

  .figure {
    width: 75%;
    display: flex;
    margin: 1rem auto;
    text-align: center;
  }

  .figure figcaption {
    margin: 0.5rem;
    text-align: center;
  }

  .figure img {
    width: 100%;
    margin: 0 auto;
  }

  .highlight {
    background: lightcoral;
    color: white;
    border-radius: 0.2rem;
    padding: 0.2rem;
  }

  .post__flexbox__example-main-container {
    position: relative;
    width: 75%;
    margin: 1rem auto;
    padding: 1rem;
    text-align: left;
  }

  .post__flexbox__example-main-container--width-50 {
    width: 50%;
  }

  .post__flexbox__example-main-container > h1 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.5rem;
    padding: 0;
  }

  .post__flexbox__example-main-flex-container {
    width: 75%;
    display: flex;
    margin: 1rem auto;
    position: relative;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .post__flexbox__backdrop {
    background: lightgrey;
    opacity: 0.5;
    z-index: -100;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .post__flexbox__example-flex-container {
    display: flex;
    border: 1px solid black;
  }

  .post__flexbox__example-flex-container--height-100 {
    height: 100%;
  }

  .post__flexbox__example-flex-container--flex-wrap-wrap {
    flex-wrap: wrap;
  }

  .post__flexbox__example-inline-flex-container {
    display: inline-flex;
    border: 1px solid black;
  }

  .post__flexbox__example-flex-container > h1,
  .post__flexbox__example-inline-flex-container > h1 {
    font-size: 1rem;
    padding: 1rem;
  }

  .post__flexbox__example-flex-container--direction-row-reverse {
    flex-direction: row-reverse;
  }
  .post__flexbox__example-flex-container--direction-column {
    flex-direction: column;
  }
  .post__flexbox__example-flex-container--direction-column-reverse {
    flex-direction: column-reverse;
  }

  .post__flexbox__example-flex-container--justify-content-flex-start {
    justify-content: flex-start;
  }
  .post__flexbox__example-flex-container--justify-content-flex-end {
    justify-content: flex-end;
  }
  .post__flexbox__example-flex-container--justify-content-center {
    justify-content: center;
  }
  .post__flexbox__example-flex-container--justify-content-space-around {
    justify-content: space-around;
  }
  .post__flexbox__example-flex-container--justify-content-space-between {
    justify-content: space-between;
  }
  .post__flexbox__example-flex-container--align-items-flex-start {
    align-items: flex-start;
  }
  .post__flexbox__example-flex-container--align-items-flex-end {
    align-items: flex-end;
  }
  .post__flexbox__example-flex-container--align-items-center {
    align-items: center;
  }
  .post__flexbox__example-flex-container--align-items-baseline {
    align-items: baseline;
  }
  .post__flexbox__example-flex-container--align-items-stretch {
    align-items: stretch;
  }
  .post__flexbox__example-flex-container--align-content-flex-start {
    align-content: flex-start;
  }
  .post__flexbox__example-flex-container--align-content-flex-end {
    align-content: flex-end;
  }
  .post__flexbox__example-flex-container--align-content-center {
    align-content: center;
  }
  .post__flexbox__example-flex-container--align-content-space-between {
    align-content: space-between;
  }
  .post__flexbox__example-flex-container--align-content-space-around {
    align-content: space-around;
  }
  .post__flexbox__example-flex-container--align-content-stretch {
    align-content: stretch;
  }
  .post__flexbox__example-flex-item--flex-grow {
    flex-grow: 1;
  }
  .post__flexbox__example-flex-item--flex-basis {
    flex-basis: 50px;
  }
  .post__flexbox__example-flex-item--align-self-flex-start {
    align-self: flex-start;
  }
  .post__flexbox__example-flex-item--align-self-flex-end {
    align-self: flex-end;
  }
  .post__flexbox__example-flex-item--align-self-center {
    align-self: center;
  }
  .post__flexbox__example-flex-item--order-3 {
    order: 3;
  }
  .post__flexbox__example-flex-item--order-4 {
    order: 4;
  }

  .post__flexbox__example-flex-item {
    background: #AEE3AD;
    padding: 1rem;
    border: 1px solid black;
  }

  .post__flexbox__example-flex-item--height-25 {
    height: 25%;
  }

  .post__flexbox__example-flex-item > h1 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: black;
  }

  .post__flexbox__flex-container {
    width: 25%;
    border: 1px solid black;
    margin: 1rem;
    text-align: center;
    height: 150px;
  }

  .post__flexbox__flex-container > h1 {
    margin: 0;
    font-size: 1rem;
    border-bottom: 1px solid black;
  }

  @media (max-width: 950px) {
    .post__flexbox__example-main-container {
      width: 100%;
    }
  }
</style>

# Understanding CSS Flexbox

## Table of Contents

- [Introduction](#introduction)
- [What is Flexbox?](#what-is-flexbox)
  - [Creating a flex container](#creating-a-flex-container)
  - [Flex vs inline-flex](#flex-vs-inline-flex)
  - [Flex container vs flex items](#container-vs-items)
- [Flex container properties](#main-properties-container)
  - [flex-wrap](#flex-wrap)
  - [flex-direction](#flex-direction)
    - [Main axis vs cross axis](#main-vs-cross-axis)
  - [justify-content](#justify-content)
  - [align-items](#align-items)
  - [align-content](#align-content)
- [Flex item properties](#main-properties-container)
  - [flex-grow](#flex-grow)
  - [flex-shrink](#flex-shrink)
  - [flex-basis](#flex-basis)
  - [align-self](#align-self)
  - [order](#flex-order)
- [Shorthand properties](#shorthand-properties)
- [Conclusion](#conclusion)

<div id="introduction"></div>

## Introduction

The idea behind this post is to try to write a comprehensive description of the CSS Flexbox feature.
Hopefully it should be helpful for CSS beginners and experts as well.

Let me know if it was helpful for you!

<div id="what-is-flexbox"></div>

## What is flexbox?

The Flexbox layout (flexible box) is a CSS module that aims at providing a more efficient and easier way of positioning HTML elements.

It can be used to distribute the empty space among the elements inside a **"flex"** container, even when their size is not known or it is dynamic.

Here is a good explanation taken from the W3C website:

> "In the flex layout model, the children of a flex container can be laid out in any direction, and can 'flex' their sizes, either growing to fill unused space or shrinking to avoid overflowing the parent. Both horizontal and vertical alignment of the children can be easily manipulated. Nesting of these boxes (horizontal inside vertical, or vertical inside horizontal) can be used to build layouts in two dimensions." [W3C](https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/)

The flexbox layout can help make the code leaner and easier to understand.

<div id="creating-a-flex-container"></div>

### Creating a flex container

To create a flex container all is needed is to add the <code>**display: flex**</code> property to an HTML element.
For example, given the following HTML code:

<pre class="prettyprint lang-html">
  &lt;div class="flex-container" id="flex-container"&gt;
    &lt;!-- add html code --&gt;
  &lt;/div&gt;
</pre>

<pre class="syntax-html">
  &lt;div class="flex-container" id="flex-container"&gt;
    &lt;!-- add html code --&gt;
  &lt;/div&gt;
</pre>

To turn the **<code>div</code>** element with the class **<code>.flex-container</code>** into a flex container, the following CSS would have to be added:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
  }
</pre>

And that's it! the flex container has been created.

<div id="container-vs-items"></div>

### Flex container vs flex items

After turning an HTML element into a flex container, any child elements of the container are known as **flex items**.

<style>
  .post__flexbox__container-vs-items__container {
    border: 1px solid black;
    text-align: center;
  }

  .post__flexbox__container-vs-items__flex-container {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    flex-wrap: wrap;
  }

  .post__flexbox__container-vs-items__flex-item {
    width: 30%;
    border: 1px solid black;
    margin: 0.2rem;
    text-align: center;
    background: #AEE3AD;
  }

  .post__flexbox__container-vs-items__container h1 {
    font-size: 0.9rem;
    padding: 0.1rem;
    border-bottom: 1px solid black;
    margin: 0;
    background: #485E48;
    color: white;
  }

  .post__flexbox__container-vs-items__flex-properties {
    margin-top: 0.5rem;
    padding-bottom: 1rem;
  }

  .post__flexbox__container-vs-items__flex-properties::before {
    content: "Properties";
    color: black;
    font-size: 0.9rem;
  }

  .post__flexbox__container-vs-items__flex-properties ul {
    list-style: none;
    margin: 0;
    margin-top: 0.8rem;
    padding: 0;
  }

  .post__flexbox__container-vs-items__flex-properties li {
    margin: 0;
    margin-top: 1.5rem;
  }

  .post__flexbox__container-vs-items__flex-properties a {
    color: black;
    padding: 0.5rem;
    border: 1px solid #485E48;
    margin: 0.2rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    background: lightgrey;
    font-family: monospace;
    text-decoration: none;
  }

  .post__flexbox__container-vs-items__flex-properties a:hover,
  .post__flexbox__container-vs-items__flex-properties a:active {
    color: green;
    background: white;
  }

  @media (max-width: 950px) {
    .post__flexbox__container-vs-items__flex-item {
      width: 100%;
    }
  }
</style>

<div class="post__flexbox__example-main-container">
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__container-vs-items__container">
    <h1>Flex container</h1>
    <div class="post__flexbox__container-vs-items__flex-container">
      <div class="post__flexbox__container-vs-items__flex-item">
        <h1>Flex item</h1>
        <div class="post__flexbox__container-vs-items__flex-properties">
          <ul>
            <li><a href="#flex-grow">flex-grow</a></li>
            <li><a href="#flex-shrink">flex-shrink</a></li>
            <li><a href="#flex-basis">flex-basis</a></li>
            <li><a href="#align-self">align-self</a></li>
            <li><a href="#flex-order">order</a></li>
          </ul>
        </div>
      </div>
      <div class="post__flexbox__container-vs-items__flex-item">
        <h1>Flex item</h1>
        <div class="post__flexbox__container-vs-items__flex-properties">
          <ul>
            <li><a href="#flex-grow">flex-grow</a></li>
            <li><a href="#flex-shrink">flex-shrink</a></li>
            <li><a href="#flex-basis">flex-basis</a></li>
            <li><a href="#align-self">align-self</a></li>
            <li><a href="#flex-order">order</a></li>
          </ul>
        </div>
      </div>
      <div class="post__flexbox__container-vs-items__flex-properties">
        <ul>
          <li><a href="#flex-wrap">flex-wrap</a></li>
          <li><a href="#flex-direction">flex-direction</a></li>
          <li><a href="#justify-content">justify-content</a></li>
          <li><a href="#align-items">align-items</a></li>
          <li><a href="#align-content">align-content</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<span class="highlight">**The default behavior of flex items is to expand or shrink as much as possible to fill the available vertical space in the flex container. When it comes to horizontal space, the default behaviour is to wrap its content, i.e. become as big as necessary to fit all the elements nested inside them.**</span>

<div class="figure" id="figure-1">
  <figure>
    <img src="/images/flex-items-default-behavior.gif" />
    <figcaption>Figure 1. Flex container displayed in grey and flex items as green.</figcaption>
  </figure>
</div>

As can be seen in [Figure 1](#figure-1) when the flex container is resized, the flex items do not resize with it, they remain with a fixed width, which can cause that **they overflow out of the viewport**.

Here is the code for [Figure 1](#figure-1):

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }

  .flex-item h1 {
    font-size: 1rem;
    padding: 1rem;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Give it a try yourself, try resizing your browser to test the functionality!

<div id="flex-vs-inline-flex"></div>

### Flex vs inline-flex

A **div** element with the declaration **<code>display: flex</code>** will remain **block level**, i.e. no other elements will appear on the same line.
For example, given the following code:

<pre class="prettyprint lang-html">
  &lt;div&gt;
    &lt;div class="flex-container"&gt;
      &lt;h1&gt;Flex container&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div class="flex-container"&gt;
      &lt;h1&gt;Flex container&lt;/h1&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</pre>

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
  }

  .flex-container h1 {
    font-size: 1rem;
    padding: 1rem;
  }
</pre>

Would give this result:

<div class="post__flexbox__example-main-container">
  <div class="post__flexbox__backdrop"></div>
  <h1><code>display: flex</code></h1>
  <div class="post__flexbox__example-flex-container">
    <h1>Flex container</h1>
  </div>
  <div class="post__flexbox__example-flex-container">
    <h1>Flex container</h1>
  </div>
</div>

However, adding the <code>**display: flex**</code> property to the flex container will change the behavior of its child elements. **Flex items will not begin on new lines**, rather will be placed next to each other as inline elements.

Flexbox also provides the <code>**inline-flex**</code> value for the display property, which allows to create flex containers that are also inline elements. For example, by taking the previously mentioned code of this section and changing the display property to <code>**inline-flex**</code> like so:

<pre class="prettyprint lang-css">
  .flex-container {
    display: inline-flex;
    border: 1px solid black;
  }
</pre>

Will make both flex containers display inline with respect to each other:

<div class="post__flexbox__example-main-container">
  <div class="post__flexbox__backdrop"></div>
  <h1><code>display: inline-flex</code></h1>
  <div class="post__flexbox__example-inline-flex-container">
    <h1>Flex container</h1>
  </div>
  <div class="post__flexbox__example-inline-flex-container">
    <h1>Flex container</h1>
  </div>
</div>

<div id="main-properties-container"></div>

## Flex container properties

There are quite a few CSS properties that are included in the flexbox module.
It is important to know which ones can be applied to the flex container and which ones can be applied to the flex items.

The following list will contain properties that can only be applied to the flex container element.

<div id="flex-wrap"></div>

### flex-wrap

As seen in [Figure 1](#figure-1) the flex items will move outside of the viewport if the flex container gets resized to a very small size.

Flexbox provides a way of avoiding this from happening, i.e. when the flex container shrinks too much to fit all of the flex items, it can make the items that do not fit in the current row to **jump into the next row** as seen in [Figure 2](#figure-2).

<div class="figure" id="figure-2">
  <figure>
    <img src="/images/flex-items-wrap-behavior.gif" />
    <figcaption>Figure 2. Flex items in a flex container with <code>flex-wrap: wrap</code>.</figcaotion>
  </figure>
</div>

The code for [Figure 2](#figure-2) is the same as the code for [Figure 1](#figure-1) but with <code>**flex-wrap: wrap**</code> added to it. Here is the code for it:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
    flex-wrap: wrap;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }

  .flex-item h1 {
    font-size: 1rem;
    padding: 1rem;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

The property accepts three different values:
  - <code>**wrap**</code>: the behavior can be seen in [Figure 2](#figure-2).
  - <code>**nowrap**</code>: no wrap is the default behavior as shown in [Figure 1](#figure-1).
  - <code>**wrap-reverse**</code>: the same behavior as <code>wrap</code> but it reverses the order of the items, i.e. it makes all but the last one jump into the next row and then they are moved upwards. The behavior can be seen in [Figure 3](#figure-3).

<div class="figure" id="figure-2">
  <figure>
    <img src="/images/flex-items-wrap-reverse-behavior.gif" />
    <figcaption>Figure 3. Flex items in a flex container with <code>flex-wrap: wrap-reverse</code>.</figcaotion>
  </figure>
</div>


<div id="flex-direction"></div>

### flex-direction

Flex containers have two axes, the **main axis** and the **cross axis**.
The axis that is used can be specified using the <code>**flex-direction**</code> property.

Let's explore the different values this property accepts.
Given the following code:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    flex-direction: row;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
    max-height: 5rem;
    max-width: 3rem;
  }

  .flex-item h1 {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    color: black;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

The <code>**flex-direction**</code> property accepts the following values:
  - <code>**row**</code>: **the default value**. It places as many flex items as possible from left to right in one or more rows.

<div class="post__flexbox__example-main-container">
  <h1><code>flex-direction: row</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container">
    <div class="post__flexbox__example-flex-item"><h1>1</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>2</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>3</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>4</h1></div>
  </div>
</div>

  - <code>**row-reverse**</code>: behaves just as the previous <code>**row**</code> value, but it reverses the order of the flex items as well as the default positioning across the **main axis**. Using the previous code example, let's change the property **flex-direction** to <code>**row-reverse**</code>:

<div class="post__flexbox__example-main-container">
  <h1><code>flex-direction: row-reverse</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--direction-row-reverse">
    <div class="post__flexbox__example-flex-item"><h1>1</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>2</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>3</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>4</h1></div>
  </div>
</div>

  - <code>**column**</code>: flips the flexbox axes, i.e. <span class="highlight">the **main axis** now becomes the vertical axis and the **cross axis** now spans along the horizontal axis</span>. In the following example, it can be seen how once the axis changes, <span class="highlight">**the direction in which the flex items stretch also changes**</span>, i.e. the reverse behavior from the default one previously mentioned in the [Flex container vs flex items](#container-vs-items) section.

<div class="post__flexbox__example-main-container">
  <h1><code>flex-direction: column</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container  post__flexbox__example-flex-container--direction-column">
    <div class="post__flexbox__example-flex-item"><h1>1</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>2</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>3</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>4</h1></div>
  </div>
</div>

  - <code>**column-reverse**</code>: the items are positioned across the flipped **main axis**, i.e from top to bottom, but in reverse order, which means the last flex item goes first or can be seen as the items go from bottom to top.

<div class="post__flexbox__example-main-container">
  <h1><code>flex-direction: column-reverse</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--direction-column-reverse">
    <div class="post__flexbox__example-flex-item"><h1>1</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>2</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>3</h1></div>
    <div class="post__flexbox__example-flex-item"><h1>4</h1></div>
  </div>
</div>


<div id="main-vs-cross-axis"></div>

#### Main axis vs cross axis

The main axis can be thought of the horizontal axis (x-axis), while the cross axis can be thought of the vertical axis (y-axis). It is important to keep in mind which axis is the one that is dictating the positioning of the items, this is because <span class="highlight">**the flex properties can have very different effects depending on the flex direction being used**</span>.

Here is a good visual representation of the relationship between the axes and the <code>**flex-direction**</code> property, taken from [CSS - The Complete Guide 2022](https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/):

<div class="figure" id="figure-4">
  <figure>
    <img src="/images/main-axis-vs-cross-axis.png" alt="main vs cross axis" />
    <figcaption>Figure 4. Main axis vs Cross axis. Taken from <a href="https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/">CSS - The Complete Guide 2022</a>.</figcaption>
  </figure>
</div>

As mentioned before, it is important to pay attention to which axis is being used, depending on it, the flex items can look very different.

The following properties can be used to determine the position and the width of flex items along the **main axis**:
  - [justify-content](#justify-content)
  - [flex-wrap](#flex-wrap)
  - [flex-grow](#flex-grow)
  - [flex-shrink](#flex-shrink)

The following properties are used to determine the position of flex items along the **cross axis**:
  - [align-items](#align-items)
  - [align-content](#align-content)

<div id="justify-content"></div>


<span class="highlight">The properties will keep affecting the flex items on their respective axis, i.e. regardless of the flex direction property value, <code>justify-items</code> will still distribute space and align items across the **main axis** even if the axis has changed or flipped direction to span along the vertical axis. The same is the case for <code>align-items</code> and the **cross axis**</span>


### justify-content

The <code>**justify-content**</code> property is used to specify how the flex items are positioned along the **main axis**.

Some of the most used values for the property:
  - <code>**flex-start**</code>: it is the **default value**, all items will be positioned in order, starting from the left of the parent container, with no extra space between or before them. 
  - <code>**flex-end**</code>: all items will be positioned in order, with the last item starting on the right side of the parent container, with no extra space between or after them.
  - <code>**center**</code>: all items will be positioned in order, in the center of the parent container with no extra space before, between, or after them.
  - <code>**space-around**</code>: items will be positioned with equal space before and after each item, resulting in double the space between elements.
  - <code>**space-between**</code>: items will be positioned with equal space between them, but no extra space before the first or after the last elements.

Given the following code example:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: flex-start;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Lets explore how the flex items behave when the values of the property change.

<div class="post__flexbox__example-main-container">
  <h1><code>justify-content</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--flex-wrap-wrap">
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>flex-start</code></h1>
      <div class="post__flexbox__example-flex-container">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>flex-end</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--justify-content-flex-end">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--justify-content-center">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>space-between</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--justify-content-space-between">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container">
      <h1><code>space-around</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--justify-content-space-around">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
  </div>
</div>


<div id="align-items"></div>

### align-items

The <code>**align-items**</code> property allows to specify how the flex items should be positioned along the **cross axis**.

The most important values that the property accepts are:
  - <code>**flex-start**</code>: all elements will be positioned at the top of the parent container. 
  - <code>**flex-end**</code>: all elements will be positioned at the bottom of the parent container. 
  - <code>**center**</code>: the center of all elements will be positioned halfway between the top and bottom of the parent container.
  - <code>**baseline**</code>: the bottom of the content of all items will be aligned with each other.
  - <code>**stretch**</code>: if possible, the items will stretch from top to bottom of the container (this is the default value; elements with a specified height will not stretch; elements with a minimum height or no height specified will stretch).

Given the following code example:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    align-items: flex-start;
    height: 15rem;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Lets explore how the flex items behave when the values of the property change.

<div class="post__flexbox__example-main-container">
  <h1><code>align-items</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--flex-wrap-wrap">
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-start</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-flex-start post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>flex-end</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-flex-end post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>center</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-center post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container post__flexbox__example-main-container--width-50">
      <h1><code>stretch</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-stretch post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container">
      <h1><code>baseline</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-baseline post__flexbox__example-flex-container--height-100">
        <div class="line"></div>
        <div class="line-text">all content aligned</div>
        <div class="post__flexbox__example-flex-item"><h1>1</h1></div>
        <div class="post__flexbox__example-flex-item"><h1 style="font-size: 1.5rem;">2</h1></div>
        <div class="post__flexbox__example-flex-item"><h1>3</h1></div>
        <div class="post__flexbox__example-flex-item"><h1>4</h1></div>
      </div>
    </div>
  </div>
</div>

<div id="align-content"></div>

### align-content

The property <code>**align-items**</code> is used to align flex items within a single row of the flex container. In case that the container has more than one row as seen with the <code>**flex-wrap**</code> examples, then the <code>**align-content**</code> property can be used to distribute space and position the different rows across the **cross axis** of the flex container.

Below are some of the more commonly used align-content values:
  - <code>**flex-start**</code>: all rows of elements will be positioned at the top of the parent container with no extra space between.
  - <code>**flex-end**</code>: all rows of elements will be positioned at the bottom of the parent container with no extra space between.
  - <code>**center**</code>: all rows of elements will be positioned at the center of the parent element with no extra space between.
  - <code>**space-between**</code>: all rows of elements will be spaced evenly from the top to the bottom of the container with no space above the first or below the last.
  - <code>**space-around**</code>: all rows of elements will be spaced evenly from the top to the bottom of the container with the same amount of space at the top and bottom and between each element.
  - <code>**stretch**</code>: if a minimum height or no height is specified, the rows of elements will stretch to fill the parent container from top to bottom (default value).

Please note that the property <code>**flex-wrap: wrap**</code> needs to be specified in order to have multiple rows of flex items. Given the following code example:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    flex-wrap: wrap;
    height: 20rem;
    align-content: flex-start;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
    width: 12.5%;
    height: 12.5%;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Lets explore how the flex items behave when the values of the property change.

<div class="post__flexbox__example-main-container">
  <h1><code>align-content</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--flex-wrap-wrap">
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50"  style="max-width: 55%;">
      <h1><code>flex-start</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-flex-start post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50"  style="max-width: 55%;">
      <h1><code>flex-end</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-flex-end post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50" style="max-width: 55%;">
      <h1><code>center</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-center post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50" style="max-width: 55%;">
      <h1><code>space-between</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-space-between post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50" style="max-width: 55%;">
      <h1><code>space-around</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-space-around post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50" style="max-width: 55%;">
      <h1><code>stretch</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-content-stretch post__flexbox__example-flex-container--flex-wrap-wrap post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
  </div>
</div>


<div id="Flex item properties"></div>

## Flex item properties

The following list will contain properties that can only be applied to the flex container element.

<div id="flex-grow"></div>

### flex-grow

The <code>**flex-grow**</code> property allows to specify if items should grow to fill a container and also which items should grow proportionally more or less than others.

Given the following code:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
    flex-wrap: wrap;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }

  .flex-item:nth-child(2) {
    flex-grow: 5;
  }
  .flex-item:nth-child(4) {
    flex-grow: 1;
  }

  .flex-item h1 {
    font-size: 1rem;
    padding: 1rem;
    color: black;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

The <code>**flex-grow**</code> property is applied to flex items number 2 and 4 and in [Figure 5](#figure-5) it can be seen how both items grow when the container is resized while the others remain the same size.

It is important to note that each item has a different value for the property, the flex item number 2 has a higher value than number 4, which means that it grows at a faster rate, it grows 4 times faster.

<div class="figure" id="figure-5">
  <figure>
    <img src="/images/flex-items-flex-grow-behavior.gif" />
    <figcaption>Figure 5. Flex grow property applied to flex item 2 and 4.</figcaption>
  </figure>
</div>

The default value is 0, which is why the items do not grow along with the container by default.

<div id="flex-shrink"></div>

### flex-shrink

The <code>**flex-shrink**</code> property can be used to specify which elements will shrink along with the container and in what proportions.

Given the following code:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
    min-width: 0;
  }

  .flex-item:nth-child(4) {
    flex-shrink: 2;
  }
  .flex-item:nth-child(2) {
    flex-shrink: 5;
  }

  .flex-item h1 {
    font-size: 1rem;
    padding: 1rem;
    color: black;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;5&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

The <code>**flex-shrink**</code> property is applied to flex items number 2 and 4 and in [Figure 6](#figure-6) it can be seen how both items shrink when the container is resized while the others remain the same size.

It is important to note that each item has a different value for the property, the flex item number 2 has a higher value than number 4, which means that it shrinks at a faster rate, it shrinks 3 times faster.

<div class="figure" id="figure-6">
  <figure>
    <img src="/images/flex-items-flex-shrink-behavior.gif" />
    <figcaption>Figure 6. Flex shrink property applied to flex item 2 and 4.</figcaption>
  </figure>
</div>

The default value for the property is 1, but as specified in [Figure 1](#figure-1) the flex items will default to a size which will fit its content, and will not shrink any further even with a <code>**flex-shrink**</code> value of 1 or higher. This is because they come with a default value of <code>**min-width: auto**</code> which will wrap their content. By setting this property to <code>**min-width: 0**</code> the shrinking effect can be observed.

<div id="flex-basis"></div>

### flex-basis

The property <code>**flex-basis**</code> can be used to specify the size of flex items along the **main axis**. This means that if the container has a value of <code>**flex-direction: row**</code> it will specify the width of the items, while if it has a value of <code>**flex-direction: column**</code> it will specify the height of the items.

Given the following code:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
    flex-direction: row;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
    flex-basis: 50px;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Let's explore how the flex items behave with different values of the property.

<div class="post__flexbox__example-main-container">
  <h1><code>flex-basis</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--flex-wrap-wrap">
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-direction: row</code></h1>
      <div class="post__flexbox__example-flex-container">
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-direction: column</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--direction-column">
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-basis"></div>
      </div>
    </div>
  </div>
</div>

As can be seen in the previous example, the <code>**flex-basis**</code> property adjusts the width of the flex items when the property <code>**flex-direction**</code> is set to <code>**row**</code> and the height of the items when it is set to <code>**column**</code>. In the previous case it will set the width of the **content box** to 50px or the height of the **content-box** to 50px depending on the conditions previously mentioned.


<div id="flex-order"></div>

### flex-order

Given the following code:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    justify-content: center;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }

  .flex-item:nth-child(1) {
    order: 3;
  }
  .flex-item:nth-child(3) {
    order: 4;
  }

  .flex-item h1 {
    font-size: 1rem;
    padding: 1rem;
    color: black;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;1&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;2&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;3&lt;/h1&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;h1&gt;4&lt;/h1&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Let's explore how the flex items behave with the <code>**order**</code> property applied to them.

<div class="post__flexbox__example-main-container">
  <h1><code>order</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-main-container">
    <div class="post__flexbox__example-flex-container">
      <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--order-3 post__flexbox__example-flex-item--flex-grow"><h1>1</h1></div>
      <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-grow"><h1>2</h1></div>
      <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--order-4 post__flexbox__example-flex-item--flex-grow"><h1>3</h1></div>
      <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--flex-grow"><h1>4</h1></div>
    </div>
  </div>
</div>

The default value is 0. Any number above that will place the item at the end of the row or column, unless there are items with bigger values. It also accepts negative values.


<div id="align-self"></div>

### align-self

Allows to align a single item along the **cross axis**.

Given the following code example:

<pre class="prettyprint lang-css">
  .flex-container {
    display: flex;
    border: 1px solid black;
    background: lightgrey;
    align-items: flex-start;
    height: 15rem;
  }

  .flex-item {
    padding: 1rem;
    border: 1px solid black;
    background: #AEE3AD;
  }

  .flex-item:nth-child(4) {
    align-self: flex-start;
  }
</pre>

<pre class="prettyprint lang-html">
  &lt;div class="flex-container"&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
    &lt;div class="flex-item"&gt;&lt;/div&gt;
  &lt;/div&gt;
</pre>

Lets explore how the flex items behave when the values of the property change.

<div class="post__flexbox__example-main-container">
  <h1><code>align-self</code></h1>
  <div class="post__flexbox__backdrop"></div>
  <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--flex-wrap-wrap">
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-start</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-flex-end post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--align-self-flex-start"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-end</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-flex-end post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--align-self-flex-end"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
    <div class="post__flexbox__example-main-container  post__flexbox__example-main-container--width-50">
      <h1><code>flex-center</code></h1>
      <div class="post__flexbox__example-flex-container post__flexbox__example-flex-container--align-items-flex-end post__flexbox__example-flex-container--height-100">
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item"></div>
        <div class="post__flexbox__example-flex-item post__flexbox__example-flex-item--align-self-center"></div>
        <div class="post__flexbox__example-flex-item"></div>
      </div>
    </div>
  </div>
</div>


<div id="shorthand-properties"></div>

## Shorthand properties

There are a couple of properties that can help reduce the amount of code that is written by accepting multiple values for other properties combined into one.

- <code>**flex**</code>: not to be confused with <code>**display: flex**</code>, it is a property that combines <code>**flex-grow**</code>, <code>**flex-shrink**</code> and <code>**flex-basis**</code> into a single property declaration. For example:

<pre class="prettyprint lang-css">
  .flex-item {
    /* flex-grow: 1, flex-shrink: 2, flex-basis: 50px */
    flex: 1 2 50px;
  }
</pre>

- <code>**flex-flow**</code>: it is a property that combines <code>**flex-wrap**</code> and <code>**flex-direction**</code> into a single property declaration. For example:

<pre class="prettyprint lang-css">
  .flex-container {
    /* flex-direction: column, flex-wrap: wrap */
    flex: column wrap;
  }
</pre>


<div id="conclusion"></div>

## Conclusion

The flexbox (flexible box) layout is a great improvement when it comes to designing small or sinlge component layouts, for bigger or page wide layouts the CSS grid would be a better choice.

And that's it! hope you enjoyed the post and more importantly that it has been useful to you to understand how flexbox behaves and how it can make your life easier when positioning elements on a website.
