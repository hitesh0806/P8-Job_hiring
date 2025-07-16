
let i;
const user_data=[];
let boards=document.querySelector('#boards');
let job_experience=document.querySelector('#job-experience');
let content=document.querySelector('#content')
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
          user_data.push({
            name_:inputvalue_1,
            number:inputvalue_2,
            adddress:inputvalue_3,
            e_mail:inputvalue_4,
            password:inputvalue_5,

          });
          console.log(user_data);
          let divcontent='';
          for(i=0; i<user_data.length; i++)
        {
            const {name_,number,adddress,e_mail,password}=user_data[i];
            const html=`
            <p>${name_}</p><p>${number}</p><p>${adddress}</p><p>${e_mail}</p><p>${password}</p>
            `;
            divcontent+=html;
            profiles[i]=user_data[i];
        }
          console.log(divcontent);
      alert('profile created!!!');
}
function viewprofile()
{
  let profile=``;
  let totprofiles='';
  content.innerHTML='';
    for(i=0; i<user_data.length; i++)
  {
    profile=`
    <button onclick="showprofile(${i})">Profile ${i+1}</button><br><br>
    `;
    totprofiles+=profile;
  }
   content.innerHTML=totprofiles+`<button onclick="back_1()">Back</button>`;
}
function showprofile(i)
{
    const {name_,number,adddress,e_mail,password}=user_data[i];
    content.innerHTML=`
    <p>${name_}</p>
    <p>${number}</p>
    <p>${adddress}</p>
    <p>${e_mail}</p>
    <p>${password}</p><br>
    <button onclick="back_2()">Back</button>
    `;
}
function createprofile()
{
    window.location.href='index-1.html';
}
function next()
{
    window.location.href='index-1-2.html';
}
function back_1()
{
    window.location.href='index-1.html';
}
function back_2()
{
    window.location.href='index-1.html';
}

    
