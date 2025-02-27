document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const btnSearch = document.getElementById('btnSearch');
    const productsList = document.getElementById('productsList');
    const loadingState = document.getElementById('loadingState');
    const errorMessage = document.getElementById('errorMessage');
    const productTemplate = document.getElementById('productTemplate');

    // Función para mostrar el estado de carga
    const showLoading = (show) => {
        loadingState.classList.toggle('hidden', !show);
        errorMessage.classList.add('hidden');
    };

    // Función para mostrar error
    const showError = (message) => {
        errorMessage.querySelector('span').textContent = message;
        errorMessage.classList.remove('hidden');
        loadingState.classList.add('hidden');
    };

    // Función para crear una tarjeta de producto
    const createProductCard = (product) => {
        const template = productTemplate.content.cloneNode(true);
        
        template.querySelector('.product-name').textContent = product.name;
        template.querySelector('.barcode').textContent = product.barcode;
        template.querySelector('.internal-code').textContent = product.internalCode;
        template.querySelector('.patent').textContent = product.patent;
        template.querySelector('.stock span').textContent = product.stock;

        return template;
    };

    // Función para cargar productos
    const loadProducts = async (searchTerm = '') => {
        showLoading(true);
        productsList.innerHTML = '';

        try {
            // Aquí irá la llamada a tu API/Backend
            // const response = await fetch('tu_endpoint_api');
            // const data = await response.json();
            
            // Simulación de datos (reemplazar con datos reales)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Mostrar los productos
            // data.forEach(product => {
            //     productsList.appendChild(createProductCard(product));
            // });

        } catch (error) {
            showError('Error al cargar los productos. Por favor, intente nuevamente.');
            console.error('Error:', error);
        } finally {
            showLoading(false);
        }
    };

    // Event Listeners
    btnSearch.addEventListener('click', () => {
        loadProducts(searchBar.value.trim());
    });

    searchBar.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            loadProducts(searchBar.value.trim());
        }
    });

    // Cargar productos inicialmente
    loadProducts();
});