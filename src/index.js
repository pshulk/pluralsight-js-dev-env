//import './index.css';
//import numeral from 'numeral'
//const courseValue = numeral(1000).format('$0,0.00');
//debugger;
//console.log(`I pay ${courseValue} for this course!`); // eslint-disable-line no-console

import {getUsers, deleteUser} from './api/userApi';

// populate table of users via api call
getUsers().then(result=>{
  let usersBody = "";

  result.forEach(user=>{
    usersBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');
  // must use array.from to create a real array from DOM collection
  // gebycn only return an array like obj
  Array.from(deleteLinks, link => {
    link.onclick = function(event) {
      const element = event.target;
      event.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });

});
