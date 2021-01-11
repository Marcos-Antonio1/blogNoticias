export const _storeData = (type, data) => {
    try{
        localStorage.setItem(type, JSON.stringify(data));
    } catch(error){

    }
}
export const _retrieveData = (type) => {
    try{
        const value = localStorage.getItem(type);   
        return JSON.parse(value);
    } catch(error){

    }
}


export const getUser = () => {
    const usuario = _retrieveData("user");
    return usuario;
}
export const getToken = () => {
    const token = _retrieveData("token");
    return token;
}
export const getAuth = () => {
    const auth = _retrieveData("auth");
    return auth;
}