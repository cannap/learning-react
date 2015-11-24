import React, {Component} from 'react';

import RepoActions from '../../actions/RepoActions';
import RepoStore from '../../stores/RepoStore';


import RepoItem from './RepoItem';


import {
  RaisedButton,
  RefreshIndicator,
  Paper,
  TextField,
  List,
  Avatar,
  ListItem
} from 'material-ui';
class Repos extends Component {
  constructor() {
    super();
    this.state = RepoStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {RepoStore.listen(this.onChange)}
  componentWillUnmount () {RepoStore.unlisten(this.onChange)}
  loadRepos = (e) => {
    //Stay
    e.preventDefault();
    let q = this.refs.search.getValue();

    if (q.length !== 0) {RepoActions.fetch(q);} else {
this.setState({
  repos : false
})
      //Show Error
    }

  }
  onChange (state) {this.setState(state);}

  loading () {
    if(this.state.loadingStatus) {console.log('Loading');
      return (
        <RefreshIndicator size={40} left={80} top={120} status="loading"/>
      )} else {
      return '';

    }
  }

  repos () {

if(this.state.repos) {


    return this.state.repos.items.map((repo) => {
    return(

<ListItem
  leftAvatar={<Avatar src={repo.owner.avatar_url} />}
   primaryText={<a href="#">repo.name</a>}
  secondaryText={
       <p>

{repo.description}
       </p>
     }



></ListItem>



    )
    })
    }
  }

  render () {
    return(
      <div className="container">
        {this.loading()}

        <Paper zDepth={1} className="text-center p-20">

          <form onSubmit={this.loadRepos}>
            <TextField id="search" ref="search" placeholder="Hint Text"/>
            <RaisedButton type="submit" label="Fetch Repos" secondary={true}/>

          </form>

        </Paper>

        <Paper zDepth={1}>
          <List>

{this.repos()}







          </List>

        </Paper>

      </div>

    );
  }

}
export default Repos;
