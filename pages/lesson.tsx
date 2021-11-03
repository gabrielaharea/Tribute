/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
    
      <div id="main">
        <Head>
          <title>My lesson</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
          <link 
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" 
          rel="stylesheet"
          />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
        
        <section>
          <div className="main-section">
            <div id="column1"></div>
            <h1 id="title-tribute">TRIBUTE</h1>
            <div id="nav-bar">
             <div id="about">ABOUT</div>
             <div id="info">INFO</div>
             
            </div>
            
            <div id="img-div">
              <Image src="/imagine/firstphoto.jpg" width="480" height="290"  alt="" id="image"/>
            </div>
            <div>
              <h1  id="title">Dr. Normal Borlaug</h1>
              <div id="title-info">The man who <br/> saved a billion lives</div> 
              <div id="years">1914 - 2009</div>
            </div>

            <div id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to increase wheat yields - part of his life-long war on hunger.</div>
            
            <div id="columnsgol"></div>
            <div id="column2"></div>
          </div>
        </section>
      </div>
      <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script>
    </>  
  );
};
            
           
            
            
            
            



          
            

          
          
          
        
export default Home;

 
  
         
      

        

          
        
      
