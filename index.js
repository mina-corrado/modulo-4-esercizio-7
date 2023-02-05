const API_PRODUCT = `https://striveschool-api.herokuapp.com/api/product/`;
const API_TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RmZmEwZWUzYjkwMzAwMTViMDIxMTAiLCJpYXQiOjE2NzU2MjI5MjYsImV4cCI6MTY3NjgzMjUyNn0.WZQnBgrgS3oDLdLDr1Z5adgS8M0Dvxw8jCiH43DfNRM`;
const request = {
    headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
    }
};
const inserisciProdotto = (item, product) => {
    item.querySelector("h2").textContent = product.name;
    item.querySelector("p").textContent = product.description;
    const img = document.createElement('img');
    img.src = product.imageUrl;
    img.style.maxHeight = "100%";
    item.querySelector("[class^='bg-']").appendChild(img);

};
window.addEventListener("load", async (event) => {
    const response = await fetch(API_PRODUCT, request);
    if (response.ok){
        const data = await response.json();
        const items = document.querySelectorAll('.item');

        for (const [index, product] of data.entries()) {
            const item = items[index];
            inserisciProdotto(item, product);
        }
    }
});