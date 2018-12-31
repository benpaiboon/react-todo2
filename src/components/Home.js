import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 10)
        })
      })
  }
  render() {
    const postList = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ) : (<p className="center">No post yet</p>)
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {postList}
      </div>
    )
  }
}

export default Home;