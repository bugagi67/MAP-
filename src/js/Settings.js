export default class Settings {
  constructor() {
    this.default_settings = new Map();
    this.default_settings
      .set('theme', 'dark')
      .set('music', 'trance')
      .set('difficulty', 'easy');
  }

  getSettings() {
    return this.default_settings;
  }

  static showSettings(name) {
    if (name === 'theme') {
      return ['dark', 'light', 'gray'];
    } if (name === 'music') {
      return ['trance', 'pop', 'rock', 'chillout', 'off'];
    } if (name === 'difficulty') {
      return ['easy', 'normal', 'hard', 'nightmare'];
    }
    return (`Неизвестная настройка ${name}`);
  }

  changeSettings(name, value) {
    const allovedValues = Settings.showSettings(name);
    if (allovedValues.includes(value)) {
      this.default_settings.set(name, value);
      return this.default_settings;
    }
    return `Неверное значение ${value} для ${name}`;
  }
}
