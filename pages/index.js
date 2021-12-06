import { useEffect } from 'react';
import Faq from '../components/organisms/faq';
import FiturUtama from '../components/organisms/fiturutama';
import Footer from '../components/organisms/footer';
import Header from '../components/organisms/header';
import Pricing from '../components/organisms/pricing';
import Problem from '../components/organisms/problem';
import Solution from '../components/organisms/solution';
import Testimoni from '../components/organisms/testimoni';
import WhatIsSAMS from '../components/organisms/whatiis';

export default function Home() {
  useEffect(() => {}, []);
  return (
    <>
      <div>
        <Header></Header>
        <WhatIsSAMS></WhatIsSAMS>
        <Testimoni></Testimoni>
        <Problem></Problem>
        <Solution></Solution>
        <FiturUtama></FiturUtama>
        <Pricing></Pricing>
        <Faq></Faq>
        <Footer></Footer>
      </div>
    </>
  );
}
