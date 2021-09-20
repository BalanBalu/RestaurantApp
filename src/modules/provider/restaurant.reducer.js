// App Imports
import {
    RESTAURANT_DETAILS, ADDRESS_DATA
} from './restaurant.action';

export const userInitialState = {
    isLoading: false,
    restaurantDetails: {}
}
export default (state = userInitialState, action) => {
    switch (action.type) {
        case RESTAURANT_DETAILS:
            return {
                ...state,
                restaurantDetails: action.restaurantDetails
            }
        case ADDRESS_DATA:
            return {
                ...state,
                addressData: action.addressData
            }
        default:
            return state;
    }
}



