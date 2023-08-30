import axios from "axios";

export async function getUserData(userId) {
  try {
    const response = await axios.get(`https://edunimbus-django-backend.onrender.com/users/${userId}/`);
    const responseNewData = response.data.result.data3
    const responseData3 = {
      amount: responseNewData.amount,
      result: responseNewData.result * 100
    }
    return responseData3;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function getUserCategoryData(userId) {
  try {
    const response = await axios.get(`https://edunimbus-django-backend.onrender.com/users/${userId}/`);
    const responseNewData = response.data
   return responseNewData
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export async function getUserCatYearData(userId) {
  try {
    const response = await axios.get(`https://edunimbus-django-backend.onrender.com/users/${userId}/`);
    const responseNewData = response.data
   return responseNewData
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}