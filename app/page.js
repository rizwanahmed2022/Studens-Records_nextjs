"use client";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  var y = [
    {
      id: 1,
      rollnumber: 1,
      name: "Rizwan Ahmed",
      semester: "5th",
      CGPA: 3.31,
    },
    {
      id: 1,
      rollnumber: 1,
      name: "Rizwan Ahmed",
      semester: "5th",
      CGPA: 3.31,
    },
    {
      id: 2,
      rollnumber: 2,
      name: "Rehan Manzoor",
      semester: "4th",
      CGPA: 2.4,
    },
    {
      id: 3,
      rollnumber: 3,
      name: "Umar Rehman",
      semester: "5th",
      CGPA: 2.6,
    },
    {
      id: 4,
      rollnumber: 4,
      name: "Bilal Ahmed",
      semester: "2nd",
      CGPA: 1.6,
    },
    {
      id: 5,
      rollnumber: 5,
      name: "Bloch Khan ",
      semester: "6th",
      CGPA: 3.6,
    },

    {
      id: 6,
      rollnumber: 6,
      name: "Abdul Salam",
      semester: "7th",
      CGPA: 3.5,
    },
    {
      id: 7,
      rollnumber: 7,
      name: "Kkhan Badsha",
      semester: "1st",
      CGPA: 3.5,
    },
    {
      id: 8,
      rollnumber: 8,
      name: "Naila Shah",
      semester: "5th",
      CGPA: 2.5,
    },
    {
      id: 9,
      rollnumber: 9,
      name: "Hafsa Nabi",
      semester: "5th",
      CGPA: 2.7,
    },
  ];

  var arraylenght = y.length + 2;
  var numm = 11;

  console.log(arraylenght);
  y.push({
    id: 10,
    rollnumber: 10,
    name: "Awais Ahmed",
    semester: "5th",
    CGPA: 2.1,
  });

  function submit(event) {
    let b1 = document.getElementById("name").value;
    let c1 = document.getElementById("rollnumber").value;
    let d1 = document.getElementById("semester").value;
    let e1 = document.getElementById("CGPA").value;

    if (e1 > 4 || e1 < 0) {
      alert("CGPA must be between 0 and 4.");
      return;
    } else if (d1 > 8 || d1 < 0) {
      alert("Semester must be between 0 and 8.");
      return;
    } else {
      // Continue with the rest of the code
      event.preventDefault();

      y.push({
        id: arraylenght - 1,
        rollnumber: c1,
        name: b1,
        semester: d1,
        CGPA: e1,
      });

      arraylenght += 1;

      // Clear the input fields
      document.getElementById("name").value = "";
      document.getElementById("rollnumber").value = "";
      document.getElementById("semester").value = "";
      document.getElementById("CGPA").value = "";
      document.getElementById("CGPA").value = "";

      event.preventDefault();

      let trackingi =document.getElementById("track");
      numm = numm+1
      trackingi.innerHTML="#Tracking ID: "+numm;
    }
  }

  function display() {
    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let bt3 = document.getElementById("bt3");
    let a = document.getElementById("add");
    let b = document.getElementById("search");
    let c = document.getElementById("all");
    a.style.display = "flex";
    b.style.display = "none";
    c.style.display = "none";
    bt1.style.backgroundColor = "#6D9F9F";
    bt2.style.backgroundColor = "white";
    bt3.style.backgroundColor = "white";
  }
  function display1() {
    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let bt3 = document.getElementById("bt3");

    let a = document.getElementById("add");
    let b = document.getElementById("search");
    let c = document.getElementById("all");
    a.style.display = "none";
    b.style.display = "flex";
    b.className =
      "w-full  flex flex-col bg-green-700 h-[64vh] rounded-2xl  relative ";
    c.style.display = "none";
    bt1.style.backgroundColor = "white";
    bt2.style.backgroundColor = "#6D9F9F";
    bt3.style.backgroundColor = "white";
  }
  function display2(event) {
    let a = document.getElementById("add");
    let b = document.getElementById("search");
    let c = document.getElementById("all");
    let bt1 = document.getElementById("bt1");
    let bt2 = document.getElementById("bt2");
    let bt3 = document.getElementById("bt3");
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "flex";

    bt1.style.backgroundColor = "white";
    bt2.style.backgroundColor = "white";
    bt3.style.backgroundColor = "#6D9F9F";

    for (let index = 1; index < y.length; index++) {
      let x = document.getElementById("all");

      let a = document.createElement("div");
      a.className =
        "hover:bg-blue-400 active:bg-blue-500 focus:bg-blue-500 duration-300 rounded border-b py-3 flex md:items-center justify-between   w-[90%] mx-auto mt-8 border-gray-400";
      a.innerHTML + "this is innerhtml";
      x.appendChild(a);

      let b = document.createElement("img");
      b.className = "hidden md:block w-50 h-40 md:w-60 md:h-50";
      b.src = "https://cdn-icons-png.flaticon.com/512/67/67902.png";
      a.appendChild(b);

      let c = document.createElement("div");
      c.className = "md:ml-20 flex gap-3 w-full border-black";
      a.appendChild(c);

      let d = document.createElement("div");
      d.className = "flex flex-col justify-baseline gap-3";
      c.appendChild(d);

      let e = document.createElement("p");
      e.className = "text-2xl border-b border-gray-400 mx-8";
      e.innerHTML = "ID:";
      d.appendChild(e);
      let f = document.createElement("p");
      f.className = "text-2xl border-b border-gray-400 mx-8";
      f.innerHTML = "Class Roll/N";
      d.appendChild(f);
      let g = document.createElement("p");
      g.className = "text-2xl border-b border-gray-400 mx-8";
      g.innerHTML = "Name";
      d.appendChild(g);
      let h = document.createElement("p");
      h.className = "text-2xl border-b border-gray-400 mx-8";
      h.innerHTML = "Semester";
      d.appendChild(h);
      let i = document.createElement("p");
      i.className = "text-2xl border-b border-gray-400 mx-8";
      i.innerHTML = "CGPA";
      d.appendChild(i);

      let j = document.createElement("div");
      j.className = "flex flex-col justify-baseline gap-3";
      c.appendChild(j);

      let k = document.createElement("p");
      k.className = "text-2xl border-b border-gray-400 mx-8";
      k.innerHTML = y[index].id;
      j.appendChild(k);
      let l = document.createElement("p");
      l.className = "text-2xl border-b border-gray-400 mx-8";
      l.innerHTML = y[index].rollnumber;
      j.appendChild(l);
      let m = document.createElement("p");
      m.className = "text-2xl border-b border-gray-400 mx-8";
      m.innerHTML = y[index].name;
      j.appendChild(m);
      let n = document.createElement("p");
      n.className = "text-2xl border-b border-gray-400 mx-8";
      n.innerHTML = y[index].semester;
      j.appendChild(n);
      let o = document.createElement("p");
      o.className = "text-2xl border-b border-gray-400 mx-8";
      o.innerHTML = y[index].CGPA;
      j.appendChild(o);
    }
  }

  function search() {
    let a = document.getElementById("search");
    let aa = document.getElementById("all");
    let aaa = document.getElementById("add");
    let input = document.getElementById("searchbar").value;

    a.style.display = "flex";
    a.style.flexDirection = "column";
    aa.style.display = "none";
    aaa.style.display = "none";
    a.innerHTML = "";

    if (input < y.length && input > 0) {
      let b = document.createElement("h1");
      b.innerHTML = y[input].name;
      b.className = "w-full text-white text-center pt-14 text-6xl";
      a.appendChild(b);
      let c = document.createElement("div");
      c.className =
        "text-white w-full h-full text-justify pt-9 px-[20%]  text-3xl";
      c.innerHTML = `This is to certify that <b>${y[input].name}</b>, bearing Roll Number
              <b>${y[input].rollnumber}</b>, is currently enrolled in the
               <b>${y[input].semester}</b> semester at our institution. He/She has maintained a CGPA
              of <b>${y[input].CGPA}</b> up to this point, showcasing consistent academic
              performance. This document serves as proof of his/her active
              enrollment and academic standing in our institution`;
      a.appendChild(c);
    } else {
      let b = document.createElement("h1");
      b.className = "w-full text-white text-center pt-54 text-2xl";
      b.innerHTML = "oops! result not Found";
      a.appendChild(b);
    }
  }

  return (
    <div className="flex flex-co items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Dirt&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="border-4 bg-none">
        <div className="context">
          <div className=" flex   flex-col w-full md:w-[90%] min-h-[70vh] md:min-h-[70vh] ">
            <div className=" w-full flex flex-col md:flex-row md:rounded overflow-hidden md:-translate-y-10 justify-between items-center md:justify-between bg-white  ">
              <div className=" duration-initial w-full rounded-4xl flex md:w-1/3  justify-around ">
                <button
                  id="bt1"
                  onClick={display}
                  className="bg-white hidden md:flex text-black md:px-6 px-4 py-4 navbar  transition duration-300 ease-in-out"
                >
                  Add Result
                </button>
                <button
                  id="bt1"
                  onClick={display}
                  className="bg-white flex md:hidden text-black md:px-6 px-4 py-4 navbar  transition duration-300 ease-in-out"
                >
                  Add 
                </button>

                <button
                  id="bt2"
                  onClick={display1}
                  className="bg-white hidden md:flex text-black md:px-6 px-4 py-4 navbar  cursor-pointer ransition-colors duration-500 ease-in-out"
                >
                  Search Result
                </button>
                <button
                  id="bt2"
                  onClick={display1}
                  className="bg-white flex md:hidden text-black md:px-6 px-4 py-4 navbar  cursor-pointer ransition-colors duration-500 ease-in-out"
                >
                  Search
                </button>

                <button
                  id="bt3"
                  onClick={display2}
                  className="bg-white hidden md:flex text-black md:px-6 px-4 py-4 navbar  cursor-pointer ransition-colors duration-500 ease-in-out"
                >
                  Show All Students
                </button>
                <button
                  id="bt3"
                  onClick={display2}
                  className="bg-white flex md:hidden text-black md:px-6 px-4 py-4 navbar  cursor-pointer ransition-colors duration-500 ease-in-out"
                >
                  All Students
                </button>
              </div>

              <div
                dir="searchbox"
                className="py-2 md:px-0 px-2 md:w-1/2 w-full black flex md:justify-center justify-between items-center"
              >
                <input
                  type="text"
                  name="searchbar"
                  id="searchbar"
                  placeholder="Search by Tracking ID"
                  className="md:ml-7 flex border-2 border-gray-300 outline-none p-2 h-1/2 py-3 text-black rounded-lg w-full md:w-full  focus:shadow-2xl"
                />

                <i
                  onClick={search}
                  className="bi bi-search rounded-sm text-gray-500  text-[25px] py-1 outline-none ml-3 h-auto px-6 bg-gray-300  active:bg-gray-700 hover:bg-gray-400 mr-4"
                ></i>
              </div>
            </div>

            <div
              id="add"
              className="cant w-full flex-col md:flex-row min-h-[64vh]   flex relative "
            >
              <div className="shadow2 parent2 border-black md:w-1/2 rounded-bl-[13%] w-full h-full py-12 flex flex-col justify-center  pt-10 items-center relative overflow-hidden">
                <div className="backbox2"></div>
                <h1 className="text-5xl color1 w-full md:w-[423px] px-2 text-center pb-13">
                  Enter Student Informations
                </h1>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/67/67902.png"
                  alt=""
                  className=" w-60 h-50 md:w-80 md:h-70"
                />
              </div>
              <form
                id="div2"
                className="p-7 overflow-hidden relative flex flex-col md:w-1/2 parent min-h-[30vh] gap-5 md:gap-5 shadow1 duration-1000  outline-none justify-center"
              >
                <div className="backbox"></div>
                <h1 id="track" className="text-4xl text-gray-500 md:-translate-y-10">
                  #Tracking ID: 11
                </h1>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="bg-white p-2 rounded-lg w-full color2 rounded-tl-none  pl-9"
                />
                <input
                  type="number"
                  name="rollnumber"
                  id="rollnumber"
                  placeholder="Roll Number"
                  className=" p-2 rounded-lg w-full color2 rounded-tl-none  pl-9"
                />
                <input
                  type="number"
                  name="semester"
                  id="semester"
                  placeholder="Semester"
                  className=" p-2 rounded-lg w-full color2 rounded-tl-none  pl-9"
                />
                <input
                  type="number"
                  name="CGPA"
                  id="CGPA"
                  placeholder="CGPA"
                  step="0.01"
                  max="4"
                  min="0"
                  required
                  className=" p-2 rounded-lg w-full color2 rounded-tl-none  pl-9"
                />
                <button
                  onClick={submit}
                  className="bg-blue-500 text-xl bt4 w-full  active:bg-blue-900   hover:bg-blue-700   text-white font-bold py-3 px-4 rounded rounded-tl-none pl-9"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* //////////// */}

            <div
              id="search"
              className="w-full  hidden  bg-green-700 h-[64vh] rounded-xl  relative "
            >
              <h1 className="w-full text-white text-center pt-29 text-6xl">
                Search by Roll Number only!
              </h1>
            </div>

            {/* ///////////////// */}
            <div
              id="all"
              className=" overflow-y-scroll cant w-full hidden flex-col justify-b md:h-[64vh] gap-8 rounded-2xl "
            >
              <h1 className="text-5xl text-yellow-800 font-extrabold w-[90%] mx-auto mt-8 ">
                Studens Records:
              </h1>
              {/* ?? */}
              {/*             
            record box */}
            </div>
            {/* ///////// */}
          </div>
        </div>

        <div className="area">
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
