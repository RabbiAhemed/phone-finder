const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear input field
    searchField.value = '';
    // load data/api



    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then((res) => res.json()).then((data) => { if (data.status == false) { document.getElementById("no-result").style.display = "block"; } else { displaySearchResult(data.data.slice(0, 20)); document.getElementById("no-result").style.display = "none"; } });
}

//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data =>
//             displaySearchResult(data.data.slice(0, 20)))
// }


const displaySearchResult = phones => {
    for (const phone of phones) {

        const searchResult = document.getElementById("search-result");
        const div = document.createElement('div');
        div.innerHTML = ` <div class="card h-100 text-center shadow-lg">
        <div class="card-body">
        <img id="phone-image" src="${phone.image}" class="card-img-top img-fluid w-25 h-50" alt="...">
        <h3>Name:${phone.phone_name}</h3>
        <p>Brand: ${phone.brand}</p>
        <button id="details-btn" onclick="loadDetails('${phone.slug}')" class="w-50 mx-auto mb-3 p-2 rounded"> See Details</button >
        </div>
    </div > `
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
    const detailDiv = document.getElementById("phone-details");
    const div = document.createElement('div');
    div.innerHTML = `<div class="text-center shadow-lg mx-auto">
    <div class="card h-100">
        <img id="phone-image" src="${detail.image}" class="card-img-top img-fluid w-25 h-25 mb-4" alt="...">
        <div class="card-body">
            <h5 class="card-title">Name:${detail.name}</h5>
            <h5 class="card-text">Brand:${detail.brand}</h5>
            <h5 class="card-text">Released Date:${detail.releaseDate ? detail.releaseDate : 'no release date found'}</h5>
            <p class="text-center pt-3 fw-bold card-text"><u>Main Feauters</u></p>
            <p class="card-text">Storage:${detail.mainFeatures.storage}</p>
            <p class="card-text">Display:${detail.mainFeatures.displaySize}</p>
            <p class="card-text">Chipset:${detail.mainFeatures.chipSet}</p>
            <p class="card-text">Memory:${detail.mainFeatures.memory}</p>
            <p class="card-text">Sensor:${detail.mainFeatures.sensors.join(', ')}</p>
            <p class="card-text">Others:</p>
            <p class="card-text">WLAN:${detail.others?.WLAN ? detail.others.WLAN : 'Not Available'}</p>
            <p class="card-text">Bluetooth:${detail.others?.bluetooth ? detail.others.bluetooth : 'No information found'}</p>
            <p class="card-text">GPS:${detail?.others?.GPS ? detail.others.GPS : 'No information found'}</p>
            <p class="card-text">NFC:${detail?.others?.NFC ? detail.others.NFC : 'No information foind'}</p>
            <p id="radio" class="card-text">Radio:${detail?.others?.Radio ? detail.others.Radio : 'No information found'}</p>
            <p class="card-text">USB:${detail?.others?.USB ? detail.others.USB : 'No information found'}</p>    
        </div>
    </div > `
    detailDiv.appendChild(div);
    console.log(detail, detail[0]);
}