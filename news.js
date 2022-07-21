//0c31557360464472a6d27256f4c5d3dd

console.log("This is news website");

//Initilie the news api parameter
let source="the-times-of-india";
let apiKey="0c31557360464472a6d27256f4c5d3dd";

//grab the news container
let newsAccordion = document.getElementById("newsAccordion");

//Create a ajax get request
const xhr =new XMLHttpRequest();
xhr.open("GET",`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,true);

//What to do when response is ready
xhr.onload = function(){
    if(this.status===200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
       console.log(articles);

       let newsHtml="";
       articles.forEach(function(element,index){
       
            let news = ` <div class="card">
                <h2 class="card-header" id="heading${index}">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                       <b>Breaking News ${index+1}</b> ${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="card-body">${element["content"]}.<a href="${element["url"]}" target="blank">Read more here</a> </div>
                </div>
             </div>`;

             newsHtml+=news;


        });
        newsAccordion.innerHTML=newsHtml;
    }
    else{
        console.log("Some error occured")
    }
}

xhr.send()

