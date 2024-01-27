import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    error: "",
    data: []
}

const USER_URL = "https://back-dw-stage.morsa.local/digitalwallet/v1/DigitalWallets/GetCurrentUserDigitalWallet";
const header = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`
};

export const apiFetchUser = createAsyncThunk("apiUser/apiFetchUser", async () => {
    console.log(255)
    try {
        const response = await axios.get(USER_URL, {headers: header});
        const {data} = response.data;
        console.log("javab", data);
        return data
    } catch (error) {
        alert(`Error fetching data: ${error.message || "Unknown error"}`);
        throw error;
    }
})

const apiProfileSlice = createSlice({
    name: "apiUser",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(apiFetchUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(apiFetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        });
        builder.addCase(apiFetchUser.rejected, (state, action) => {
            state.loading = false;
            state.data = {};
            state.error = action.error.message;
        });
    },
});


export default apiProfileSlice.reducer;