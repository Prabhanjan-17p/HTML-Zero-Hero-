console.log("kanha");


function createCard(title, cName, view, monthOld, time) {

    let viewCount
    if (view < 1000000) {
        viewCount = view / 1000 + "K"
    } else if (view > 1000000) {
        viewCount = view / 100000 + "M"
    } else {
        viewCount = view / 1000 + "K"
    }
    let html = ` <div class="card">
    <div class="thabnel">
        <img class="cardIMG" src="73HaryTham.webp" alt="">
        <div class="cardTime">${time}</div>
    </div>
    <div class="MenuOther">
        <div class="head">
            <div class="upperHead">
                <h2 class="title">${title}</h2>
            </div>

            <div class="bottomHead">
                <h4 class="chanelName"> ${cName}  </h4>.
                <h4 class="view"> ${viewCount} </h4>.
                <h4 class="monthsOLD"> ${monthOld} </h4>
            </div>
        </div>
    </div>
</div>`

    document.querySelector(".container").innerHTML = html + document.querySelector(".container").innerHTML
    
}

createCard("hello", "zenethis", "235996", "2", "34:09")