
/*
const url = 'http://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript';

const responseData = fetch(url).then(response => response.json());
responseData.then(({items, has_more, quota_max, quota_remaining}) => {
    for (const { title, score, owner, link}of items){
console.log(Que)

  }
} 

*/


/* var url = "https://jsonplaceholder.typicode.com/users" */

var data = fetch(url).then(response => response.json());
data.then(({username, email}) => {
 for(const {username, email} of data) {
   console.log("username: "+username+"------- email:"+email)
}
})

/*
 
fetch(url).then(response => response.json())
.then(response => {
  for(var key in response){
       console.log("username: "+response[key].username + 
       \n + "email:"+response[key].email+" + 
       \n + city: "+response[key].address.city + 
       \n + "zipcode: " + response[key].address.zipcode)
    }
 })

*/



/*
 var url = "https://jsonplaceholder.typicode.com/albums"

 fetch(url).then(response => response.json())
.then(response => {
  for(var key in response){
       console.log("userID: "+response[key].userId
    + \n + "id:"+response[key].id
    + \n + "title: "+response[key].title)
    }
 })

*/


/*
var url = "https://jsonplaceholder.typicode.com/albums"
 
fetch(url, {
   method: "POST",
   headers: {
       "Content_type": "application/json"
   },
   body:JSON.stringify({
       userId: 101,
       id:101,
       tittle:"foo bar tittle"
   })
}).then(response => response.json())
     .then(response => console.log(response))
*/

var url = "https://jsonplaceholder.typicode.com/users"


fetch(url, {
    method: "POST",
    headers: {
        "Content_type": "application/json"
    },
    body: JSON.stringify({
        id: 11,
        name: "Jose",
        username: "FinaleJD",
        email: "finalejd@gmail.com"
    })
}).then(response => response.json())
    .then(response => console.log(response))







