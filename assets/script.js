fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes-length/?limit=3')
  .then(response => response.json())
  .then(function (resep) {
    let data = resep.results

    let cards = ''
    data.forEach(rsp => {
      cards += showCard(rsp)
    });

    let list = document.querySelector('.recipe-wrap')
    list.innerHTML = cards
  })


function showCard(r) {
  let key = r.key
  let name = key.replace(/-/g, " ")

  return `<div class="col-lg-4">
            <div class="recipe-item">
              <div class="img">
                <img class="img-fluid w-100" src="${r.thumb}" alt="">
              </div>
              <div class="text">
                <p class="title"><a href="detail.html?${r.key}">${name}<a/></p>
                <p class="description">${r.title}....</p>
              </div>
            </div>
          </div>`
}