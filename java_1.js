let content=document.querySelector('#content');
function createCompany()
{
    locstor_getitem=JSON.parse(localStorage.getItem('companyprofiles'))||[];
          const inputelement_1=document.querySelector('#companyName');
          const inputelement_2=document.querySelector('#industry');
          const inputelement_3=document.querySelector('#hqAddress');
          const inputelement_4=document.querySelector('#founded');
          const inputelement_5=document.querySelector('#website');
          const inputelement_6=document.querySelector('#contactEmail');
          const inputelement_7=document.querySelector('#contactPhone');
          const inputelement_8=document.querySelector('#password');
          const inputvalue_1=inputelement_1.value;
          const inputvalue_2=inputelement_2.value;
          const inputvalue_3=inputelement_3.value;
          const inputvalue_4=inputelement_4.value;
          const inputvalue_5=inputelement_5.value;
          const inputvalue_6=inputelement_6.value;
          const inputvalue_7=inputelement_7.value;
          const inputvalue_8=inputelement_8.value;
          locstor_getitem.push({
            companyName:inputvalue_1,
            industry:inputvalue_2,
            hqAddress:inputvalue_3,
            founded:inputvalue_4,
            website:inputvalue_5,
            contactEmail:inputvalue_6,
            contactPhone:inputvalue_7,
            Password:inputvalue_8,

          });
          console.log(locstor_getitem);
          let divcontent='';
          for(i=0; i<locstor_getitem.length; i++)
        {
            const {companyName,industry,hqAddress,founded,website,contactEmail,contactPhone,Password}=locstor_getitem[i];
            const html=`
            <p>${companyName}</p><p>${industry}</p><p>${hqAddress}</p><p>${founded}</p><p>${website}</p><p>${contactEmail}</p><p>${contactPhone}</p><p>${Password}</p>
            `;
            divcontent+=html;
        }
        localStorage.setItem('companyprofiles',JSON.stringify(locstor_getitem));
        console.log(locstor_getitem);
      alert('profile created!!!');
}
function viewCompanyProfile()
{ 
  locstor_getitem=JSON.parse(localStorage.getItem('companyprofiles'))||[];
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
   content.innerHTML=totprofiles+`<button onclick="back_1()">Back</button><br><br>`;
   console.log(locstor_getitem)
}
function showprofile(i)
{
    locstor_getitem=JSON.parse(localStorage.getItem('companyprofiles'))||[];
    const {companyName,industry,hqAddress,founded,website,contactEmail,contactPhone,Password}=locstor_getitem[i];
    content.innerHTML=`
    <p>${companyName}</p>
    <p>${industry}</p>
    <p>${hqAddress}</p>
    <p>${founded}</p>
    <p>${website}</p>
    <p>${contactEmail}</p>
    <p>${contactPhone}</p>
    <p>${Password}</p>
    <button onclick="back_1()">Back</button><br><br>
    `;
}
register_company = () => window.location.href='index-2-1-1.html';
function login()
{ 
  locstor_getitem=JSON.parse(localStorage.getItem('companyprofiles'))||[];
  let x=document.getElementById('name_1');
  let y=document.getElementById('password_1');
  let temp_arr;
  const x_value=x.value;
  const y_value=y.value;
  let found=false;
  for(i=0;i<locstor_getitem.length;i++)
  {
  if(x_value===locstor_getitem[i].companyName && y_value===locstor_getitem[i].Password)
  {
    temp_arr=locstor_getitem[i];
    localStorage.setItem('logged_in_details_2',JSON.stringify(temp_arr));
    window.location.href='index-2-2.html';
    found=true;
    break;
  }
  }
  if(!found){
    alert('Wrong company name or password');
  }
}
function remove()
{
  localStorage.removeItem('companyprofiles');
  alert('Deleted')
}
function back_1()
{
  window.location.href='index-2-1-1.html';
}
function backtologin()
{
  window.location.href='index-2-1.html';
}