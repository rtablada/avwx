import https from 'https';
import { DateTime } from 'luxon';
import Metar from './interfaces/metar';
import winds from './segments/wind';
import { speak } from './utils';
import visibility from './segments/visibility';

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

  const parsedTime = DateTime.fromISO(metarData.time.dt).toUTC();

  await speak(`Weather report for ${stationData.name} for ${parsedTime.hour} ${parsedTime.minute} Zulu`);
  await winds(metarData);
  await visibility(metarData);
}
