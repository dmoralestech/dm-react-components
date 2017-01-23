import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ProductList from  './ProductList';
// import CheckOutMain from './checkOut/CheckOutMain'
// import SignUp from './sign-up/SignUp'
// import FunctionAsComponent from './functionAsComponent/FunctionAsComponent'
// import Tweet from './tweet/Tweet'
import App from './reactChildren/App'

// const MainBody = () => {
//     return (
//         <div>
//             <Tweet/>
//             {/*<ProductList/>*/}
//         </div>
//     );
// }

ReactDOM.render(<App/>, document.querySelector('#root'));
