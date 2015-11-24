import alt from '../alt';
import request from 'superagent';

class SingleRepoActions {

  constructor() {
    this.generateActions(
      'fetchSingleRepo' //Store: onFetchSingleRepo
    )
  }

  fetchRepo(repo) {
    request.get(repo).end((err, res) => {
      this.actions.fetchSingleRepo(res.body)
    })
  }
}


export default alt.createActions(SingleRepoActions);
