module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
 
    pwa: {
      name: 'frontend_postulacion',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      workboxPluginMode: 'GenerateSW',
      worboxOptions: {
        skipWaiting: true
      }
  
    }
  
}
