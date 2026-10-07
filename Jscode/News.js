// async function news(Category,Country){

//     var news_key="67e07c333fe42743d2af361217ac1770"
//     var news_category=Category
//     var news_country=Country
//     var news_url=`https://gnews.io/api/v4/top-headlines?category=${Category}&apikey=${news_key}&lang=ar&country=${Country}`

//     console.log(news_url)

//     var response= await fetch(news_url)
//     var data= await response.json()

//     console.log(data)
// }

// news("technology","egypt")

async function news(Country,Lang,Category){

    var news_key="pub_acbe8306d11b4b59b0d8906d8390c9e5"
    var news_language=Lang
    var news_country=Country
    var news_category=Category
    var news_url=`https://newsdata.io/api/1/latest?apikey=${news_key}&country=${Country}&language=${Lang}&category=${Category}`

    // console.log(news_url)
    var response= await fetch(news_url)
    var data= await response.json()
    console.log(data)

    // var articleContent=`<img class="img-fluid" src="${data.results.image_url}">
    //         <article class="row mt-2">
    //             <p class="col-6">${data.results.pubDate}</p>
    //             <p class="col-6">
    //                 <span class="badge bg-success float-end">${data.results.source_name}</span>
    //             </p>
    //         </article>
    //         <h4>${data.results.title}</h4>`

             for(var a = 0; a <data.results.length  ; a = a + 1){
        
        var articleRow = document.createElement('section')
        articleRow.classList.add('col-3')
        var articleContent = 
        `
            <img class="img-fluid" src="${data.results[a].image_url}">
            <article class="row mt-2">
                <p class="col-6">${data.results[a].pubDate}</p>
                <p class="col-6">
                    <span class="badge bg-success float-end">${data.results[a].source_name}</span>
                </p>
            </article>
            <h4>${data.results[a].title}</h4>
            <button> Details</button>
        `

        articleRow.innerHTML = articleContent

        document.querySelector(`#${Category}-news`).appendChild(articleRow)
        
             }

}

news("eg","ar","business")
news("eg","ar","sports")
news("eg","ar","health")
news("eg","ar","entertainment")


