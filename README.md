# Portfolio
My first webpage portfolio 

=========Index Page:===========

1. For navigation bar:

HTML
- creating <div> and <nav> containers with required links in HTML
- setting position: fixed to fix the bar

CSS
- using display flex setting to expands items to fill available free space in our header by height
- using flex-grow option to fill available free space in our header by width
- setting active and hover states of the links using nav-link class and :hover

2. For photos and icons:
HTML
- creating <div> section for all profile container and another <div> sections for my photo and name
- using   display: flex and  justify-content:center settings to configure photo, label and icons  location. Then manually locating and sizing items using width, height,margin and padding settings.
-configuring borders for all container and my photo.

JAVASCRIPT (GITHUB.JS)
- Fetching name and photo from github using git hub api and queryselector to get JSON repsonse from it and put to html.

3. For footer and bottom links:
HTML 
- creating footer section with div classes for bottom and paragraph. 
CSS
-setting elements locations and removing underscores using padding, margin and text-decoration settings.
- configuring border using border-right.

JAVASCRIPT 
- Created the function to generate footer text to HTML

====================
About Page:
====================
1. Navigation bar left the same.

2. Paragraphs and lists:

HTML 
- creating <div> for all required tags and additional classes for all labels and lists.	

CSS
- using text-indent to make a indent in the paragraph, list-style-image to add images to all elements of the list and   display: flex;
  flex-direction: column; to locate items in proper order.


3. A Google map with two buttons underneath:

HTML
- coping the map code in <iframe> from https://www.embed-map.com ,creating additonal <div>'s class "Map" and class "Buttons" to locate these elements and  arrange buttons on the corners below map.

CSS
- Using  "position: absolute;", padding and margin setting to locate items.

-JAVASCRIPT
-Creating a script with array of links to proper cities and functions for buttons.

4. Footer  left the same.


====================
Contact Page:
====================
1.Navigation bar left the same.

2. Inputs form:

HTML
- using <form> with <input> and  <label> fields adding onclick function to submit button. 

CSS
- using display: inline-block; and flex-direction: column; to align all the items. 

JAVASCRIPT
-For submit button using script located in FOOTER.JS file. This script disabling submit button when all of the input fields are empty and display entered info when clicking on submit.
 It is not completed in a required way :( ( Submit button becomes enabled when just one of required fields filled in.). WORKING ON IT.
 
NOTE - Managed to do AJAX version of this script (attached), it works better , but have some issues(Need to fill page rate field manually to enable submit button).


ISSUES, QUESTION
- FOOTER LINKS DON'T WORK WELL and ON THE ABOUT PAGE FOOTER not alligned to the left. 
- WHY FOOTER.JS SCRIPT ARE NOT WORKING WELL WITHOUT windows.onload function.
