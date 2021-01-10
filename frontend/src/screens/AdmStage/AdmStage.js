import React from 'react'
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import './Adm.css'
import { getUser } from '../../Services/Storage';
import UserProvider from '../../Services/providers/UserProvider';
import CardList from './cardList';
import {useLocation, useHistory} from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;


const AdmStage= ()=>{
    const history=useHistory()
    const location= useLocation()
    const[user,setUser]=React.useState()
    const [news,setNews]=React.useState()
    const [erro,setErr]=React.useState()
    React.useEffect(() => {
        console.log(location)
        userSet()

        dataNews() 
      }, [user]); 
      async function userSet(){
         /* await setUser(location.state.User) */
         await setUser(getUser().user)
      }
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
    <hr></hr>
      </Sider>
        </Menu>
    </Layout>
  </Layout> 
 )
 async function dataNews(){
    let myNews= await UserProvider.listMyNews(1)
    if(myNews){
        setNews(myNews)
    }else{
        setErr('nenhuma noticia cadastrada')
    }
 }
 function createNews(){
   history.push('/registerNews',{userid:1})
 }
 function createAdmin(){
  history.push('/creatAdmin')
}
}


export default AdmStage;