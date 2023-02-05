const API_PRODUCT = `https://striveschool-api.herokuapp.com/api/product/`;
const API_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmZmEwZWUzYjkwMzAwMTViMDIxMTAiLCJpYXQiOjE2NzU2MjI5MjYsImV4cCI6MTY3NjgzMjUyNn0.WZQnBgrgS3oDLdLDr1Z5adgS8M0Dvxw8jCiH43DfNRM`;

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {event.preventDefault(); submitProduct();});

const submitProduct = async () => {
    const success = document.querySelector('.alert-success');
    const error = document.querySelector('.alert-danger');

    if (!success.classList.contains("d-none")){
        const heading = success.querySelector(".alert-heading");
        heading.textContent =  "";
        success.classList.add("d-none");
    }
    
    if (!error.classList.contains("d-none")){
        const heading = error.querySelector(".alert-heading");
        heading.textContent =  "";
        error.classList.add("d-none");
    }
    const inputName = document.querySelector('#inputName');
    const inputDescription = document.querySelector('#inputDescription');
    const inputBrand = document.querySelector('#inputBrand');
    const inputImage = document.querySelector('#inputImage');
    const inputPrice = document.querySelector('#inputPrice');
    // {
    //     “_id”: “5d318e1a8541744830bef139”, // SERVER GENERATED
    //     “name”: “3310 cellphone”, // REQUIRED
    //     “description”: “An unforgettable icon.”, // REQUIRED
    //     “brand”: “Nokia”, // REQUIRED
    //     “imageUrl”: “https://bit.ly/3CExjRa”, // REQUIRED
    //     “price”: 100, // REQUIRED
    //     “userId”: “admin”, // SERVER GENERATED
    //     “createdAt”: “2021-09-19T09:32:10.535Z”, // SERVER GENERATED
    //     “updatedAt”: “2021-09-19T09:32:10.535Z”, // SERVER GENERATED
    //     “__v”: 0 // SERVER GENERATED
    //     }
    const product = {
        name: inputName.value,
        description: inputDescription.value,
        brand: inputBrand.value,
        imageUrl: inputImage.value,
        price: parseInt(inputPrice.value),
    };
    const request = {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    };
    try {
        const response = await fetch(API_PRODUCT, request);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            success.querySelector(".alert-heading").textContent = "Well done!";
            success.classList.remove("d-none");
        }
    } catch (err) {
        console.log(err);
        error.querySelector(".alert-heading").textContent = JSON.stringify(err.message);
        error.classList.remove("d-none");
    }
}