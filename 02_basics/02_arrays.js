const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //takes dc_heross array as an 'element' kyuki array kisi bhi datatype ko le sakta he yaha => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// NOTE: 'push' humara purane array pr hi kaam krta he pr 'concat' ke case me hm nae array me kaam krte he ...

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); //flash

// marvel_heros.concat(dc_heros) //yaha kyuki nae variable me store nahi kia so result aya => [ 'thor', 'Ironman', 'spiderman' ]
// const allHeros = marvel_heros.concat(dc_heros) //yaha asal me 2 arrays merge ho gai he or result kuch esa he => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(allHeros);

// NOTE: more feasible way than 'concat' to merge 2 or more arrays is 'spread' :
const all_new_heros = [...marvel_heros, ...dc_heros] //result=>[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros);

const another_array = [1, 2,3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// // // //syntax for flat => const real_another_array = another_array.flat(DEPTH {yani kitni andr tk jana he}); <== used for agr hume itni depth wala array nai chahiye bs sabko ek hi array me de de kya ese scene me ye use krte he.
// const real_another_array = another_array.flat(Infinity); //[
//                                                          //   1, 2, 3, 4, 5,
//                                                          //   6, 7, 6, 7, 4,
//                                                          //   5
//                                                          // ]
// console.log(real_another_array);


// // now some useful thing may help in data scrapping:
console.log(Array.isArray("hitesh")); //false
console.log(Array.from("hitesh")); //if we want to convert string to array. result => [ 'h', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "hitesh"})); //yaha pr hume btana padega ki keys ka array bnae ya values ka , ab kyuki wo apne aap se nahi pta lga sakta so usne empty array return kiya .result => []

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //when we want to make array from different varibables => [ 100, 200, 300 ]

