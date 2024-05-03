import { Routes ,Route, Link,  BrowserRouter  } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Cryptocurrencies, Cryptodetails, Exchanges, 
  Homepage, Navbar, News } from './components';
import { useState } from 'react';




function App() {
     const [timePerios,setTimePeriod]  = useState('7d')


     

  return (
    <div className="app">
       <div className="navbar">
        <Navbar />         
        </div>
      <div className="main">
       <Layout >
        <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />  
               <Route  path="/exchanges" element={<Exchanges />} />      
               <Route  path='/cryptocurrencies' element={<Cryptocurrencies />}/>           
               <Route  path='/crypto/:coinId' element={<Cryptodetails/> }/>                      
               <Route  path='/news' element={<News/>}  /> 
            </Routes>
        </div>
       </Layout>
        <div className="footer" >
             <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
              Cryptoverse <br />
              All rights reserved
             </Typography.Title>
             <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
             </Space>
      </div>
        </div>
    </div>
  );
}

export default App;
