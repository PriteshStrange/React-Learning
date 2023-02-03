import  React  from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



// const fname = "Hello World"

// ReactDOM.render(
//   <>
//     <h1>Hello {fname}</h1>
//     <p>Example number is {Math.random()}</p>
//   </>
// ,
//     document.getElementById('root'))



// const name = "hello"
// const date = new Date()
// console.log("first",date)
// let day = date.getDate();
// let month = date.getMonth() +1;
// let year = date.getFullYear();
// let CurrentDate = `${day}/${month}/${year}`
// // let CurrentDate = new Date().toLocaleDateString()
// let CurrentTime = new Date().toLocaleTimeString()

// ReactDOM.render(
//   <>
//     <h1>{`The Name is ${name}`}</h1>
//     <p>{`Current Date is ${CurrentDate}`}</p>
//     <p>{`Current Time is ${CurrentTime}`}</p>
//   </>,
// document.getElementById('root')
// )


const img = "https://picsum.photos/seed/picsum/200/300";
const img1 = "https://picsum.photos/seed/picsum/200/200";
const links = "https://mail.google.com/mail/u/0/?tab=rm&ogbl"





ReactDOM.render(
  <>
  
  
  <App/>
  <img src={img}/>
  <a href={links} target="ew">
  <img src={img1}/>
  </a>
  

  </>,
  document.getElementById('root')
)

