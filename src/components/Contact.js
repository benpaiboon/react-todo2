import React, { Component } from 'react'
import axios from 'axios';

class Contact extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get('http://localhost:5000/api/books')
      .then(res => {
        this.setState({
          users: res.data.slice(0, 9)
        })
      })
  }
  render() {
    const userList = this.state.users.length ? (
      this.state.users.map(user => {
        return (
          <div className="col s12 m4" key={user._id}>
            <div className="card">
              <div className="card-content">
                <br />
                <p>{user.name}</p>
                <p>{user.department}</p>
                <p>{user.role}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (<p className="center">No user yet</p>)
    return (
      <div className="container user">
        <h4 className="center">users</h4>
        <div className="row">
          {userList}
        </div>
      </div>
    )
  }
}

export default Contact
