import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const API_USERS_URL = "http://localhost:3001/users";

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const createUserThunk = createAsyncThunk(
  "users/createUserThunk",
  async (newUser, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/users", newUser);
      // const data = await axios.post("http://13.125.246.47:8080/api/member/signup", newUser);
      console.log(data)
      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  "user/findUser",
  async (userInfo, thunk) => {
    console.log("test");
    try {
      // const data =
        await // axios.post('http://localhost:3001/user/login', userInfo)
        axios
        .post('http://localhost:3001/users', userInfo)
          .then((response) => {
            // if (response.data.success) {
              localStorage.setItem(
                "accessToken",
                response.headers["access_token"]
              );
              localStorage.setItem(
                "refreshToken",
                response.headers["refresh_token"]
              );
            // } else if (response.status !== 200) {
            //   alert("서버와 연결에 실패했습니다.");
            // } else {
            //   alert("이메일과 비밀번호를 확인해주세요.");
            // }
          });
      // console.log(data);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [createUserThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users.push(action.payload);
    },
  },
});

export const {} = usersSlice.actions;
export default usersSlice.reducer;
