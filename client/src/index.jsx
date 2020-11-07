import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RenderRepos from './components/RenderRepos.jsx';
import axios from 'axios';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    axios.get('/repos')
    .then((response) => {
      this.setState({repos: response.data});
      console.log(this.state.repos);
    })
    .catch((err) => console.log('Error in componentDidMount'));
  }

  search (term) {
    // console.log(`${term} was searched`);
    // TODO
    // send POST request to /repos
    // $.ajax({
    //   url: 'http://localhost:1128/repos',
    //   type: 'post',
    //   data: {searched: term},
    //   dataType: 'json',
    //   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    //   success: (res) => console.log('Success', res),
    //   error: (res) => console.log('Error', res)
    // });
    axios.post('/repos', {
      searched: term
    })
    // .then((res) => console.log(res))
    .catch((err) => {console.log('Error in search post', err)});
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search}/>
      <RenderRepos repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));