var headerDiv = document.createElement('div');
headerDiv.setAttribute("class", "header");

headerDiv.innerHTML = "<h1>High On Coding</h1><h2>Home</h2><span>Categories</span>";

// var h2=document.querySelectorAll("h2");
// h2[1].setAttribute("class",".h1");


var containerDiv = document.querySelector('.container');
containerDiv.append(headerDiv);




///////////////////////////////////////
var contentTopDiv = document.createElement('div');
contentTopDiv.setAttribute("class","contentTop");

contentTopDiv.innerHTML="<h2>Curse of Current Reviews</h2><p>An HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.</p>";

containerDiv.append(contentTopDiv);

///////////////////////////////////////
var postBoxDiv = document.createElement('div');
postBoxDiv.setAttribute("class","postBox");

postBoxDiv.innerHTML ="<h3>Hello WatchKit</h3><p>An HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id</p>"

containerDiv.append(postBoxDiv);


var commentBoxDiv=document.createElement('div');
commentBoxDiv.setAttribute("class","commentBox");

commentBoxDiv.innerHTML="<p><b>12</b> comments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>124</b>  likes</p>";

containerDiv.append(commentBoxDiv);

var postBoxDiv = document.createElement('div');
postBoxDiv.setAttribute("class","postBox");

postBoxDiv.innerHTML ="<h3>Introdcution to Swift</h3><p>An HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id.HTML element can have an id attribute to identify it. id elements should always be unique to that single element, and each element should never have more than one id</p>"

containerDiv.append(postBoxDiv);


var commentBoxDiv=document.createElement('div');
commentBoxDiv.setAttribute("class","commentBox");

commentBoxDiv.innerHTML="<p><b>12</b> comments&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>124</b>  likes</p>";

containerDiv.append(commentBoxDiv);






