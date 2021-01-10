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

const CriarAdm= () => {
    const history=useHistory()
    const[login,SetLogin]= React.useState('')
    const [nome,setNome]=React.useState('')
  const[senha,SetSenha]=React.useState('')
  const [erro,setErro]=React.useState('')
    
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  return (
      <div style={{margin:20,display:'flex  '}}>
        <Form
        {...formItemLayout}
            name="register"
        scrollToFirstError
        >
        <Form.Item
            name="login"
            label="login"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
            ]}
        >
            <Input onChange={e=> SetLogin(e.target.value)} />
        </Form.Item>
        <Form.Item
            name="Nome"
            label="Nome"
            rules={[
            {
                type: 'string',
                message: 'The input is not valid name',
            },
            {
                required: true,
                message: 'Please input your name',
            },
            ]}
        >
            <Input onChange={e=> setNome(e.target.value)} />
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!',
            },
            ]}
            hasFeedback
        >
            <Input.Password onChange={e=> SetSenha(e.target.value)} />
        </Form.Item>

        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject('The two passwords that you entered do not match!');
                },
            }),
            ]}
        >
            <Input.Password />
        </Form.Item>
        <Form.Item >
            <Button type="primary" onClick={createAdmin}>
            Register
            </Button>
            {erro}
        </Form.Item>
        </Form>
    </div>
  );


  async function createAdmin(){
      let data={
        login:login,
        senha:senha,
        nome:nome
      }
      console.log(data)
      let r = await UserProvider.createAdmin(data)
      console.log(r)
      if(r.msg== 'usuário criado com sucesso'){
          alert(r.msg)
          history.push('/ADM')
      }else{
          setErro(r.msg)
      }
  }

};

export default CriarAdm;