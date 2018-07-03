# mmo-html-escape

## descripción
    Escapa los caracteres propios del español y los resevados por HTML mediante entidades de este.
#### lista de caracteres escapados
- &lt;, &gt;
- &amp;
- &quot;, &apos;
- ' '   (*espacio en blanco*)
- \n    (*salto de línea)
- ñ, Ñ
- Á, É, Í, Ó, Ú
- á, é, í, ó, ú
- €
- ü

## instalación
```
    yarn add terkojones/mmo-html-escape
    npm install terkojones/mmo-html-escape
```

## API
#### uso
```javascript
    const escape= require('mmo-html-escape');
```
#### función **escape**

Devuelve una cadena donde los caracteres de la pasada que tienen una entidad HTML asignada han sido reemplazados por esta.
```javascript
    let ret = escape(str[, ignorar]);
```
- *str*: Cadena a escapar.
- *ignorar*: Ignora los caracteres precedidos por el caracter '*escape.skipper*'('\').
- *ret*: Cadena escapada con entidades HTML.

#### método **add**

Agrega nuevos caracteres a reemplazar

```javascript
    escape.add(algo[, reemplazo])
```
- *algo*: caracter a escapar o objeto plano con caracter-entidad como par clave-valor
- *reemplazo*: si *algo* es un caracter reemplazo ha der ser la entidad o cógigo html por el que ha de reemplazarse.

#### propiedad **skipper**

Determina que caracter será utilizado para evitar que el caracter consecuente sea reemplazado por una entidad.
```javascript
    escape.skipper = char
```
- *char*: caracter que evitará el escape del caracter posterior.
