import React from 'react'
import { Form, Input, Button,Select} from 'antd';
import 'antd/dist/antd.css'
/* import HotesstService from '../Services/providers/HotesstService' */
import {useHistory,useLocation} from 'react-router-dom'
import UserProvider from '../../Services/providers/UserProvider';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UpdateNews= () => {
  const location=useLocation()
  const history= useHistory()
  const[titulo,setTitulo]=React.useState('')
  const[noticia,setNoticia]=React.useState('')
  const[imagem,setImagem]=React.useState('')
  const [idNews,setIdNews]=React.useState('')
  const [loading,setLoading]=React.useState(false)
  const [err,setErr]=React.useState('')
  React.useEffect(() => {
    setNews()
  }, []);
   function setNews(){
       setTitulo(location.state.titulo)
       setNoticia(location.state.noticia)
       setImagem(location.state.imagem)
       setIdNews(location.state.idNews)
       console.log(location.state)
       console.log(titulo)
   }
  return (
      <div style={{margin:20, alignItems:"center",display:'flex',alignContent:"center", marginLeft:90}}>
        <Form {...layout} name="nest-messages" >
        <Form.Item name='Titulo' label="Titulo"  rules={[{ required: true, message: 'Preenchar o titulo' }]}>
            <Input  placeholder={titulo} onChange={event=> setTitulo(event.target.value)}  />
        </Form.Item>
        <Form.Item name='noticia' label="area da noticia" rules={[{ required: true, message: 'digite sua noticia' }]} >
            <Input.TextArea placeholder={noticia} onChange={event=> setNoticia(event.target.value)} value={noticia}/>
        </Form.Item>
        <Form.Item name='Imagem' label="Imagem" rules={[{ required: true, message: 'coloque o link da imagem da noticia' }]} >
            <Input placeholder={imagem} onChange={event=> setImagem(event.target.value)}  value={imagem}/>
        </Form.Item>
        <Form.Item>
            <Button onClick={UpdateNews} type="primary" >
            Atualizar
            </Button>
            {err}
        </Form.Item>
        </Form>
    </div>
  );

  async function UpdateNews(){
      let data={
          titulo:titulo,
          noticia:noticia,
          imagem:imagem,
      }
      console.log(data)
      let upd= await UserProvider.update(idNews,data)
      alert(upd.msg)
      history.push('/ADM')

  }

};

export default UpdateNews;