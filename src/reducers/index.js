import { combinedReducers} from 'redux';
import postsBySubreddit from './postsBySubreddit';
import selectedSubreddit from './selectedSubreddit';

export default combinedReducers({
  postsBySubreddit,
  selectedSubreddit
});
