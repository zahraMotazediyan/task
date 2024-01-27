import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    errno: " ",
    data: {}
};


const BASE_URL = "https://back-dw-stage.morsa.local/identity/v1/Accounts/SendLoginConfirmCode";

const header = {
    'Content-Type': 'application/json'
};


export const fetchApiForm = createAsyncThunk("apiForm/fetchApiForm", async (phoneNumber) => {
    try {
        const response = await axios.post(BASE_URL, {phoneNumber}, {headers: header});
        const {success} = response.data;
        console.log(success);
        return success
    } catch (error) {
        console.log("code is not valid")
        throw error
    }
})

const apiFormSlice = createSlice({
    name: "apiForm",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchApiForm.pending, (state) => {
            state.loading = true
        });
        builder.addCase(fetchApiForm.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.data = action.payload
        });
        builder.addCase(fetchApiForm.rejected, (state, action) => {
            state.loading = true
            state.error = action.error.message
            state.data = {}
        });
    },
});

export default apiFormSlice.reducer;