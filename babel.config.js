module: {
  rules: [
    {     
      options: {
        presets: [
          '@babel/preset-react',
          {
            'plugins': [
              "@babel/plugin-proposal-private-property-in-object",
              { "loose": false }
            ]
          }
        ]
      }
    },
  ]
}
