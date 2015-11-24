import alt from '../alt';
import RepoActions from '../actions/RepoActions'

class RepoStore {
  constructor() {
    this.bindActions(RepoActions);
    this.repos = false;
    this.loadingStatus = false;
  }
  onFetchRepos(repos) {
    this.repos = repos;
  }

  onLoadingRepos(status) {
    this.loadingStatus = status;

  }

}


export default alt.createStore(RepoStore, 'RepoStore');