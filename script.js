//1)Advanced Arrays

const array = [1, 2, 10, 16];
const double = []
const newArray = array.forEach((num) =>{
    double.push(num* 2);

})

 console.log ('forEach',double);

 //map, filter, reduce
//2)map
 const mapArray = array.map(num => num * 2);
 console.log ('map', mapArray);

 //3) filter

 const filterArray = array.filter(num =>  num > 5);
 console.log ( 'filter', filterArray);

 //4)reduce
 
 const reduceArray = array.reduce((accumulator, num)=>{
     return accumulator + num 

 }, 0); 

 console.log ('reduce', reduceArray);

 