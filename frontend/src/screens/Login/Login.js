import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css' 
import './Login.css'
import GuestProvide from '../../Services/providers/GuestProvide';
import {useHistory} from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const [erro,setErro]=React.useState('')
    const history=useHistory() 
  
    return (
       <div className="container">
            <div className="Form-login">
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                >
                    <h3 className="texto-login">Login</h3>
                <Form.Item
                    name="username"
                    rules={[{ required: true, type:'email' }]}
                    style={{width:'70%',marginLeft:'17%'}}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={e=> setEmail(e.target.value)}  />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                    style={{width:'70%',marginLeft:'17%'}}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    onChange={e=>setPassword(e.target.value)}
                    />
                </Form.Item>
                    {erro}
                <Form.Item style={{marginLeft:'18%'}}>
                    <Button type="primary" htmlType="submit" className="login-form-button" onClick={Login}>
                    Logue
                    </Button>
                </Form.Item>
                </Form>        
            </div>
       </div>
    );

     async function Login(){
        let data={
            login:email,
            senha:password
        }
        try{
            let res= await GuestProvide.Login(data)
            console.log(res)
            if(res.msg){
                setErro(res.msg)
            }else{
            history.push('/ADM',res.usuario)
        }
        }catch(err){

        }
       
    } 
  };

  export default Login;