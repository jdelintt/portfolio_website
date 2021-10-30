
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Layout, Row, Col } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import Icon from './Figma'


function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <>
        <Layout style={{backgroundColor: "#b5f5ec"}}>
          <Header style={{backgroundColor: "#b5f5ec"}}>
            <Menu mode="horizontal" style={{backgroundColor: "#b5f5ec"}}>
                <Menu.Item icon={<Icon/>} style={{marginTop: '3px', marginRight: '20px'}}>
                </Menu.Item>

                <Menu.Item>
                  Home
                </Menu.Item>
                <Menu.Item>
                  Projects
                </Menu.Item>
                <Menu.Item>
                  Resume
                </Menu.Item>
                <Menu.Item>
                  About
                </Menu.Item>
                <Menu.Item>
                  Contact
                </Menu.Item>
              </Menu>
          </Header>
          <Content style={{marginBottom: '565px', marginTop: '40px'}}>
            <Row>
              <Col span={6}>
              
              </Col>
              <Col span={10}>
              <div>
                  <h1>
                    Welcome everyone to my personal portfolio site!
                  </h1>
                  <h2>
                    I am looking to grow my skills in software engineering and data science. Check out my experience and recent projects in
                    both fields
                  </h2>
                </div>
              </Col>
              <Col span={8}>
              
              </Col>
            </Row>


          </Content >
          <Footer style={{backgroundColor: "#b5f5ec"}}>  
          <Row>
            <Col span={6}>
            </Col>
            <Col span={6} style={{alignContent: 'center', justifyContent: 'center'}}>
            <MailOutlined /> 
            </Col>
            <Col span={6}>
            <MailOutlined /> 
            </Col>
            <Col span={6}>
            <MailOutlined />   
            </Col>
          </Row>
          </Footer>
        </Layout>
    </>
  );
}

export default App;
