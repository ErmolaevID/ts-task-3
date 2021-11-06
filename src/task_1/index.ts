/** Задача 1 - Сущность любой монетки
 * Опишите класс валюты
 * Он должен определять имя(name) валюты, String
 * Содержать количество(value) валюты, Number
 * Содержать количественный тип(unit), в котором исчисляется валюта, String
 * Класс должен предоставлять информацию о типе валюты: Материальная, криптовалюта или металл-депозит
 * Example new Currency("DOGE", 12.5, "satoshi")
 */

export class Currency {
  private readonly _name: string;
  private _value: number;
  private readonly _unit: string;
  private _type: CurrencyType;

  get name() {
    return this._name;
  }

  get value() {
    return this._value;
  }

  set value(newValue: number) {
    if (newValue < 0) {
      throw new Error("Incorrect new value for Currency value");
    }
    this._value = newValue;
  }

  get unit() {
    return this._unit;
  }

  get type() {
    return this._type;
  }

  constructor(name: keyof typeof CurrencyType, value: number, unit: string) {
    if (!name || value < 0 || value === undefined || !unit) {
      throw new Error("Incorrect arguments in Currency constructor");
    }
    this._name = name;
    this._value = value;
    this._unit = unit;
    this._type = CurrencyType[name];
  }
}

export enum CurrencyType {
  "Dollar" = "Material",
  "Ruble" = "Material",
  "ru" = "Material",
  "XRP" = "Crypt",
  "Etherium" = "Crypt",
  "Gold" = "Metal",
  "alpha" = "Crypt",
}
