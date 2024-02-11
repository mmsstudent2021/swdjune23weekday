import { api } from "./Api";

export const Register = async (data) => {
  try {
    const res = await api.post("/register", data);
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const Login = async (formData) => {
  try {
    const res = await api.post("/login", formData);
    const { data } = res;

    if (data.token) {
      localStorage.setItem("auth", JSON.stringify(data.token));
    }
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const getProfile = async () => {
  try {
    const res = await api.get("/user-profile");
    return res;
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
