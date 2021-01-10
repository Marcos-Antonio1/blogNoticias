import Api from "../Api";
import {_retrieveData,_storeData} from '../Storage'

var listMyNews = async (id) => {
    try{ 
        let r = await Api.get(`/user/list/${id}`);
        return r.data;
    } catch(err){
        throw err;
    }
}

var excluir= async (id) => {
    try{ 
        console.log('cheguei')
        let r = await Api.delete(`/user/delete/${id}`);
        return r.data;
        console.log(r)
    } catch(err){
        throw err;
    }
}

var update = async(id,data)=>{
    try{ 
        console.log('cheguei')
        let r = await Api.put(`user/update-news/${id}`,data)
        return r.data;
        console.log(r)
    } catch(err){
        throw err;
    }
}
var registerNews= async(data)=>{
    try{ 
        console.log(data)
        let r = await Api.post(`/user/create-news`,data)
        return r.data;
    } catch(err){
        throw err;
    }
}

var createAdmin =async(data)=>{
    try{ 
        let r = await Api.post(`/user/create`,data)
        return r.data;
    } catch(err){
        throw err;
    } 

}
const UserProvider={
    listMyNews:listMyNews,
    excluir:excluir,
    update:update,
    registerNews:registerNews,
    createAdmin:createAdmin
}

export default UserProvider;