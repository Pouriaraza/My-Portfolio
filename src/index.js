import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/style.scss';
import './styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactFullpage from '@fullpage/react-fullpage';
// import './styles/style.scss';
// import Header from "./Components/Header/header";
// import HomeBanner from "./Components/Banners/IndexBanner";
// import Profile from './Components/Profile/profile';

// const Fullpage = () => (
//   <ReactFullpage
//     //fullpage options
//     navigation
//     licenseKey = {'YOUR_KEY_HERE'}
//     scrollingSpeed = {1000} /* Options here */

//     render={({ state, fullpageApi }) => {
//       return (
//         <ReactFullpage.Wrapper>
//     <Header />

//           <div className="section header">

//           </div>
//           <div className="section">
//             <p>Section 2</p>
//           </div>
//         </ReactFullpage.Wrapper>
//       );
//     }}
//   />
// );

// ReactDOM.render(<Fullpage />, document.getElementById('root'));