
import './App.css';
import 'antd/dist/antd.css';
import { Menu, Layout, Row, Col } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';
import Icon from './Figma'


function App() {
  const { Header, Footer, Content } = Layout;
  return (
    <>
        <Layout style={{backgroundColor: "#ff9c6e"}}>
          <Header style={{backgroundColor: "#ff9c6e", marginTop: '10px'}}>
            <Row>
              <Col span={4}>
                <Icon>
                </Icon>
              </Col>
              <Col span={10}>
              </Col>
              <Col span={10}>
                <Menu mode="horizontal" style={{backgroundColor: "#ff9c6e", borderBottom: 'none'}}>
                  <Menu.Item style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    Home
                  </Menu.Item>
                  <Menu.Item style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    Projects
                  </Menu.Item>
                  <Menu.Item style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    Resume
                  </Menu.Item >
                  <Menu.Item style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    About
                  </Menu.Item>
                  <Menu.Item style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    Contact
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          <Content style={{marginBottom: '280px', marginTop: '40px'}}>
            <Row>
              <Col span={6}>
              
              </Col>
              <Col span={10}>
              <div>
                  <h1 style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    Welcome everyone to my personal portfolio site! My name is
                  </h1>
                  <h1 style={{fontFamily: 'Acme', fontSize: '100px', letterSpacing: '4px', margin: '0px'}}>
                    Jesus DeLintt
                  </h1>
                  <h2 style={{fontFamily: 'Acme', fontSize: '30px', fontWeight: 'bolder'}}>
                    I am looking to grow my skills in software engineering and data science.
                  </h2>
                  <h2 style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    I have experience in React.js, Node.js, Python, data visualization, Pandas
                    and
                  </h2>
                  <h2 style={{fontFamily: 'Acme', fontSize: '20px'}}>
                    I'm ready to learn more!
                  </h2>
                </div>
              </Col>
              <Col span={8}>
              
              </Col>
            </Row>


          </Content >
          <Footer style={{backgroundColor: "#ff9c6e", marginBottom: '15px'}}>  
          <Row>
            <Col span={6}>
            </Col>
            <Col span={6} style={{alignContent: 'center', justifyContent: 'center'}}>
            <LinkedinOutlined style={{fontSize: '45px'}} /> 
            </Col>
            <Col span={6}>
            <GithubOutlined style={{fontSize: '45px'}} /> 
            </Col>
            <Col span={6}>
            <MailOutlined style={{fontSize: '45px'}} />   
            </Col>
          </Row>
          </Footer>
        </Layout>
    </>
  );
}

export default App;
