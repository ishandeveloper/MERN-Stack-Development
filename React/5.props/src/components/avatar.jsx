import React from 'react';

function Avatar(props) {
    return  <li class="collection-item avatar">
    <img src="https://source.unsplash.com/100x100?person,people,man,human,woman" alt="" class="circle" />
    <span class="title">{props.title}</span>
    <p>{props.subtitle}<br/>
       {props.description}
    </p>
    <a href="#!" class="secondary-content"><i class="material-icons">grade</i></a>
  </li>
}

export default Avatar;