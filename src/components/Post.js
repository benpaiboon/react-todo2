import React, { Component } from 'react'
// import axios from 'axios';
import { connect } from 'react-redux';

class Post extends Component {
  // state = {
  //   post: null
  // }
  // componentDidMount() {
  //   let id = this.props.match.params.post_id;
  //   axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       })
  //     })
  // }
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (<p className="center">No post yet</p>)
    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => {
      return post.id === id;
    })
  }
}

export default connect(mapStateToProps)(Post);