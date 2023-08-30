import axios from "axios";

export async function getParentCat(userId) {
    try {
        const response = await axios.get(`https://edunimbus-django-backend.onrender.com/users/${userId}/`);
        const responseNewData = response.data
        console.log(responseNewData.result.data4)
        return responseNewData
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}


export async function getYearDataCat(userId) {
    try {
        const response = await axios.get(`https://edunimbus-django-backend.onrender.com/users/${userId}/`);
        const responseNewData = response.data

        const months: any[] = [];
        const yearData: any[] = [];

        for (let i = 0; i < responseNewData.result.data8.length; i++) {
            const element = responseNewData.result.data8[i].month;
            months.push(element)
            const elementData = responseNewData.result.data8[i].monthlyGameData;
            yearData.push(elementData)
        }

        const returnData = {
            months,
            yearData
        }

        return returnData
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
}