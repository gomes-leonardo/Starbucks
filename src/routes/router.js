import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCoffees from "../coffee/allcoffees";
import Home from "../screens/home";
import Menu from "../screens/menu";
import Rewards from "../screens/rewards";
import {coffees} from '../utils/objects'


export default function Router(){

    return(
        <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element = {<Menu/>} path='/menu'/>
        <Route element ={<Rewards/>} path= '/rewards'/>
        
        {coffees.map(item =>
            <>
            <Route element={<AllCoffees nome={item.nome} image={item.image} marca={item.marca} valor={item.valor} description={item.description} type={item.type} desconto={item.desconto} fullDescription={item.fullDescription}/>}
            path={item.path}/>
            
            
            </>
            
            )}
        </Routes>
    )}