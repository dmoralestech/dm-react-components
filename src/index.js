import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ProductList from  './ProductList';
// import CheckOutMain from './checkOut/CheckOutMain'
// import SignUp from './sign-up/SignUp'
// import FunctionAsChildComponent from './functionAsComponent/FunctionAsChildComponent'
// import Tweet from './tweet/Tweet'
import App from './reactChildren/App'
import LandingPage from './landing-page/LandingPage'

// const MainBody = () => {
//     return (
//         <div>
//             <Tweet/>
//             {/*<ProductList/>*/}
//         </div>
//     );
// }

ReactDOM.render(<LandingPage/>, document.querySelector('#root'));
