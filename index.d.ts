// TYPES
type Pin = {}

type Analog = {}

type Led = {
  brightness(value: number): void
  blink(on: number, off?: number): void
  turnOn(): void
  turnOff(): void
  toggle(): void
}

type Buzzer = {
  frequency(value: number): void
  beep(on: number, off?: number): void
  turnOn(): void
  turnOff(): void
  toggle(): void
}

type Pot = {
  read(): number
}

type LightSensor = {
  /**
   * @param unit укажите 'lx'
   */
  read(unit?: string): number
}

type Button = {
  on(event: string, callback: Function): void
}

type Servo = {
  /**
   * @param value угол в градусах от 0 до 180
   */
  write(value: number): void
}

type Thermometer = {
  /**
   * @param unit укажите 'C'
   */
  read(unit?: string): number
}

type Ultrasonic = {
  /**
   * @param callback
   * @param unit укажите 'mm'
   */
  ping(
    callback: (error: { msg: string }, distance: number) => void,
    unit: string
  ): void
}

type InfraredReceiver = {
  on(callback: (code: number, repeat: boolean) => void): void
}


// MODULES
declare module '@amperka/led' {
  export function connect(pin: Pin): Led
}

declare module '@amperka/button' {
  export function connect(pin: Pin): Button
}

declare module '@amperka/buzzer' {
  export function connect(pin: Pin): Buzzer
}

declare module '@amperka/pot' {
  export function connect(analog: Analog): Pot
}

declare module '@amperka/light-sensor' {
  export function connect(analog: Analog): LightSensor
}

declare module '@amperka/servo' {
  export function connect(pin: Pin): Servo
}

declare module '@amperka/thermometer' {
  export function connect(analog: Analog): Thermometer
}

declare module '@amperka/ultrasonic' {
  export function connect({ trigPin: Pin, echoPin: Pin }): Ultrasonic
}

declare module '@amperka/ir-receiver' {
  export function connect(pin: Pin): InfraredReceiver
}


// CONSTANTS
declare const P0: Pin
declare const P1: Pin
declare const P2: Pin
declare const P3: Pin
declare const P4: Pin
declare const P5: Pin
declare const P6: Pin
declare const P7: Pin

declare const P8: Pin
declare const P9: Pin
declare const P10: Pin
declare const P11: Pin
declare const P12: Pin
declare const P13: Pin

declare const A0: Analog
declare const A1: Analog
declare const A2: Analog
declare const A3: Analog
declare const A4: Analog
declare const A5: Analog
