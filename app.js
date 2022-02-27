const http = new EasyHTTP;

// Get Users
// http.get('https://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.error(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'johndoe@gmail.com'
}

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.error(err));

// Update POST
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.error(err));

// Delete Users
http.delete('https://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.error(err));



// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, response) {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log(response);
//   }
// });

// Get Single Posts
// http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Data
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//   if(err) {
//         console.error(err);
//       } else {
//         console.log(post);
//       }
// });

// Update Posts
// http.put('https://jsonplaceholder.typicode.com/posts/6', data, function(err, post) {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
//   if(err) {
//     console.error(err);
//   } else {
//     console.log(response);
//   }
// });