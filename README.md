# React App Results viewer 

<p>Results Viewer<p>
<h3>Heroku Hosted link</h3>
<a href="https://result-status.herokuapp.com/">https://result-status.herokuapp.com/</a>

Back End API is created using node.js and express.
# Banck End Git link
https://github.com/Vijaya9418/backend-API

# Components
<h1>App.js</h1>
It is a functionaly component.<br>
First we stat with App.js here I added routing using "react-router-dom".<br>
<img width='100px' src='./images/struct.jpg'><br>
App.js also import Navbar.js component from componet/nav folder and set<br> on top of all components to visible in all pages.
<br>
It has 2 routs<br>
/ and /about 2 routs are added to this simple app.<br>
<h1>Home.js</h1>
it is a class component.<br>
/ will render Home.js component. I has the input form that allows user to enter roll numbers comma seperated and submit.<br>
If the input format is not valid then a alert will be displayed.<br>
For performance 5 results at a time is set as limit it can be increased my calling API multiple times one after other.


<img hight='300px' width='500px' src='./images/home.jpg'><br>
in Home component on submit of the form it will pass data to the <h3>getnumbers()</h3>  function this splits the daa
and validated the data format and make the input string into arry of integers.<br>
This funciton will display alert message if the input format is invalid.<br>
<br>This funciton will call getdata function with array passed as parameter this will call setdatatxt(arr) funciton.<br>
<br>
setdatatxt(arr) is a synchronous funcitons it will wait for data to fetch form the provided api and sets the data and calls the 
funciton makeTable.
<br>
makeTable(a,b) function will make dictionary form the given input which can be used to build a table by table component.
<br><br>
Table component will take the dicitonary as props and build the table using javascirpt dom manupulations.

If the input data is all good this funciton will pass data to
<h1>Test Cases 1: </h1>
<p>2,3</p> output below image<br>
<img hight='300px' width='500px' src='./images/case2.jpg'><br>
<h1>Test Cases 2: </h1>
<p>Input: 2,3,300,30,5</p> output below image<br>
<img hight='300px' width='500px' src='./images/case5.jpg'><br>
<h1>Test Cases 3: </h1>
<p>345,63,127</p> output below image<br>
<img hight='300px' width='500px' src='./images/case12.jpg'><br>

<img hight='300px' width='500px' src='./images/case12a.jpg'><br>
as the sate gets update React will automatically update the state every where which results in call of <br>
<h1>Table.js</h1>
it is a class component.<br>
Table component it will create table using the data pased as props.
<br><br>
In Table this will receive the top N frequency words object in the form of props and crate a Table and display it to users.

<img hight='300px' width='500px' src='./images/aboutme.jpg'><br>
<h1>Navbar.js</h1>
it is a functional component.<br>
It returns a nav bar that is build using bootstrap 4.
<h1>About.js</h1>
it is a class component.<br>
About.js component is all about me any my skills. Please check my skills match this role really well.<br>

<img hight='300px' width='500px' src='./images/myskills.jpg'><br>
I am best in desigining websites and good in React.js ,Javascript ,CSS. I  also know PHP and many other technologies like redux ,using of firebase firestore.<br>
I am quick learner and hard worker. 
<br>In the past 3 years I learned so many skills I am interested in making websites and Android Applications.

<h4>-Thank you</h4>


