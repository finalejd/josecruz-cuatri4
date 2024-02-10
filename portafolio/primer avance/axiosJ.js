import axios from 'axios';


const axios = require('axios');
var url = "https://jsonplaceholder.typicode.com/posts"


/* 

axios.get(url).then((data) => {
    for (const key in data){
        console.log(data[key].title)
    }

}).catch((err)=>{
    console.log(err)
});

*/




axios.post(url, {
    userId: 2,
    title: "Lorem Ipsum"

}).then(({ data }) => console.log(data))



// var url = "https://jsonplaceholder.typicode.com/albums"


axios.get(url).then((data) => {
    for (const key in data) {
        console.log(data[key].title)
    }
}).catch((err) => {
    console.log(err)
});



axios.post(url, {
    userId: 100,
    id: 101,
    title: "Lorem Ipsum"
}).then(({ data }) => console.log(data))

