import React,{useState , useEffect} from 'react'
import { Button, Menu, Typography , Avatar  } from 'antd'
import { HomeOutlined ,MoneyCollectOutlined, 
    BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons/lib/icons'
import icon from "../images/cryptocurrency.png"
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [activeMenu, setActiveMenu ] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(()=>{
        const handleResize = ()=> setScreenSize(window.innerWidth);
        
        window.addEventListener('resize',handleResize)

        handleResize();
        //  clean useEffect
        return ()=> window.removeEventListener('resize', handleResize)
    },[])

    useEffect(()=>{
        if (screenSize < 700) {
            setActiveMenu(false)
        }else{
            setActiveMenu(true)
        }
    },[screenSize])

    // const items = [
    //     { label: 'Home', key: 'item-1' }, // remember to pass the key prop
    //     { label: 'Home', key: 'item-1' }, // remember to pass the key prop
    //     { label: 'Home', key: 'item-1' }, // remember to pass the key prop
    // ]
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large"/>
            <Typography.Title level={5} className='logo'>
                <Link to="/">Cryptoverse</Link>
            </Typography.Title>
            <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}> 
             <MenuOutlined />
            </Button>
        </div>
        {
            activeMenu && <Menu  theme="dark" >
            <Menu.Item icon={<HomeOutlined />} >
            <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />} >
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />} >
            <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />} >
            <Link to="/news" relative='path'>News</Link>
            </Menu.Item>
        </Menu>
        }
    </div>
  )
}

export default Navbar