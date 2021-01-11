import Api from "../Api";
import {_retrieveData,_storeData} from '../Storage'

var list = async () => {
    try{ 
        let r = await Api.get(`/list-all`);
        return r.data;
    } catch(err){
        throw err;
    }
}

var buscar= async(data)=>{
    try{
        let r =await Api.post('/search',data)
        return r.data;
    }catch(err){
        throw err;
    }
}

var Gostei = async (id)=>{
    try{
       /*  console.log('to aqui') */
        let r =await Api.get(`/liked/${id}`)
        return r.data;
    }catch(err){
        throw err;
    }
}

var Login = async(data)=>{
    try{ 
        let r = await Api.post('/login',data);
        if(r.data.auth){
            _storeData("auth",r.data.auth)
            _storeData("user",r.data.usuario)
            _storeData("token",r.data.token)
        }
        return r.data;
    } catch(err){
        throw err;
    }
        
}

const GuestProvide={
    list:list,
    buscar:buscar,
    Gostei:Gostei,
    Login:Login
}

export default GuestProvide;