module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/models': './src/models',
          '@/navigator': './src/navigator',
          '@/config': './src/config',
          '@/assets': './src/assets',
          '@/compontns': './src/components'
        }
      }
    ]
  ]
};
