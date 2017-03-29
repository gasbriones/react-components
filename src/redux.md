# Introducción a Redux.js
    redux es un contenedor de datos
    Redux es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente entre cliente y servidor, testeable y con una gran experiencia de desarrollo.
    Redux está en gran parte influenciado por la arquitectura Flux propuesta por Facebook para las aplicaciones de React.js y por el lenguaje Elm, esta muy pensado para React.js, pero también se puede usar con Angular.js, Backbone.js o simplemente con Vanilla JS.
    
# Principios
Redux se basa en tres principios:
* Todo el estado de tu aplicación esta contenido en un único store
* El estado es de solo lectura (inmutable)
* Los cambios se hacen mediante funciones puras (Para controlar como el store es modificado por las acciones se usan reducers puros)

#Instalando Redux en nuestro proyecto
    npm i -S redux
    npm i -S react-redux
    npm i -D redux-devtools

#Luego podemos importarlo como cualquier otro módulo
    import redux from 'redux'
    
    



    
