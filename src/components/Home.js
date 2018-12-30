import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
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
          <div className="container">
            <div className="post card" key={post.id}>
              <div className="card-content">
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (<p className="center">No post yet</p>)
    return (
      <div className="todos collection">
        {postList}
      </div>
    )
  }
}

export default Home;