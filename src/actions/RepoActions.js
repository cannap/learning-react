import alt from '../alt';
import request from 'superagent';
class RepoActions {
  constructor() {

    this.generateActions(
      'fetchRepos',
      'loadingRepos'
    )
  }
  fetch(repoName = 'boostrap') {
    this.actions.loadingRepos(true);

    request.get('https://api.github.com/search/repositories').query({
      q: repoName,
      sort: 'stars'
    }).end((err, res) => {

      this.actions.fetchRepos(res.body)
      this.actions.loadingRepos(false)
    });




  }
}


export default alt.createActions(RepoActions)
