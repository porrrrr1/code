import React from "react";
import Layout from "../components/Layout";
import Ninja from "../assets/studen.jpg"


const Home = () => {
  return (
    <Layout>
      {/* <h1 className="font-bold text-4xl text-blue-950">ตัวต่อนินจาโก NINJAGO</h1> */}
      {/* <hr /> */}
      {/* <p className="mt-8 mb-20 text-blue-950"> */}
      {/* นินจาโก เลโก้นินจา ซีรีย์ที่ขายดีมากๆของ LEGO NINJAGO เป็นชุดที่ชื่นชอบเด็กๆทั่วโลก ปัจจุบันมีผลิตภัณฑ์มากมายในตลาดทั่วโลก ไม่ว่าจะเป็นภาพยนต์ NINJAGO The Movie เกมส์นินจาโกแนวต่อสู้ และปัจจุบันปี 2018 ได้มีการออกภาคใหม่ NINJAGO Season 8 NINJAGO: MASTERS OF SPINJITZU ชุดรถนินจาและลูกข่างนินจา สามารถเลือกซื้อตัวต่อเลโก้จีน นินจาโก ราคาไม่แพง คุณภาพดีได้ที่ NGTOYS LEPIN,SY,LELE,BELA เลโก้จีน  */}
      {/* </p> */}
      <h1 className="text-4xl text-center">หน้าหลัก</h1>
      <br />
      <div className="flex justify-center items-center"><img src={Ninja} alt="ninja" className="w-90 h-80"/></div>
      <br />
      <div className="flex justify-center items-center"><button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">เข้าไปตำ</button></div>
    </Layout>
  );
};

export default Home;
