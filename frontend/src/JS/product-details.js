document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId) {
        fetch(`/api/products/${productId}`)
            .then(response => response.json())
            .then(product => {
                const productDetailsSection = document.getElementById('product-details');
                productDetailsSection.innerHTML = `
                    <h1>${product.name}</h1>
                    <img src="${product.image}" alt="${product.name}">
                    <p>${product.description}</p>
                    <p>Prix: ${product.price}€</p>
                    <button class="button">Ajouter au panier</button>
                `;
            })
            .catch(error => console.error('Error fetching product details:', error));
    } else {
        console.error('No product ID found in URL');
    }
});
