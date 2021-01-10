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

const RegisterNews= () => {
  const location=useLocation()
  const history= useHistory()
  const[titulo,setTitulo]=React.useState('')
  const[noticia,setNoticia]=React.useState('')
  const[imagem,setImagem]=React.useState('')
  const [idNews,setIdNews]=React.useState('')
  const [loading,setLoading]=React.useState(false)
  const [err,setErr]=React.useState('')
  React.useEffect(() => {
    console.log(location) 
  }, []);
   
  return (
      <div style={{margin:20, alignItems:"center",display:'flex',alignContent:"center", marginLeft:90}}>
        <Form {...layout} name="nest-messages" >
        <Form.Item name='Titulo' label="Titulo"  rules={[{ required: true, message: 'Preenchar o titulo' }]}>
            <Input   onChange={event=> setTitulo(event.target.value)}  />
        </Form.Item>
        <Form.Item name='noticia' label="area da noticia" rules={[{ required: true, message: 'digite sua noticia' }]} >
            <Input.TextArea  onChange={event=> setNoticia(event.target.value)} />
        </Form.Item>
        <Form.Item name='Imagem' label="Imagem" rules={[{ required: true, message: 'coloque o link da imagem da noticia' }]} >
            <Input  onChange={event=> setImagem(event.target.value)}  />
        </Form.Item>
        <Form.Item>
            <Button onClick={createNews} type="primary" >
            Criar Noticias
            </Button>
            {err}
        </Form.Item>
        </Form>
    </div>
  );

  async function createNews(){
      let data={
          titulo:titulo,
          noticia:noticia,
          imagem:imagem,
          id:location.state.userid
      }
      console.log(data)
      let upd= await UserProvider.registerNews(data)
      alert(upd.msg)
      history.push('/ADM') 

  }

};

export default RegisterNews;