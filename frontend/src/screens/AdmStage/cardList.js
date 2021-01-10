import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Button, Card, Input } from 'antd'
import {LikeOutlined} from '@ant-design/icons'
import GuestProvide from '../../Services/providers/GuestProvide'
import UserProvider from '../../Services/providers/UserProvider'
import {useHistory} from 'react-router-dom'
const CardList= (props)=>{
   const [like,setlike]=React.useState(false)
   const [likecount,setLikecount]=React.useState()
   const [deletenews,setDelete]=React.useState(false)
   const history=useHistory()
   React.useEffect(() => {
    setLikecount(props.news.gostei)
  }, []);
  function formatData(val){
    let ano=val.slice(0,4)
    let mes=val.slice(5,7)
    let dia=val.slice(8,10)
    let hora=val.slice(11,19)
    return`${dia}/${mes}/${ano}  ${hora}`
  }
    return(
      deletenews ? (
        <Fragment></Fragment>
      ):(
        <div  className="site-card-border-less-wrapper" style={{backgroundColor:'#f0f2f5',deletenews}}>
         <Card title={props.news.titulo}  style={{ width: '100%' }}>
          <img src={props.news.imagem} alt='imagem'></img>
          <p>{props.news.noticia}</p>
          <p>{formatData(props.news.createdAt)}</p>
          {like ? (
             <Fragment>
              {likecount} pessoas gostaram dessa noticia
              </Fragment>
          ):(
            <Fragment>
              <LikeOutlined  style={{cursor:'pointer'}} height={50} width={50}  /> {likecount}
            </Fragment>
          )}
          <Button style={{margin:12}} onClick={editar}> Editar </Button>
          <Button type='primary' danger onClick={excluir}> Excluir</Button>
          
        </Card>
        
        <hr></hr> 
  </div>

      )
      
  )
  async function excluir(){
    console.log(props.news.idNews)
    let res= await UserProvider.excluir(props.news.idNews)
    setDelete(true)
  }
  async function editar(){
    history.push('/updateNews',props.news)
  }

}

export default CardList