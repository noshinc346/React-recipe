# Project Title

What's in Your Fridge ?

## Description
Food waste is not good! I created an app that allows you to put in ingredients you don't know what to do with in your fridge and gives you recipes that include the items you have. 

## Getting Started

### Wireframe

![alt text](<Screenshot 2024-02-23 at 12.00.13 PM.png>)

### API 

* API: https://developer.edamam.com/
* Focus Endpoint: https://api.edamam.com/search?q=INGREDIENTSHERE&app_id=&app_key=
* Example API JSON view : ![alt text](<Screenshot 2024-02-23 at 9.10.19 AM.png>)

## Technologies Used: 
useState: Used "prev" method to create a visual list of ingredients everytime user inputs.

open.window: onClick={(() => window.open(`${meal.recipe.url}`, '_blank') -> I made my div boxes clickable so it opens a new tab and takes to a link associated with the recipe.

## Approaches Taken
Wanted to have a fun soft look! Light colors and bubbly fonts

In order to input the ingredients into my api: 

1. The state of my initial list of ingredients is an empty array 
2. Once user starts inputing ingredients, display the items as a list and also update the state of the empty array 
3. Because the ingredients have to be in a format of a string with + in between --> I had to turn my array of ingredients into a combined string with plus sign - ingredients.join("+")

## Link to Live Site 
https://main--elaborate-kulfi-91e102.netlify.app/ 


### Relevant Instructions
There is a search bar to enter ingredients. Add ingredients one at a time. Press submit once you would like recipes. 

Keep in mind that the first ingredient you enter will be more focused in your meal compared to the consecutive ingredients. 

## Acknowledgments

Thank You instructors Megan Chris Raul for the help ;-; <3

And the Dev skill Lab was very very useful for my app!

