/* John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in . 
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 1 <= n <= 100
 1 <= ar[i] <= 100 where 0 <= i < n
Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3

John can match three pairs of socks. */


/* NOTES */
// AR is a single string of spaced numbers with values between 1 to 100
// N is the number of values in AR, also between 1 to 100
// Function just needs to return total number of PAIRS in AR string

function sockMerchant(n, ar) {
    let count = 0; // set the count
    let h = {}; // object to store the results

    for (let i = 0; i < n; i++) { // initiates for loop to count number of socks
        return (ar[i] in h ? h[ar[i]] += 1 : h[ar[i]] = 1); // should count number of pairs, incrimenting by 1 for each color

        /* maybe turnary operator isn't the best solution? will debug */
    }
    
    for (var key in h) { // checks for pairs
        if (h.hasOwnProperty(key)) {
            count += ~~(h[key] / 2);
        }
    }
    return count;
}