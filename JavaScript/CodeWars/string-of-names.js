/* Format a string of names */
/*https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript*/

/* Given an array containing hashes of names
   Return a string formatted as a list of names separated by commas except for the last two names,
   which should be separated by an ampersand.
   
   **This should work with single name lists and empty lists**
*/

function list(names){
    return names.map(function(x){ return x.name; }).join(", ").replace(/,(?!.*,)/, " &");
 }
 
 /* names.map takes in a function with a paramater (in this case 'x', which will be the array in test)
    the function returns the value of "name" in array "x"
    .join(", ") converts the returned names in to a string with each name being linked with ", " (comma and a space)  
    finally, .replace uses regex to replace any matching symbols (though really we're just looking for that final comma)
    at the end of the list with " &" (space ampersand)
    This works with single name lists because it only replaces the properties *if* they exist
    and works with empty arrays because the empty array will simply return a blank string from .map().join()
 */