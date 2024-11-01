import apiClient from "./../services/api-client";

export const SendOtp = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  const obj = { email: data.email, code: data.code, fullName: data.fullName };
  await apiClient
    .post("/otp", obj)
    .then((res) => {
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};
