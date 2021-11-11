/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from 'next';
import { useState } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Header } from '../Components/Head';
import { TributeInfoForm } from '../Components/TributeInfoForm';
import {FooterInfo} from '../Components/Footer';
import {NavBar}  from '../Components/NavBar';



const Home: NextPage = () => {
  return (
  <div>
    <Header />
    <NavBar />
    <TributeInfoForm 
      title="Test title" 
      description="description test"
      image_url="/url"
    />
    <FooterInfo />
  </div>
  );
};
           
export default Home;
  
