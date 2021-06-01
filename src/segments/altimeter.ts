import Metar from '../interfaces/metar';
import { speak } from '../utils';

export default async function altimeter(metarData: Metar) {
  await speak(`Al tim it er at ${metarData.altimeter.spoken}`);
}
