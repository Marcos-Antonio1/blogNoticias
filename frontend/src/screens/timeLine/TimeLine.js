import { Layout, Menu, Breadcrumb, Card} from 'antd';
import React, { Fragment } from 'react'
import GuestProvide  from  '../../Services/providers/GuestProvide';
import CardList from './cardList';
import { Input } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const { Search } = Input;

const TimeLine =()=>{
  const[data,setData]=React.useState([])
  const [search,setSearch]=React.useState(false)
  const [dadosBusca,setDadosBusca]=React.useState([])
  React.useEffect(() => {
    getData() 
  }, [dadosBusca]); 
  const onSearch = async (value) => {
     let bodyReq={
       name:`${value}` 
     }
     let r= await GuestProvide.buscar(bodyReq) 
     setDadosBusca(r)
     setSearch(true)
  }  
  return(
        <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display:'flex',flexDirection:'row'}}>
        <p style={{fontSize:20, color:'white'}}>Blog news sports  </p>
        <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
           style={{ width: 300, marginLeft: '70%',marginTop:10 }}
        />
        </Header>
        <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              {search  ?(
                <Fragment>
                    {dadosBusca.map((element)=>{
              return(
                <CardList news={element}></CardList>
              )
            })}         
                </Fragment>
                  
              ):(<Fragment>
                  {data.map((element)=>{
              return(
                <CardList news={element}></CardList>
              )
            })}
              </Fragment>)}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>blog News Sports 2021</Footer>
      </Layout>
    );
    
  async function getData(){
      let r= await GuestProvide.list();
      setData(r)
  }
  
}

export default TimeLine;