const desmenu = (prefix, pushname) => {
    return `
*Comandos De Descargas ✅*
 
═════════════════════════════

*AUDIO*

${prefix}play2
Una alternativa por si *play llego a su limite de canciones
${prefix}play
Coloca el nombre de la cancion, o el link del video YT
${prefix}ytmp3
Coloca el link del video YT

*Ejemplo*

${prefix}ytmp3 https://www.youtube.com/xxxxxxxxxxxxx

═════════════════════════════

*VIDEO*
${prefix}ytmp4
Coloca el link del video YT

*Ejemplo*

${prefix}ytmp4 https://www.youtube.com/xxxxxxxxxxxxx

═════════════════════════════
    
_*play y *play2 tiene un limite de 2000 canciones en el server, si llega a su limite se restablecera dentro de 24 horas_
     
by shanduy`

}

exports.desmenu = desmenu
