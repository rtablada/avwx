import Metar from '../interfaces/metar';
import { speak } from '../utils';

export default async function visibility(metarData: Metar) {
  await speak(`Visibility ${metarData.visibility.spoken}miles`);
}
