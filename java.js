let i;
let edu_qul_1, exp;
let locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
let boards=document.querySelector('#boards');
let job_experience=document.querySelector('#job-experience-1');
let content=document.querySelector('#content');
let content_2=document.querySelector('#content_2');

/*const edu_details=JSON.parse(localStorage.getItem('education_details'))||
{
 educational_qualification:'',
 board_10_value:'',
 board_12_value:'',
 ug_value:'',
 pg_value:'',
 place_of_study:'',
 experience:'',
}*/

function e_qul(e)
{
  if(e==='_10_'){
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  `;
  edu_qul_1='10';
  }
  else if(e==='_10_2_'){
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  <label>12 board:</label><br>
  <input id="board_12"><br><br>
  `;
  edu_qul_1='10+2';
  }
  else if(e==='ug'){
  boards.innerHTML=`
  <label>10th board:</label><br>
  <input id="board_10"><br><br>
  <label>12th board:</label><br>
  <input id="board_12"><br><br>
  <label>University/Institution (UG):</label><br>
  <input id="board_uni_ug"><br><br>
  `;
  edu_qul_1='PG';
  }
  else if(e==='pg'){
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
  edu_qul_1='PG';
  }
  document.getElementById('eduqul').textContent=edu_qul_1;
  return edu_qul_1;
}
function create_1()
{
  locstor_getitem=JSON.parse(localStorage.getItem('profiles'))||[];
let board_1=document.getElementById('board_10');
let board_2=document.getElementById('board_12');
let board_3=document.getElementById('board_uni_ug');
let board_4=document.getElementById('board_uni_pg');
let p_o_s=document.getElementById('placeofstudy');

const educational_qualification = edu_qul_1 ? edu_qul_1 : '';
const board_10_value = board_1 ? board_1.value : '';
const board_12_value = board_2 ? board_2.value : '';
const ug_value = board_3 ? board_3.value : '';
const pg_value = board_4 ? board_4.value : '';  
const place_of_study = p_o_s ? p_o_s.value : '';
const experience = exp ? exp : '';

 if (locstor_getitem.length > 0) {
    const lastIndex = locstor_getitem.length - 1;
    locstor_getitem[lastIndex].educational_qualification = educational_qualification;
    locstor_getitem[lastIndex].board_10_value = board_10_value;
    locstor_getitem[lastIndex].board_12_value = board_12_value;
    locstor_getitem[lastIndex].ug_value = ug_value;
    locstor_getitem[lastIndex].pg_value = pg_value;
    locstor_getitem[lastIndex].place_of_study = place_of_study;
    locstor_getitem[lastIndex].experience = experience;
  }
          let divcontent='';
for(i=0; i<locstor_getitem.length; i++)
        {
            const {educational_qualification,board_10_value,board_12_value,ug_value,pg_value,place_of_study,experience}=locstor_getitem[i];
            const html=`
            <p>${educational_qualification}</p><p>${board_10_value}</p><p>${board_12_value}</p><p>${ug_value}</p><p>${pg_value}</p><p>${place_of_study}</p><p>${experience}</p>
            `;
            divcontent+=html;
        }
localStorage.setItem('profiles',JSON.stringify(locstor_getitem));
console.log(locstor_getitem)
}
function experience(e)
{  
  if(e==='intern'){
    job_experience.innerHTML=`
    <p id="job-experience-2"></p>`;
    exp='Intern';
  }
  else if(e==='fresher'){
    job_experience.innerHTML=`
    <p id="job-experience-2"></p>`;
    exp='Fresher';
  }
  else if(e==='experienced')
    job_experience.innerHTML=`
    <button id="years" onclick="years('_2__')">Less than 2</button>
    <button id="years" onclick="years('_2_')">2+</button>
    <button id="years" onclick="years('_5_')">5+</button>
    <p id="job-experience-2"></p>
    `;
  document.getElementById('job-experience-2').textContent=exp;
  return exp;
}
function years(y){
  if(y==='_2__'){
      exp='Less than 2 years';
  }
  else if(y==='_2_'){
      exp='2+';
  }
  else{
      exp='5+';
  }
  document.getElementById('job-experience-2').textContent=exp;
  return exp;
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
            address:inputvalue_3,
            e_mail:inputvalue_4,
            password:inputvalue_5,

          });
          console.log(locstor_getitem);
          let divcontent='';
          for(i=0; i<locstor_getitem.length; i++)
        {
            const {name_,number,address,e_mail,password}=locstor_getitem[i];
            const html=`
            <p>${name_}</p><p>${number}</p><p>${address}</p><p>${e_mail}</p><p>${password}</p>
            `;
            divcontent+=html;
        }
        localStorage.setItem('profiles',JSON.stringify(locstor_getitem));
        console.log(locstor_getitem);
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
    const {name_,number,address,e_mail,password}=locstor_getitem[i];
    content.innerHTML=`
    <p>${name_}</p>
    <p>${number}</p>
    <p>${address}</p>
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
  let temp_arr;
  const x_value=x.value;
  const y_value=y.value;
  let found=false;
  for(i=0;i<locstor_getitem.length;i++)
  {
  if(x_value===locstor_getitem[i].name_ && y_value===locstor_getitem[i].password)
  {
    temp_arr=locstor_getitem[i];
    localStorage.setItem('logged_in_details',JSON.stringify(temp_arr));
    window.location.href='index-2.html';
    found=true;
    break;
  }
  }
  if(!found){
    alert('Wrong username or password');
  }
}

function remove()
{
  localStorage.removeItem('profiles');
  console.log(locstor_getitem);
}



function createprofile()
{
  window.location.href='index-1.html';
}
function next()
{
  window.location.href='';
}
function next_1()
{
  window.location.href='index-1-2.html';
}
function back_1()
{
  window.location.href='index-1.html';
}
function backtologin()
{
  window.location.href='index.html';
}