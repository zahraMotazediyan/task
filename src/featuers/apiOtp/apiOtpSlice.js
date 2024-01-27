import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: "",
    data: {}
}

const TOKEN_URL = 'https://back-dw-stage.morsa.local/identity/v1/Accounts/LoginWithPhoneNumber';
const header = {
    'Content-Type': 'application/json',
}
export const apiFetchOtp = createAsyncThunk("apiOtp/apiFetchOtp", async (phoneNumber, otpCode) => {
    try {
        const dataToSend =
            {phoneNumber: phoneNumber.phoneNumber, ConfirmCode: phoneNumber.otpCode.join("")}
        const response = await axios.post(TOKEN_URL,
            dataToSend
            ,
            {headers: header});
            localStorage.setItem("accessToken",response.data.data.accessToken)
        console.log(response.data)
        return response.data
    } catch (error) {
        alert(`Error fetching data: ${error.message || "Unknown error"}`);
        throw error;
    }
});


const apiOtpSlice = createSlice({
    name: "apiOtp",
    initialState,
    extraReducers:
        (builder) => {
            builder.addCase(apiFetchOtp.pending, (state) => {
                state.loading = true;
            });
            builder.addCase(apiFetchOtp.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = "";
            });
            builder.addCase(apiFetchOtp.rejected, (state, action) => {
                state.loading = false;
                state.data = {};
                state.error = action.error.message;
            });
        },
});


export default apiOtpSlice.reducer;


// Authorization: `Bearer ${localStorage.getItem("accessToken")}`
