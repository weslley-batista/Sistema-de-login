import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

const Private = ({ Item }) => {
  const signed = false;
                      {/*Item passado (Home)*/}      
  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          {/*Privada pois só vai ter acesso quando estiver logado*/}
          <Route exact path='/home' element={<Private Item={Home}/>} />
          <Route path='/' element={<Signin/>} />
          <Route exact path='/signup' element={<Signup />} />
          {/*Quando o usuario tentar acessar um page aleatoria será direcionado ao signin*/}
          <Route path='*' element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp;