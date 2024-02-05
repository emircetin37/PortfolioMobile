import DocumentPicker from 'react-native-document-picker';
import * as ImagePicker from 'react-native-image-picker';
export const genderOptions = [
    { label: 'Erkek', value: 'Erkek', key: 'Erkek' },
    { label: 'Kadın', value: 'Kadın', key: 'Erkek' },
]

export const employmentStatusOptions = [
    { label: 'Öğrenci', value: 'Öğrenci', key: 'Öğrenci' },
    { label: 'Çalışan', value: 'Çalışan', key: 'Çalışan' },
    { label: 'İşsiz', value: 'İşsiz', key: 'İşsiz' },
]

export const educationLevelOptions = [
    { label: 'İlkokul', value: 'İlkokul', key: 'İlkokul' },
    { label: 'Ortaokul', value: 'Ortaokul', key: 'Ortaokul' },
    { label: 'Lise', value: 'Lise', key: 'Lise' },
    { label: 'Üniversite', value: 'Üniversite', key: 'Üniversite' },
]
const COUNTRY_API_URL = 'https://restcountries.com/v3.1/all';
const CITY_API_URL = 'https://countriesnow.space/api/v0.1/countries/cities';
export const getCountry = async () => {
    try {
        const response = await fetch(COUNTRY_API_URL);
        const data: [] = await response.json();
        const countryData = data.map((country: any, index) => ({
            label: country?.name?.common as string,
            value: country?.name?.common as string,
            key: 'Country' + index,
        }))
        return countryData;
    } catch (error) {
        console.error("Error fetching country data:", error);
        throw error;
    }
}

export const getCity = async (country: string) => {
    try {
        const response = await fetch(CITY_API_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ country })
        });
        if (response.ok) {
            const data: any = await response.json();
            const cityData = data.data.map((city: any, index: number) => ({
                label: city,
                value: city,
                key: 'City' + index
            }))
            return cityData
        }
        return []
    } catch (error) {
        console.error("Error fetching city data:", error);
        throw error;
    }
}

export const formatDateString = (dateString: Date) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
};

export const selectPdf = async () => {
    try {
        const result = await DocumentPicker.pick({ type: DocumentPicker.types.pdf });
        return result[0].name?.toString();
    } catch (error) {

    }
}


export const selectImage = async () => {
    const options = {
        mediaType: 'photo',
        includeBase64: true,
    };

    return new Promise((resolve, reject) => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (!response.didCancel && response.assets.length > 0) {
                const selectedAsset = response.assets[0];
                resolve(selectedAsset.base64);
            } else {
                reject(new Error('Image selection canceled or failed.'));
            }
        });
    });
};