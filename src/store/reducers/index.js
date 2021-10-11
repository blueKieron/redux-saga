export function defReducer(state = {}, action) {
  // console.log('defReducer')
  switch (action.type) {
    case "login":
      console.log(action);
      return {};
    default:
      break;
  }
  return Object.assign({}, state, action);
}
