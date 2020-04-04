import React, {useState} from 'react';
import './styles.css';
import {Link, useHistory} from 'react-router-dom';
import { FiLogIn} from 'react-icons/fi';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';



export default function Logon(){
   const [id,setId]= useState('');
   const history = useHistory();

 async  function handLogin(e)
   {
      e.preventDefault();
      try {
         const response = await api.post('sessions',{id});
         localStorage.setItem('ongId',id);
         localStorage.setItem('ongName',response.data.name);

         history.push('/profile');
      } catch (err) {
         alert("Falha no Login.Tente novamente")
      }

   }

   return( 
   <div className="Logon-container">
       <section className="form">
       <img src={logoImg} alt='Be The Heroe'/>
       
       <form onSubmit ={handLogin}>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID"
          value = {id}
          onChange= {e => setId(e.target.value)}/>
          <button className="button" type="submit">Entrar</button>
          <Link className="back-link" to="/register">
             <FiLogIn size= {16} color= "#E02041"/>
             Não tenho cadastro
          </Link>
          </form>

       </section>
       <img src={heroesImg} alt='Heroes'/>
   </div>
   );

}
