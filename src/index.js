import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ProductList from  './ProductList';
import SignUp from './sign-up/SignUp'
// import Tweet from './tweet/Tweet'

// const MainBody = () => {
//     return (
//         <div>
//             <Tweet/>
//             {/*<ProductList/>*/}
//         </div>
//     );
// }

ReactDOM.render(<SignUp/>, document.querySelector('#root'));
