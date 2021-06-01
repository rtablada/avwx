import { DateTime } from 'luxon';
import Metar from '../interfaces/metar';
import { speak } from '../utils';

export default async function preamble(stationData: any, metarData: Metar) {
  const parsedTime = DateTime.fromISO(metarData.time.dt).toUTC();

  await speak(`Weather report for ${stationData.name} for ${parsedTime.hour} ${parsedTime.minute} Zulu`);
}
