function getData(setState) {
  setState((state, props) => {
    if (state.REQUESTING !== true && state.data === null) {
      fetch(localhost:3001/items)
      .then(resp => resp.json())
      .then(json => {
        JSON.parse(json)
        setState({ data: json, REQUESTING: false })
      })
      .catch(error => console.log(error.errors));
      
      return ({ REQUESTING: true })
      }
  });
  

}