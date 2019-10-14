var html = items.results.map(item => {
        return `
    <div class="product">    
        <div class="image">
            

        <a href="#"><img src="${item.Images[0].url_fullxfull}" height="200px" width="200px">
        </a>
        </div>
        <div class="overlay">
            <i class="fa fa-heart"></i>
        </div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>$${item.price}</p>
    </div>

    `
    }).join('')
    
    document.querySelector(".main").innerHTML = html





