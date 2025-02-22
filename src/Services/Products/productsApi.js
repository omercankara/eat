import axios from "axios"; 

export const getProduct = async () => {  
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';
    try {
        const response = await axios.get(url);  // await kullanabilmek için async fonksiyon olmalı
        return response;  // API'den gelen 'meals' verisini döndürüyoruz
    } catch (err) {
        console.error('API çağrısında hata:', err);
        return [];  // Hata durumunda boş dizi döndür
    }
};


export const getProductDetailById = async (payload) => {
    // Dinamik URL oluşturma (payload'ı doğru şekilde URL'ye yerleştirmek)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${payload}`;
    try {
        const response = await axios.get(url);  // API'ye GET isteği gönderiyoruz
        return response.data.meals;  // meals verisini döndürüyoruz
    } catch (err) {
        console.error('API çağrısında hata:', err);
        return [];  // Hata durumunda boş dizi döndürüyoruz
    }
};
