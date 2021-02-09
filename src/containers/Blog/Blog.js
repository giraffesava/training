import React, { Component } from 'react';
import Posts from './Posts/Posts'
import {Route, Link} from 'react-router-dom'
import NewPost from './NewPost/NewPost'

import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/new-post">New Post</Link></li>
                    </ul>
                </nav>
            </header>
                <section className="Posts">
                </section>
                {/* <Route path="/" exact render={()=> <h1>Home</h1>} />
                <Route path="/" render={()=> <h1>Home 2</h1>} /> */}
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
            </div>
        );
    }
}

export default Blog;