
import './App.css';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { Layout } from 'antd';
import { MailOutlined } from '@ant-design/icons';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <>
      <Layout style={{backgroundColor: "#b5f5ec"}}>
        <Sider style={{backgroundColor: "#b5f5ec"}}>
          <Menu style={{backgroundColor: "#b5f5ec"}}>
              <Menu.Item icon={<MailOutlined />}>

              </Menu.Item>
              <Menu.Item>
                
              </Menu.Item>
              <Menu.Item>
                
              </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{backgroundColor: "#b5f5ec"}}>
          <Header style={{backgroundColor: "#b5f5ec"}}>
            <Menu mode="horizontal" style={{backgroundColor: "#b5f5ec"}}>
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
          <Content style={{marginBottom: '150px'}}>
            <div>
                <h1>
                  Welcome everyone to my personal portfolio site!
                </h1>
                <h2>
                  I am looking to grow my skills in software engineering and data science. Check out my experience and recent projects in
                  both fields
                </h2>
            </div>
          </Content >
          <Footer style={{backgroundColor: "#b5f5ec"}}>
            <Menu style={{backgroundColor: "#b5f5ec"}}>
                <Menu.Item icon={<MailOutlined />}>

                </Menu.Item>
                <Menu.Item>
                  
                </Menu.Item>
                <Menu.Item>
                  
                </Menu.Item>
              </Menu>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
