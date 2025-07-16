
let i;
let locstor;
let locstor_getitem=JSON.parse(localStorage.getItem('profiles'));
let boards=document.querySelector('#boards');
let job_experience=document.querySelector('#job-experience');
let content=document.querySelector('#content')
let content_2=document.querySelector('#content_2')
function e_10()
{
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  `;
}
function e_10_2()
{
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  <label>12 board:</label><br>
  <input id="board_12"><br><br>
  `;
}
function e_ug()
{
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  <label>12th board:</label><br>
  <input id="board_12"><br><br>
  <label>University/Institution (UG):</label><br>
  <input id="board_uni"><br><br>
  `;
}
function e_pg()
{
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  <label>12th board:</label><br>
  <input id="board_12"><br><br>
  <label>University/Institution (UG):</label><br>
  <input id="board_uni_ug"><br><br>
  <label>University/Institution (PG):</label><br>
  <input id="board_uni_pg"><br><br>
  `;
}
function experienced()
{
    job_experience.innerHTML=`
    <button id="less_2" onclick="less_2()" value="less than 2">Less than 2</button>
    <button id="exp_2" onclick="2()" value="2+">2+</button>
    <button id="exp_5" onclick="5()" value="5+">5+</button><br><br>
    `;
}
function create()
{
    locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
          const inputelement_1=document.querySelector('#name');
          const inputelement_2=document.querySelector('#number');
          const inputelement_3=document.querySelector('#address');
          const inputelement_4=document.querySelector('#e-mail');
          const inputelement_5=document.querySelector('#password');
          const inputvalue_1=inputelement_1.value;
          const inputvalue_2=inputelement_2.value;
          const inputvalue_3=inputelement_3.value;
          const inputvalue_4=inputelement_4.value;
          const inputvalue_5=inputelement_5.value;
          locstor_getitem.push({
            name_:inputvalue_1,
            number:inputvalue_2,
            adddress:inputvalue_3,
            e_mail:inputvalue_4,
            password:inputvalue_5,

          });
          console.log(locstor_getitem);
          let divcontent='';
          for(i=0; i<locstor_getitem.length; i++)
        {
            const {name_,number,adddress,e_mail,password}=locstor_getitem[i];
            const html=`
            <p>${name_}</p><p>${number}</p><p>${adddress}</p><p>${e_mail}</p><p>${password}</p>
            `;
            divcontent+=html;
        }
        locstor=localStorage.setItem('profiles',JSON.stringify(locstor_getitem));
          console.log(divcontent);
      alert('profile created!!!');
}
function viewprofile()
{ 
  locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
  let profile=``;
  let totprofiles='';
  content.innerHTML='';
    for(i=0; i<locstor_getitem.length; i++)
  {
    profile=`
    <button onclick="showprofile(${i})">Profile ${i+1}</button><br><br>
    `;
    totprofiles+=profile;
  }
   content.innerHTML=totprofiles+`<button onclick="back_1()">Back</button>`;
   console.log(locstor_getitem)
}
function showprofile(i)
{
    locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
    const {name_,number,adddress,e_mail,password}=locstor_getitem[i];
    content.innerHTML=`
    <p>${name_}</p>
    <p>${number}</p>
    <p>${adddress}</p>
    <p>${e_mail}</p>
    <p>${password}</p><br>
    <button onclick="back_1()">Back</button>
    `;
}
function login()
{ 
  locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
  let x=document.getElementById('name_1');
  let y=document.getElementById('password_1');
  const x_value=x.value;
  const y_value=y.value;
  for(i=0;i<locstor_getitem.length;i++)
  {
  if(x_value===locstor_getitem[i].name_ && y_value===locstor_getitem[i].password)
  {
    window.location.href='index-2.html';
    break;
  }
  }
}


function createprofile()
{
    window.location.href='index-1.html';
}
function next()
{
    window.location.href='index-1-2.html';
}
function backtologin()
{
    window.location.href='index.html';
}
function back_1()
{
    window.location.href='index-1.html';
}
function back_2()
{
    window.location.href='';
}

    
