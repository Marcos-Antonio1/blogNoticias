import React from 'react'
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './Adm.css'
import { getUser, _storeData } from '../../Services/Storage';
import UserProvider from '../../Services/providers/UserProvider';
import CardList from './cardList';
import {useLocation, useHistory} from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;


const AdmStage= ()=>{
    const history=useHistory()
    const location= useLocation()
    const [news,setNews]=React.useState()
    const [erro,setErr]=React.useState()
    React.useEffect(() => {
        dataNews() 
      }, []); 
 return(
    <Layout>
    <Header>
        <p style={{color:'white', fontSize:30}}>Área do administrador</p>
    </Header>
    <Layout>
      <Content>
          <h1> Minhas Notícias</h1>
          {erro}
          {news && (
               news.map((element)=>{
                return(
                  <CardList news={element}></CardList>
                )
              })
          )}
      </Content>
        <Menu style={{backgroundColor:'white'}}>
      <Sider style={{backgroundColor:'white'}}>
      <Button style={{marginTop:20}} type="primary" block onClick={createAdmin}>
      Adicionar administrador
    </Button>
    <hr></hr>
    <Button onClick={createNews} type="primary" block>
      Criar noticia
    </Button>
    <hr></hr>
{/*     <Button type="primary" block>
      Atualizar dados
    </Button> */}
    <Button onClick={logout} type="primary" danger block>
      Sair
    </Button>
    <hr></hr>
      </Sider>
        </Menu>
    </Layout>
  </Layout> 
 )
 async function dataNews(){
   try{
     let user = getUser()
     console.log(user)
    let myNews= await UserProvider.listMyNews(user.User.idUser)
    if(myNews){
        setNews(myNews)
    }else{
        setErr('nenhuma noticia cadastrada')
    }
  }catch(err){
         setErr('houve um erro ao cadastrar as noticias ')
  }
 }
 function createNews(){
   history.push('/registerNews',{userid:1})
 }
 function createAdmin(){
  history.push('/creatAdmin')
}
 function  logout(){
  try{
      _storeData("user", null);
      _storeData("token", null);
      _storeData("auth", null);
      history.push('/login')
      
  } catch(error){
      throw error;
  }
}
}


export default AdmStage;