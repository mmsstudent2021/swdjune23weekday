import { Login } from "../../service/auth.service";

export const LoginAction = async (dispatch, formData) => {
  try {
    dispatch({ type: "process" });
    const res = await Login(formData);
    if (res.data) {
      dispatch({ type: "login", payload: res.data });
    } else {
      dispatch({ type: "error", payload: res.msg });
    }
  } catch (e) {
    dispatch({ type: "error", payload: res.msg });
  }
};
