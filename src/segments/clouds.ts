import { CLOUDS } from '../dictionaries';
import Metar, { Cloud } from '../interfaces/metar';
import { speak, flReadout } from '../utils';

export default async function clouds(metarData: Metar) {
  if (metarData.clouds.length === 0) {
    await speak('No clouds');
  }

  for (let i = 0; i < metarData.clouds.length; i += 1) {
    const cloudData : Cloud = metarData.clouds[i];

    await speak(`${CLOUDS[cloudData.type]} at ${flReadout(cloudData.altitude)}`);
  }
}
