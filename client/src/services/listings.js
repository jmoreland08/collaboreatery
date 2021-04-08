import api from "./apiConfig";

export const getListings = async () => {
  try {
    const response = await api.get("/listings");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getListing = async (id) => {
  try {
    const response = await api.get(`/listings/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createListing = async (listing) => {
  try {
    const response = await api.post("/listings", listing);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateListing = async (id, listing) => {
  try {
    const response = await api.put(`/listings/${id}`, listing);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteListing = async (id) => {
  try {
    const response = await api.delete(`/listings/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

