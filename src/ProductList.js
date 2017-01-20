/**
 * Created by darwinmorales on 20/01/2017.
 */

import React from 'react';
import './product.css'

window.Data = (function () {
    function generateVoteCount() {
        return Math.floor((Math.random() * 50) + 15);
    }

    const data = [
        {
            id: 1,
            title: 'Yellow Pail',
            description: 'On-demand sand castle construction expertise.',
            url: '#',
            votes: generateVoteCount(),
            submitter_avatar_url: 'images/avatars/daniel.jpg',
            product_image_url: 'images/products/image-aqua.png',
        },
        {
            id: 2,
            title: 'Supermajority: The Fantasy Congress League',
            description: 'Earn points when your favorite politicians pass legislation.',
            url: '#',
            votes: generateVoteCount(),
            submitter_avatar_url: 'images/avatars/kristy.png',
            product_image_url: 'images/products/image-rose.png',
        },
        {
            id: 3,
            title: 'Tinfoild: Tailored tinfoil hats',
            description: 'We already have your measurements and shipping address.',
            url: '#',
            votes: generateVoteCount(),
            submitter_avatar_url: 'images/avatars/veronika.jpg',
            product_image_url: 'images/products/image-steel.png',
        },
        {
            id: 4,
            title: 'Haught or Naught',
            description: 'High-minded or absent-minded? You decide.',
            url: '#',
            votes: generateVoteCount(),
            submitter_avatar_url: 'images/avatars/molly.png',
            product_image_url: 'images/products/image-yellow.png',
        },
    ];

    return data;
})();


/* eslint-disable no-undef */

const ProductList = React.createClass({
    getInitialState: function () {
        return {
            products: [],
        };
    },
    componentDidMount: function () {
        this.updateState();
    },
    updateState: function () {
        const products = Data.sort((a, b) => {
            return b.votes - a.votes;
        });
        this.setState({products: products});
    },
    handleUpVote: function (productId) {
        Data.forEach((el) => {
            if (el.id === productId) {
                el.votes = el.votes + 1;
                return;
            }
        });
        this.updateState();
    },
    render: function () {
        const products = this.state.products.map((product) => {
            return (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    url={product.url}
                    votes={product.votes}
                    submitter={product.submitter}
                    submitter_avatar_url={product.submitter_avatar_url}
                    product_image_url={product.product_image_url}
                    onVote={this.handleUpVote}
                />
            );
        });
        return (
            <div className='ui items'>
                {products}
            </div>
        );
    },
});


const Product = React.createClass({
    handleUpVote: function () {
        this.props.onVote(this.props.id);
    },
    render: function () {
        return (
            <div className='item'>
                <div className='image'>
                    <img src={this.props.product_image_url}/>
                </div>
                <div className='middle aligned content'>
                    <div className='ui grid'>
                        <div className='three wide column'>
                            <div className='ui basic center aligned segment'>
                                <a onClick={this.handleUpVote}>
                                    <i className='large caret up icon'></i>
                                </a>
                                <p><b>{this.props.votes}</b></p>
                            </div>
                        </div>
                        <div className='twelve wide column'>
                            <div className='header'>
                                <a href={this.props.url}>
                                    {this.props.title}
                                </a>
                            </div>
                            <div className='meta'>
                                <span></span>
                            </div>
                            <div className='description'>
                                <p>{this.props.description}</p>
                            </div>
                            <div className='extra'>
                                <span>Submitted by:</span>
                                <img
                                    className='ui avatar image'
                                    src={this.props.submitter_avatar_url}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
});


export default ProductList
