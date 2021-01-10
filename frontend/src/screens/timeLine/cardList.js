import React, { Fragment } from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import {LikeOutlined} from '@ant-design/icons'
import GuestProvide from '../../Services/providers/GuestProvide'
const CardList= (props)=>{
  const [like,setlike]=React.useState(false)
   const [likecount,setLikecount]=React.useState()
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
    <div className="site-card-border-less-wrapper">
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
              <LikeOutlined onClick={likedIt} style={{cursor:'pointer'}} height={50} width={50}  /> {likecount}
            </Fragment>
          )}
          
        </Card>
        
        <hr></hr> 
  </div>
  )
  async function likedIt(){
    console.log('to aqui')
      let r= await GuestProvide.Gostei(props.news.idNews)
      console.log(r)
      setlike(true)
      setLikecount(likecount+1)
  }
}

export default CardList