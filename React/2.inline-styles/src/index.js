import React from 'react';
import ReactDOM from 'react-dom';

var greetings="Good Morning!";
var style = {
    color: "red",
    fontSize: "3em",
    textAlign: "center"
}
    const time=new Date().getHours();
    time <= 12 ? ((greetings = "Good Morning !") && (style.color = "red")) : time <= 18 ? ((greetings = "Good Afternoon !") && (style.color = "blue")) : ((greetings = "Good Evening !" && (style.color = "green")));
ReactDOM.render(
<h1 style={style}>{greetings}</h1>,
document.getElementById('root')
);