import { api } from "./Api";

export const getContactData = async () => {
  try {
    const res = await api.get("/contact");
    if (res.data) {
      const contactData = res.data.contacts.data;
      return contactData;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const addNewContact = async (formData) => {
  try {
    const res = await api.post("/contact", formData);
    console.log(res);
    if (res.data) {
      return res.data.success;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};

export const getSingleContact = async (id) => {
  try {
    const res = await api.get(`/contact/${id}`);
    if (res.data) {
      return res.data.contact;
    }
  } catch (e) {
    return { error: true, msg: e.message };
  }
};
