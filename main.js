var html = items.results.map(item => {
        return `
    <div class="product">    
    <img src="${item.Images[0].url_fullxfull}" height="200px" width="200px">
    <h3>${item.title}</h3>
    <p>$${item.price}</p>
    </div>

    `
    }).join('')
    
    document.querySelector(".main").innerHTML = html





