import Metar from '../interfaces/metar';
import { speak } from '../utils';

export default async function winds(metarData: Metar) {
  if (metarData.wind_direction && metarData.wind_speed) {
    await speak(`Winds ${metarData.wind_direction.spoken} at ${metarData.wind_speed.spoken} knots`);
  } else {
    await speak('Winds calm');
  }
}
