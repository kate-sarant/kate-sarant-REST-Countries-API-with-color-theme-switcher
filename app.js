
///////=========================API Countries===============////


const coutries_section = document.querySelector("#countries")

let borderCntr =[];
let tablcountry= Array();

const url = `https://restcountries.com/v2/all`



fetch(url)
      .then((response)=>{return response.json()})
      .then((data)=>{
        for(let i=0; i< data.length; i++){


          let addBorderCountry = ((obj,propName,propValue) =>{
          obj[propName] = propValue

          });

     addBorderCountry(borderCntr,data[i].alpha3Code,data[i].name)
        }



        data.forEach(country => {




/////===========  Creating the main page  =============== /////
          let $div = document.createElement('div')

          let $a = document.createElement('a')
          $div.classList.add("country_cart");
          let $img = document.createElement("img")
          let $ol = document.createElement("ol")
          let $li_name = document.createElement('li')
          let $li_population = document.createElement('li')
          let $li_Region = document.createElement('li')
          let $li_Capital = document.createElement('li')





            let $name = document.createElement('h5')

              let $population= document.createElement('h6')
                let $Region= document.createElement('h6')
                  let $Capital= document.createElement('h6')

                  $population.innerText = "population:"
                   $Region.innerText = "Region:"
                   $Capital.innerText = "Capital:"

                   let $p_population =document.createElement('p')
                   let $p_region =document.createElement("p")
                   let $p_capital= document.createElement("p")

                   $p_population.classList.add("country_info");
                   $p_region.classList.add("country_info");
                   $p_capital.classList.add("country_info");
                   $p_capital.classList.add("country_Capital");

                   let $href = country.name.replace(" ","")+".html"
                   $a.setAttribute("href",'countries/'+ $href)

                   $p_population.innerText = country.population
                  $p_region.innerText = country.region
                  $p_capital.innerText = country.capital

                //////// ====== appendChild
                  $li_name.appendChild($name);
                  $li_population.appendChild($population);
                  $li_population.appendChild($p_population);

                  $li_Region.appendChild($Region);
                    $li_Region.appendChild($p_region);

                  $li_Capital.appendChild($Capital);
                  $li_Capital.appendChild($p_capital);

                  $ol.appendChild($li_name);
                  $ol.appendChild($li_population);
                  $ol.appendChild($li_Region);
                  $ol.appendChild($li_Capital);

                  $div.appendChild($img);
                  $div.appendChild($ol);
                  $a.appendChild($div)



                  coutries_section.appendChild($a);

                    ////// ===== attributes
                  $img.setAttribute('src',country.flags.png);
                  $name.innerHTML = country.name;
                  if(country.name.length >14){
                    $name.style.position ='relative';
                    $name.style.top ='-17px';
                    $name.style.paddingTop=' 8px';
                  }
                  if(country.name.length >25){$name.style.fontSize = "medium"}




      //// ========== Search by Region list ============= ///
        let label = document.querySelector("#Mylabel")

        let cOuntry = document.querySelector(".form-select").addEventListener("click",find);
            function find(){
                $a.style.display = "block";

              if(country.region != document.querySelector(".form-select").value){
                $a.style.display = "none";
                label.style.display = "none";
              }
              if(document.querySelector(".form-select").value == "1"){
                    $a.style.display = "block";
                    label.style.display = "block";
              }
            }


})
})


  .catch((error) => {
			console.log(error);
    })




            //// ========== Searcg section  ============= ///
    function myFunction() {
      var input = document.querySelector(".form-control").value
      var fldInput =document.querySelector("#inputSearch")
      var filter =input.toUpperCase();
      const myNameList = document.querySelectorAll("h5");


        for (let i = 0; i < myNameList.length; i++) {
          var fixedNames = String(myNameList[i].innerHTML)
          let firstlet = fixedNames[0].toUpperCase()+ fixedNames.slice(1);
          let filterCapitlized =filter[0].toUpperCase()+ input.slice(1)

        if(firstlet.indexOf(String(filterCapitlized)) === -1){
          myNameList[i].closest("a").style.display = "none"
        }



      }
     }

   myFunction()


   
//// ========== Input  by pressing search button============= ///

   var input = document.getElementById("myInput");
   var fldInput =document.querySelector("#inputSearch")

        fldInput.addEventListener("keyup", function(event) {
          if (event.keyCode === 13) {
            event.preventDefault();
          document.getElementById("button-addon1").click();
    }
});
