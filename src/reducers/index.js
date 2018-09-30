import { combinedReducers} from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectSubreddit from './selectSubreddit';

export default combinedReducers({
  postsBySubreddit,
  selectSubreddit
});
