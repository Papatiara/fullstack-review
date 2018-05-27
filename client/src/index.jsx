import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import Repo from './components/Repo.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
    this.get = this.get.bind(this)
    this.send = this.send.bind(this)
  }
  send(message) {
    fetch('http://localhost:1128/repos', {
      body: JSON.stringify(message),
      method: 'POST',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       },
        }).then(res => {
          this.get()

        }).catch(err => err);
} 
get() { 
  $.ajax({
    url: 'http://localhost:1128/repos',
    method: 'GET',
    // dataType:
    success: (res) => {
         this.setState({
         repos: res
       })
    }
});
} 
  search (term) {
    console.log(`${term} was searched`);
    var obj = {
      user: term
    }
    this.send(obj);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
       <Repo repos={this.state.repos}/>
       {this.state.repos.map((elem, key) =>
      <RepoList elem={elem.RepoName} url={elem.url} key={key}/>
      )}  
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));