import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

class Photos extends Component {
  state = {
    photos: []
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        this.setState({
          photos: res.data.slice(0, 9)
        })
      })
  }
  render() {
    const photoList = this.state.photos.length ? (
      this.state.photos.map(photo => {
        return (
          <div className="col s12 m4" key={photo.id}>
            <div className="card">
              <div className="card-image">
                <img src={photo.thumbnailUrl} alt="test img" />
                <span className="card-title">Card Title</span>
                <button className="btn-floating btn-large halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></button>
              </div>
              <div className="card-content">
                <br />
                <p>{photo.title}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (<p className="center">No photo yet</p>)
    return (
      <div className="container photo">
        <h4 className="center">Photos</h4>
        <div className="row">
          {photoList}
        </div>
      </div>
    )
  }
}

export default Photos;