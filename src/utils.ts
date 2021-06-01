import say from 'say';

export function speak(str: string) {
  return new Promise<void>((resolve) => say.speak(str, 'Samantha', 1, () => {
    resolve();
  }));
}
