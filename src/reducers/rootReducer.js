const initState = {
  posts: [
    { id: '1', title: 'rootReducer Title1', body: 'body1' },
    { id: '2', title: 'rootReducer Title2', body: 'body2' },
    { id: '3', title: 'rootReducer Title3', body: 'body3' }
  ]
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;