import Settings from '../Settings';

test('testing the change Settings method using valid values (theme: light)', () => {
  const result = new Settings();
  result.changeSettings('theme', 'light');

  const expected = [
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ];

  expect(Array.from(result.getSettings())).toEqual(expected);
});

test('testing the change Settings method using valid values (music: rock)', () => {
  const result = new Settings();
  result.changeSettings('music', 'rock');

  const expected = [
    ['theme', 'dark'],
    ['music', 'rock'],
    ['difficulty', 'easy'],
  ];

  expect(Array.from(result.getSettings())).toEqual(expected);
});

test('testing the change Settings method using valid values (difficulty: hard)', () => {
  const result = new Settings();
  result.changeSettings('difficulty', 'hard');

  const expected = [
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'hard'],
  ];

  expect(Array.from(result.getSettings())).toEqual(expected);
});

test('testing the showSetting method using an invalid name', () => {
  const expected = 'Неизвестная настройка difficult';
  expect(Settings.showSettings('difficult')).toEqual(expected);
});

test('testing the change Settings method using an invalid value', () => {
  const result = new Settings();
  const expected = 'Неверное значение dar для theme';
  expect(result.changeSettings('theme', 'dar')).toEqual(expected);
});
