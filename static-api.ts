const StaticLogin = (email: string, password: string) => {
    if (email === "user@miamo.com" && password === "miamo123") {
        return {
            API_Token: "5c4907dfae52f7834787ebc2b46a5709",
            Refresh_Token: "bbd0cc3dd50120ca546563059a1ad9c2"
        }
    } else {
        return "unauthorization"
    }
}

export default StaticLogin