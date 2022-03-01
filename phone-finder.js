const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input field
    searchField.value = '';
    // load data/api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResultt(data.data))

}
const displaySearchResultt = phones => {
    const searchResult = document.getElementById('search-result');
    // clear page/result after one search and for next search
    searchResult.innerHTML = '';
    // searchResult.textContent = '';

    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100 text-center mx-5 shadow-lg p-3 mb-5 bg-body rounded">
                <img id="phone-image" src="${phone.image}" class="card-img-top img-fluid w-50 h-50 text-center" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Name: ${phone.phone_name}</h5>
                    <p class="card-body">Brand: ${phone.brand}</p>
                    
                </div>
                
                <button onclick="loadPhoneDetail(${phone.slug})">see more</button>
                
            </div > `;
        searchResult.appendChild(div);
        console.log(phone);

    })

}

const loadPhoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayphoneDetail(data.mainFeatures))
    // console.log(data)
}
const displayphoneDetail = phone => {
    console.log(phone);
    const phoneDetail = document.getElementById('phone-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    < img id = "phone-image" src = "${data.image}" class="card-img-top w-50 h-50" alt = "..." >
        <div class="card-body">
            <h5 class="card-title">${phone.name}</h5>


        </div>`;
    phoneDetail.appendChild(div);
    // console.log(mainFeatures[0]);
}

