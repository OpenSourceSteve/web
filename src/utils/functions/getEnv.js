export const getEnv = () => {
    const host = window.location.host
    console.log(host)
    if (host === "localhost:3000") {
        return "dev"
    }
    const ENV = host.split(".")[0]
    return ENV === "www" ? "prod" : ENV
}