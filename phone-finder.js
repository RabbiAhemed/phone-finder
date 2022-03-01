const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input field
    searchField.value = '';
    // load data/api
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.data.slice(0, 20)))
}
const displaySearchResult = phones => {
    for (const phone of phones) {
        // console.log(phones);
        const searchResult = document.getElementById("search-result");
        const div = document.createElement('div');
        div.innerHTML = ` <div class="card h-100 text-center shadow-lg">
        <img id="phone-image" src="${phone.image}" class="card-img-top img-fluid w-25 h-25" alt="...">
        <h3>Name:${phone.phone_name}</h3>
        <p>Brand: ${phone.brand}</p>
        <button id="details-btn" onclick="loadDetails('${phone.slug}')">See Details</button>
    </div >`
        searchResult.appendChild(div);
    }
}

const loadDetails = (phoneId) => {
    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data.data))
}
const showDetails = (detail) => {
    const div = document.getElementById("phone-details");
    div.innerHTML = `<div class="card h-100 text-center shadow-lg">
        <img id="phone-image" src="${detail.image}" class="card-img-top img-fluid w-25 h-25" alt="...">
        
            <h5>Name:${detail.name}</h5>
            <h5>Realease Date :${detail.name}</h5>
    </div >`
    console.log(detail);
}