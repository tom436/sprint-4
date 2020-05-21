import itemService from '../../services/itemService'

export function loadReviews() {
    return async dispatch => {
      try {
        const reviews = await itewmService.query();
        dispatch(setItems(items));
  
      } catch (err) {
        console.log('ReviewActions: err in loadReviews', err);
      }
    };
}

 