
////// with nodejs render every page for each country in ./countries  folder


const fs = require('fs');
const path = require('path');
const fetch = require("node-fetch");


fs.mkdir(path.join(__dirname,"countries"),err =>{
  if(err){
    console.error;
    return;
  }
})
fs.mkdir(path.join(__dirname,"countries_table"),err =>{
  if(err){
    console.error;
    return;
  }
})


let borderCntr = []

let myfile;
let tablcountry= Array();
const urls = `https://restcountries.com/v2/all`


fetch(urls)
      .then((response)=>{return response.json()})
      .then((data)=>{


            ////////  borderCntr object - addBorderCountry function

            ////// creating a [alpha3Code and country.name] values
              ////// for the tablcountry  of the border countries section.
              // !!! must be before the forEach_loop to load them all properly.

        for(let i=0; i< data.length; i++){


          let addBorderCountry = ((obj,propName,propValue) =>{
          obj[propName] = propValue

          });

     addBorderCountry(borderCntr,data[i].alpha3Code,data[i].name)
        }

        data.forEach(country => {

          ////languES
          let lang;
            for (let i =0; i< country.languages.length;i++){
            (i>0)?( lang =lang +','+ country.languages[i].name +""):lang = country.languages[i].name
            }

            ////cuRencies
            let cuRencies;
            for (let i in country.currencies){
            (i>0)?( cuRencies =cuRencies +','+ country.currencies[i].name +""):cuRencies = country.currencies[i].name
            }
            let bor = country.borders




            for (let i in country.name){

            if( typeof bor ==='undefined'){
            tablcountry = ` <p> N/A </p>`
            }else{

              for(i in bor){
              (i>=4 && i%4 == 0)?tablcountry =tablcountry + "<br/>" : tablcountry = tablcountry
             let $Href = (String(borderCntr[bor[i]])).replace(" ","")+".html";

                (i>0)?( tablcountry = tablcountry + `<a  href="./${$Href}">${borderCntr[bor[i]]}</a>`)
                :tablcountry = `<a href="./${$Href}">${borderCntr[bor[i]]}</a>`

            }}
            };
            tablcountry;



          var html =`<!DOCTYPE html>
          <html lang="en" dir="ltr" data-theme="dark">
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
               <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
               <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
               <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap" rel="stylesheet">
              <title>Rest-api-countries-color-switcher</title>

            </head>
            <body id="bodycountry">
              <header id="country_header">
                   <h4>where is the world?</h4>
                   <div id="theme-switcher"> <i id="moon" class="bi bi-moon"><input type="button" name="" value="Dark mode"></i>
                   </div>
              </header>

            <main id="country_page_main">
            <div class="backBtn">

             <a href="../index.html" > <i class="bi bi-arrow-left">Back</i></a></div>
              <section class="country_section">


              <img id="flag_img" src="${country.flags.png}" alt="">
              <div id="extra_info">
            <h5 id="TitleName">${country.name}</h5>
              <div class="list_wrapper">


                <ol>

                  <li class="listItem">  <h6>Population:</h6> <p class="list_info">${country.population}</p> </li>
                <li class="listItem">  <h6>Region:</h6> <p class="list_info">${country.region}</p> </li>
                  <li class="listItem">  <h6>Sub Region:</h6> <p class="list_info">${country.subregion}</p> </li>
                  <li class="listItem">  <h6>Capital:</h6> <p class="list_info">${country.capital}</p> </li>
                </ol>
                <ol>
                <li class="listItem">  <h6>Top Lavel Domain:</h6> <p class="list_info">${country.topLevelDomain}</p> </li>
                <li class="listItem">  <h6>Currencies:</h6> <p class="list_info">${cuRencies}</p> </li>

                <li class="listItem ;languES">  <h6>Languages:</h6><p class="list_info">${lang}</p></li>
                </ol>
          </div>
                <div class="BorderCountries">
                  <h6>Border Countries:</h6>
                  <div class="borderC">
                  ${tablcountry}

                  </div>
                </div>
            </div>
                </section>

                </main>

            </body>
            <script src="../darkMode.js" type="text/javascript"></script>

              <link rel="stylesheet" href="../master.css">
          </html>
`

      var theme = country.name.replace(" ","")
      fs.writeFileSync("countries/"+theme+'.html',html)
      ,err =>{
      if(err){
      console.error;
      return;
      }
      }



      })
    }).catch((error) =>{
      console.log(error);
      })
