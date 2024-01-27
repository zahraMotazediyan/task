import {configureStore} from "@reduxjs/toolkit";

////reducer
import apiFormReducer from "../featuers/apiForm/apiFormSlice";
import apiOtpReducer from "../featuers/apiOtp/apiOtpSlice";
import apiProfileReducer from "../featuers/apiProfile/apiProfileSlice";

import {logger} from "redux-logger/src";

const store = configureStore({
    reducer: {
        apiForm: apiFormReducer, apiOtp: apiOtpReducer, apiUser: apiProfileReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store;