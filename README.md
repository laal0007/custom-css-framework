# custom-css-framework<br>Modern Vampiric Style 

(This group assignment is for MTM6407_310 -- created by Charles Kevin Delahunt, Feyza Basaran, Giangminh Tran, and Zarina Laalo).
To view the visual Figma guide for examples and inspiration, [click here](https://www.figma.com/file/pr9413pwRnbk6aSXKnOtXR/CSS-Framework-Assignment?node-id=1%3A2&t=fHBB6KIzIalP5tFN-1) (password: mtm6407)

<!-- "Installation, usage, and customization instructions must be added to the README file." -->
## Installation Instructions
To begin using this framework, download the files from this repository, and ensure the "style.css" file is linked to your html pages.

## Colors
There are seven colours within this theme:
- <font color=#363B67> primary (hex: #363B67)</font> 
- <font color=#172440>secondary (hex: #172440)</font> 
- <font color=#78B691>tertiary (hex: #78B691)</font> 
- <font color=#08DB09>warning (hex: #08DB09)</font> 
- <font color=#604187>success (hex: #604187)</font> 
- <div style="background-color:#010C11"><font color=#F5F5F5>light: (hex: #F5F5F5)</font></div> 
- <font color=#010C11>dark: (hex: #010C11)</font> 

They can be used for background, text, background, lists, buttons, and cards. See details on HTML elements below. 

## Fonts
There are three fonts used in this theme from Google Fonts.
- Butcherman (for h1)
- Staatliches (for h2)
- Cabin (for h3-h6, body, paragraph - in 400 and 700 font weight, including italic)

To change the colour of the text, add the class text-\[color\] and insert a color from the colors list
\[i.e. class="text-primary" would appear as <font color=#363B67>The Primary Text</font> \]
<br>To change the colour of the text background, add the class bg-\[color\] from the colors list
\[i.e. class="bg-primary" to make it appear as <span style="background-color:#363B67"> Background Primary </span>\]
<br> Font sizes can be customized using a class of "font-\[value\]" with the value options being "sm", "md", "lg", "xl", or "xxl".

## Lists
To create thematic lists, add the class "bg-primary" to the \<ul\> or \<ol\> tag, and the class "br-bottom-light text-light" to any list item \<li\>.


## Images
Images can be formatted into three separate sizes using the following classes:
- Small Images - add class "img-small"; best used for thumbnails (200px x 200px)
- Medium Images - add class "img-medium" (500px x 300px)
- Large Images - add class "img-large"; best used for banners (1400px x 400px) 


## Buttons
There are two options for buttons; a solid button and an outline button.
- for a default \<button\>, add the class "btn"; 
- for a solid \<button\> with colour, add the class "btn-\[color\]" and "text-\[color\]"; \[i.e. class="btn-primary text-light" for a button with primary background and light colored text\]
- for an outlined \<button\>, add the class "btn-outlined-\[color\]" and "text-\[color\]"; \[i.e. class="btn-outline-primary text-dark" for a button with primary color border and dark colored text\]
- outlined buttons, when hovered, will fill the button with the same color value as the border; users should **also add a class to their text** "text-hover-\[light or dark\]" to ensure their hover text color will be legible on the button's background when filled. [i.e. class="btn-outline-primary text-dark text-hover-light" for a button with primary color border and dark colored text; when hovered, the button becomes a solid (dark) color and the text becomes light for contrast\]

## Cards
There are two styles of Cards; they each can have customized background and text colors from the colors list.  
- Card number 1 is purely a text card, and uses the following HTML structure:
<br> \<div class="card-1-\[color\] br-\[color\]"\>
        <br>\<h2 class="card-title text-\[color\]" \> Card Title \</h2\>
        <br>\<p class="card-body text-\[color\]"\>Insert card text here.\</p\>
        <br>\</div\>
- Card number 2 is an image and text card, and uses the following HTML structure:
<br>\<div class="card-2-\[color\] br-\[color\]"\>
            <br>\<img class="card-img" src="\[image link\]" alt="\[image description\]"\>
            <br>\<div class="card-body br-left-light"\>
                <br>\<h2 class="card-title text-\[color\]"\>Card 2\</h2\>
                <br>\<p class="text-\[color\]"\>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit impedit doloremque cupiditate vero soluta, quas asperiores unde iure accusamus.\</p\>
            <br>\</div\>
        <br>\</div\>

## Tables
There are two styles of tables that are utilize theme colors and fonts (not customizable)
- For Table 1 (styled with a single-color rows), use the class "table-1" on the \<table\> element
- For Table 2 (styled dual-colored striped rows), use the class "table-2" on the \<table\> element

## Utilities
There are additional classes that can be added for styling HTML elements the include the following:
- Margins ("m")
    - add class "m" for all margins, "mt" for margin-top, "mb" for margin-bottom, "mr" for margin-right, and "ml" for margin left; include a -\[value\] to determine the size of the margin
    - values range in number from "0" (base) to "5" 
    - ex. class="mb-3"
- Padding ("p")
    - add class "p" for all padding, "pt" for padding-top, "pb" for padding-bottom, "pr" for padding-right, and "pl"; include a -\[value\] to determine the size of the padding
    - add an additional class, number from "0" (base) to "5" to determine the size of the padding
    - ex. class="p-2"
- Border Radius ("br")
    - add a border radius by adding class "br" and include a -\[value\]
    - value options are "default" (base), "none", "xs", "sm", "lg" or "full"
    - ex. class="br-default"
- Display
    - add one of the following classes for display styling elements:  
    - "display-n" for none, 
    - "display-b" for block,
    - "display-f" for flex,
    - "display-i" for inline,
    - "display-i-b" for inline-block
- Opacity
    - To change the opacity of an element, add the class "o" and include a -\[value\]
    - value options are 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    - ex. class="o-60" would give an opacity of 60%.