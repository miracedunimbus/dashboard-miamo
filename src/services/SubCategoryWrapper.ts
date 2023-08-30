const genres: genresType[] = [
    { genreID: 1, genre: "Üç Boyutlu Algı", percentage: 0 },
    { genreID: 2, genre: "Parça Bütün İlişkisi", percentage: 0 },
    { genreID: 3, genre: "Bütünsel Algı", percentage: 0 },
    { genreID: 4, genre: "Akıl Yürütme", percentage: 0 },
    { genreID: 5, genre: "Matematik Okuryazarlığı", percentage: 0 },
    { genreID: 6, genre: "Müzik ve Ritim Yoluyla İfade", percentage: 0 },
    { genreID: 7, genre: "Kısa Süreli Hafıza", percentage: 0 },
    { genreID: 8, genre: "Dikkat", percentage: 0 },
    { genreID: 9, genre: "Odaklanma", percentage: 0 },
    { genreID: 10, genre: "Okuma Becerileri", percentage: 0 }
];

type genresType = {
    genreID: number,
    percentage?: number,
    genre: string,
    studentAmount? : number,
    percentile?: number,
    totalGamePoint?: number,
    totalStarCount?: number
}

type yearGenresType = {
    month: string,
    monthlyGameData: genresType[]
}

const gorselUzamsal = [1, 2, 3];
const matematikMantıksal = [4, 5];
const muziksekRitmik = [6];
const dikkatHafıza = [7, 8, 9];
const sozDilbilimsel = [10]

export function SubCategoryWrapper(params: genresType[], page: number) : number[] {

    console.log(params)

    const data1 = params.find(e => e.genreID === 1)
    const data2 = params.find(e => e.genreID === 2)
    const data3 = params.find(e => e.genreID === 3)
    const data4 = params.find(e => e.genreID === 4)
    const data5 = params.find(e => e.genreID === 5)
    const data6 = params.find(e => e.genreID === 6)
    const data7 = params.find(e => e.genreID === 7)
    const data8 = params.find(e => e.genreID === 8)
    const data9 = params.find(e => e.genreID === 9)
    const data10 = params.find(e => e.genreID === 10)

    const gorselUzamsalList = [
        ...(data1 ? [data1] : []),
        ...(data2 ? [data2] : []),
        ...(data3 ? [data3] : [])
    ]

    const matematikselMantiksalList = [
        ...(data4 ? [data4] : []),
        ...(data5 ? [data5] : [])
    ]

    const müzikselRitmikList = [
        ...(data6 ? [data6] : []),
        ...(data7 ? [data7] : [])
    ]

    const dikkatHafizaList = [
        ...(data8 ? [data8] : []),
        ...(data9 ? [data9] : [])
    ]

    const sozelDilbilimselList = [
        ...(data10 ? [data10] : [])
    ]

    if (page === 1) {
        const data1Count = result(gorselUzamsalList)
        const data2Count = result(matematikselMantiksalList)
        const data3Count = result(müzikselRitmikList)
        const data4Count = result(dikkatHafizaList)
        const data5Count = result(sozelDilbilimselList)

        console.log([data1Count, data2Count, data3Count, data4Count, data5Count])


        const chart1Data: number[] = [data1Count, data2Count, data3Count, data4Count, data5Count]
        return chart1Data;
    }

    if (page === 2) {
        const data1Count = resultWithStudent(gorselUzamsalList)
        const data2Count = resultWithStudent(matematikselMantiksalList)
        const data3Count = resultWithStudent(müzikselRitmikList)
        const data4Count = resultWithStudent(dikkatHafizaList)
        const data5Count = resultWithStudent(sozelDilbilimselList)

        const chart2Data: any[] = [data1Count, data2Count, data3Count, data4Count, data5Count]
        return chart2Data;
    }

    
    return []
}

function result(params: genresType[]) {
    let totalPercentage = 0;

    for (const item of params) {
        if (item?.percentage !== undefined) {
            totalPercentage += (item.percentage * 100);
        }
    }
    console.log(totalPercentage)
    return totalPercentage;
}

function resultWithStudent(params: genresType[]) {
    let totalPercentage = 0;

    for (const item of params) {
        console.log(item.percentage + ' - ' + item.genre)
        if (item?.percentile !== undefined) {
            totalPercentage += (item.percentile * 100);
        }
    }

    return totalPercentage;
}

export function Monthly(params: yearGenresType[], page: number) {
    const monthList : any[] = []
    const categoryList: any[] = []

    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        monthList.push(element)
    }

    for (let i = 0; i < monthList.length; i++) {
        const month = monthList[i]
        const data1 = month.find(e => e.genreID === 1)
        const data2 = month.find(e => e.genreID === 2)
        const data3 = month.find(e => e.genreID === 3)
        const data4 = month.find(e => e.genreID === 4)
        const data5 = month.find(e => e.genreID ===5)
        const data6 = month.find(e => e.genreID === 6)
        const data7 = month.find(e => e.genreID === 7)
        const data8 = month.find(e => e.genreID === 8)
        const data9 = month.find(e => e.genreID === 9)
        const data10 = month.find(e => e.genreID === 10)

        const gorselUzamsalList = [
            ...(data1 ? [data1] : []),
            ...(data2 ? [data2] : []),
            ...(data3 ? [data3] : [])
        ]

        const matematikselMantiksalList = [
            ...(data4 ? [data4] : []),
            ...(data5 ? [data5] : [])
        ]

        const müzikselRitmikList = [
            ...(data6 ? [data6] : []),
            ...(data7 ? [data7] : [])
        ]

        const dikkatHafizaList = [
            ...(data8 ? [data8] : []),
            ...(data9 ? [data9] : [])
        ]

        const sozelDilbilimselList = [
            ...(data10 ? [data10] : [])
        ]

        const data1Count = resultMonthly(gorselUzamsalList)
        const data2Count = resultMonthly(matematikselMantiksalList)
        const data3Count = resultMonthly(müzikselRitmikList)
        const data4Count = resultMonthly(dikkatHafizaList)
        const data5Count = resultMonthly(sozelDilbilimselList)

        const chartDataByMonth = [data1Count, data2Count,data3Count,data4Count,data5Count]
        categoryList.push(chartDataByMonth)
    }

    return  categoryList
}


function resultMonthly(params: any) {
    let totalGamePoint = 0;

    for (const item of params) {
        if (item?.totalGamePoints !== undefined) {
            totalGamePoint += item.totalGamePoints;
        }
    }
    return totalGamePoint;
}

export function setYearDataByDatas(params: any[]) {
    const gorsel: any[] = []
    const matematik: any[] = []
    const muzik: any[] = []
    const dikkat: any[] = []
    const sozel: any[] = []

    for (let i = 0; i < params.length; i++) {
        const element = params[i];
        gorsel.push(element[0])
        matematik.push(element[1])
        muzik.push(element[2])
        dikkat.push(element[3])
        sozel.push(element[4])
    }

    const returnObj = {
        gorsel,
         matematik,
         muzik,
         dikkat,
         sozel
    }

    return returnObj
}