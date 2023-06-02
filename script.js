function translate() {
    const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';
    const apiKey = 'c434b951ecmsh14f9d4693b33729p19195bjsn2e864ad0fab1';
    const sourceLanguage = 'en';
    const targetLanguage = 'ur';

    const textInput = document.getElementById('text-input').value;

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: new URLSearchParams({
            q: textInput,
            source: sourceLanguage,
            target: targetLanguage
        })
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const translation = data.data.translations[0].translatedText;
            document.getElementById('translation-output').textContent = translation;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
