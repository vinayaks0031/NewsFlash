
function getNews(name) {
    let accordion = document.getElementById("accordion");
    let loading = ` <img style="width: 100px; height: 100px; margin-left: 40%;" src="/img/Spinner-1s-200px.gif" alt="">`;
    accordion.innerHTML = loading;
    fetch(`https://bing-news-search1.p.rapidapi.com/news/search?q=${name}&safeSearch=Off&textFormat=Raw&freshness=Day`, {
        "method": "GET",
        "headers": {
            "x-bingapis-sdk": "true",
            "x-rapidapi-key": "d650ee175emsh8df1625b681e66ap1d8743jsnb317017171cc",
            "x-rapidapi-host": "bing-news-search1.p.rapidapi.com"
        }
    })
        .then(response => response.json()).then((data) => {
            let html = "";
            // console.log(data);
            let i = 0;
            for (const key in data.value) {
                html += ` <div class="accordion-item bg-dark my-3">
                <h2 class="accordion-header" id="heading${key}">
                    <button class="accordion-button collapsed text-white bg-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${key}" aria-expanded="true" aria-controls="collapse${key}">
                        ${data.value[key].name}
                    </button>
                </h2>
                <div id="collapse${key}" class="accordion-collapse collapse " aria-labelledby="heading${key}"
                    data-bs-parent="#accordion">
                    <div class="accordion-body text-white">
                        ${data.value[key].description} . <a href="${data.value[key].url}" class="btn btn-link px-1 py-1" target="_blank">Read full News Here</a>
                    </div>
                </div>
            </div>`
            }
            accordion.innerHTML = html;
        })
}
