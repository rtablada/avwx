import https from 'https';
import Metar from './interfaces/metar';
import winds from './segments/wind';
import visibility from './segments/visibility';
import clouds from './segments/clouds';
import altimeter from './segments/altimeter';
import preamble from './segments/preamble';

const token = process.env.AVWX_TOKEN;
const defaultICAO = process.env.METAR_ICAO || 'KJFK';

const fetchJSON = (url) => new Promise((resolve) => {
  https.get(url, (response) => {
    let body = '';
    response.on('data', (d) => {
      body += d;
    });
    response.on('end', () => resolve(JSON.parse(body)));
  });
});

export default async function main(icao:string = defaultICAO) {
  const metarData: Metar = await fetchJSON(`https://avwx.rest/api/metar/${icao}?token=${token}`) as Metar;
  const stationData:any = await fetchJSON(`https://avwx.rest/api/station/${icao}?token=${token}`);

  console.log(metarData.sanitized);

  await preamble(stationData, metarData);
  await winds(metarData);
  await visibility(metarData);
  await clouds(metarData);
  await altimeter(metarData);
}
