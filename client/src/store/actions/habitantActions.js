export function fetchHabitants() {
  return dispatch => {
    dispatch(fetchHabitantsBegin());
    return fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
      .then(handleErrors)
      .then(response => response.json())
      .then(json => {
        dispatch(fetchHabitantsSuccess(json['Brastlewark']));
        return json['Brastlewark'];
      })
      .catch(error => dispatch(fetchHabitantsFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_HABITANTS_BEGIN   = 'FETCH_HABITANTS_BEGIN';
export const FETCH_HABITANTS_SUCCESS = 'FETCH_HABITANTS_SUCCESS';
export const FETCH_HABITANTS_FAILURE = 'FETCH_HABITANTS_FAILURE';

export const fetchHabitantsBegin = () => ({
  type: FETCH_HABITANTS_BEGIN
});

export const fetchHabitantsSuccess = habitants => ({
  type: FETCH_HABITANTS_SUCCESS,
  payload: { habitants }
});

export const fetchHabitantsFailure = error => ({
  type: FETCH_HABITANTS_FAILURE,
  payload: { error }
});
