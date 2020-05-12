import resolve from '@rollup/plugin-node-resolve'

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    '@amperka/led',
    '@amperka/button',
    '@amperka/buzzer',
    '@amperka/pot',
    '@amperka/light-sensor',
    '@amperka/servo',
    '@amperka/thermometer',
    '@amperka/ultrasonic',
    '@amperka/ir-receiver',
  ],
  plugins: [
    resolve(),
  ],
}
