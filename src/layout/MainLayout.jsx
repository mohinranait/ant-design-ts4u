
import { ConfigProvider, Layout, Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { GoHome } from "react-icons/go";
import "./MainLayout.css"
import { headerMenus, leftMenus } from '../datas/Data'
import { FaBars } from "react-icons/fa6";



const MainLayout = () => {
    const navigate = useNavigate()
    const [collaps, setCollaps] = useState(false)
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#1c2cba'
            }
        }}>
            <Layout className='main-container'>
                <Header style={{ background: 'white', padding: 0 }}>
                    <Layout>
                        <Sider>
                            <FaBars size={25} style={{ color: 'white', }} onClick={() => setCollaps(!collaps)} />
                            <Link to={'/'} style={{ fontSize: '25px', fontWeight: 'bold', color: 'white', paddingLeft: '8px' }}>Logo</Link>
                        </Sider>
                        <Content>
                            <Menu items={headerMenus} mode='horizontal' />
                        </Content>
                    </Layout>
                </Header>
                <Layout>
                    <Sider theme='light' collapsed={collaps}>
                        <Menu mode='inline' onClick={(item) => {
                            // item.key
                            navigate(item.key)
                        }} items={leftMenus} />
                    </Sider>
                    <Content className='content-wrap'>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>

        </ConfigProvider>
    )
}

export default MainLayout
