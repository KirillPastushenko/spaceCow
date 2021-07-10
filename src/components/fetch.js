const params = {
    key:'26ae6b396d8a402a84be28a32951dd57', 
    pwd: 'Wer461548'
};
const autofonAPIURL = 'http://176.9.114.139:9002/jsonapi/'

const getURL = (APImethod) => {
    const url = new URL(`${autofonAPIURL}${APImethod}${APImethod ? '/' : ''}`);
    url.search = new URLSearchParams(params).toString();
    return url
}

const data = [
    {
    "mid": "166563",
    "start": 1619901343,
    "end": 1622406943
    }
];

export const getDataFromServer = async (APImethod) => {
    try {
        const response = await fetch(getURL(APImethod), {
            method: 'POST',
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getTrack = async () => {
    const data = await getDataFromServer('');
    const points = data[0].points;
    const result = points.map(function(point){
        return {
            position: {
              lat: point.lat,
              lng: point.lng
          }
        }
    })
    console.log(result);
   return result;
}