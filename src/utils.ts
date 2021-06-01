import say from 'say';

export function speak(str: string) {
  return new Promise<void>((resolve) => say.speak(str, 'Samantha', 1, () => {
    resolve();
  }));
}

export function numberSplit(altitude: number) {
  return altitude.toString().split('').join(' ');
}

export function flReadout(altitude: number) {
  return altitude < 100 ? `${altitude}00 feet` : `Flight level ${numberSplit(altitude)}`;
}
