var relearn_searchindex = [
  {
    "breadcrumb": "Inicio \u003e SSH",
    "content": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos Windows 10. PowerShell. Cliente OpenSSH. Cómo cumplir los requisitos ¿Tengo PowerShell? Pulsa Inicio y escribe:\nPowerShell Si aparece Windows PowerShell, el requisito está cumplido.\n¿Tengo OpenSSH? Abrir PowerShell y ejecutar:\nssh -V Si aparece algo parecido a OpenSSH_for_Windows_9.x El requisito está cumplido.\nSi aparece 'ssh' no se reconoce... Hay que instalar el cliente OpenSSH.\nIr a\nConfiguración ↓ Aplicaciones ↓ Características opcionales Buscar\nOpenSSH Client Instalarlo.\nCerrar PowerShell.\nAbrirlo otra vez.\nRepetir\nssh -V hasta obtener la versión.\nGenerar las claves ssh-keygen -t ed25519 Aceptar la ubicación propuesta.\nElegir una passphrase o pulsar Enter para dejarla vacía.\nComprobar dir $HOME\\.ssh Debe aparecer:\nid_ed25519 id_ed25519.pub ¿Qué significan esos archivos? id_ed25519 Es la clave privada.\nNunca debe enviarse a nadie.\nNunca debe copiarse a otro ordenador.\nid_ed25519.pub Es la clave pública.\nEs la que deberá copiarse posteriormente a la Raspberry Pi.\nProblemas frecuentes No existe la carpeta .ssh Es normal.\nssh-keygen la crea automáticamente.\nYa existen claves No las sobrescribas salvo que quieras reemplazarlas deliberadamente.",
    "description": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos Windows 10. PowerShell. Cliente OpenSSH. Cómo cumplir los requisitos ¿Tengo PowerShell? Pulsa Inicio y escribe:",
    "tags": [],
    "title": "Generar claves SSH — Windows 10",
    "uri": "/ssh/generar-claves-ssh-windows-10/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Bienvenida a naikaraspi5, un ejemplo de página web estática creada con Hugo. 🚀✨",
    "description": "Bienvenida a naikaraspi5, un ejemplo de página web estática creada con Hugo. 🚀✨",
    "tags": [],
    "title": "Inicio",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "Objetivo Montar una Raspberry Pi 5 preparada para desarrollar un sitio web con Hugo, administrarla remotamente mediante SSH y publicarla en GitHub y Netlify.\n1. Montar la Raspberry Pi Montar el hardware:\nRaspberry Pi 5 SSD NVMe o microSD HAT (si procede) disipador ventilador caja fuente de alimentación 2. Preparar Windows En el ordenador desde el que se administrará la Raspberry:\nGenerar claves SSH — Windows 10\ninstalar OpenSSH (si es necesario) generar un par de claves SSH Ed25519 Instalar Git Descarga Git desde:\nhttps://git-scm.com/downloads\nAcepta las opciones predeterminadas del instalador.\nComprobar:\ngit --version Instalar Windows Terminal (opcional) Abre Microsoft Store.\nBusca:\nWindows Terminal Pulsa Instalar.\nComprobar:\nwt Instalar Visual Studio Code (opcional) Descarga Visual Studio Code desde:\nhttps://code.visualstudio.com/\nAcepta las opciones predeterminadas del instalador.\nDurante la instalación es recomendable marcar:\nAdd “Open with Code” action Add to PATH Comprobar:\ncode --version Si el comando no funciona, reinicia la sesión de Windows y vuelve a intentarlo.\n3. Instalar Raspberry Pi OS Utilizar Raspberry Pi Imager.\nEn Edit Settings configurar, al menos:\nhostname usuario contraseña SSH autenticación mediante clave pública clave pública generada en Windows Wi-Fi (si procede) zona horaria distribución del teclado. 4. Primer acceso por SSH Desde Windows:\nssh usuario@hostname Comprobar que la autenticación mediante claves funciona correctamente.\n5. Configurar la Raspberry Pi Actualizar el sistema. sudo apt update sudo apt full-upgrade sudo reboot Comprobar: Usuario con permisos sudo groups Debe aparecer:\nsudo Si no aparece:\nsudo usermod -aG sudo \u003cusuario\u003e Cierra la sesión y vuelve a entrar.\nHostname hostname Debe aparecer el nombre elegido durante la instalación, por ejemplo:\nraspi5 Para cambiarlo:\nsudo raspi-config Ir a:\nSystem Options ↓ Hostname Fecha y hora Mostrar la fecha y la hora actuales:\ndate Comprueba que son correctas.\nZona horaria Comprobar la zona horaria Mostrar la configuración:\ntimedatectl Debe aparecer una línea similar a:\nTime zone: Europe/Madrid Para cambiarla:\nsudo raspi-config Ir a:\nLocalisation Options ↓ Timezone Almacenamiento Mostrar los dispositivos de almacenamiento:\nlsblk Mostrar el espacio disponible:\ndf -h Comprueba que:\naparece el SSD NVMe o la microSD esperados; el sistema ha arrancado desde el dispositivo correcto; hay suficiente espacio libre. Conexión a Internet. ping -c 4 google.com Instalar las herramientas básicas: Git Vim Curl Tree etc. sudo apt install -y git vim curl tree xclip 6. Instalar Tailscale en la Raspberry Pi Instalar Tailscale\nIniciar sesión.\nAutorizar el dispositivo.\nComprobar que aparece en la red Tailscale.\n7. Instalar Tailscale en Windows Instalar Tailscale\nIniciar sesión con la misma cuenta.\nComprobar que Windows y la Raspberry Pi pueden verse entre sí.\n8. Configurar Git para GitHub En la Raspberry:\nConfigurar user.name y user.email git config --global user.name \"Tu nombre\" git config --global user.email \"tu@email.com\" Generar un par de claves SSH propio ssh-keygen -t ed25519 -C \"tu@email.com\" Pulsa Enter para aceptar la ubicación por defecto.\nSi no deseas proteger la clave con una contraseña, pulsa Enter dos veces más.\nComprobar:\nls ~/.ssh Debe aparecer, al menos:\nid_ed25519 id_ed25519.pub Añadir la clave pública a GitHub. cat ~/.ssh/id_ed25519.pub | xclip En GitHub:\nSettings ↓ SSH and GPG keys ↓ New SSH key Pega la clave y guarda los cambios.\nComprobar que puede hacerse:\ngit clone git@github.com:... sin solicitar usuario ni contraseña.\n9. Instalar Hugo Descargar e instalar la versión oficial desde GitHub Releases.\nComprobar:\nhugo version 10. Crear el sitio Desde Windows, conectado mediante SSH a la Raspberry:\ncrear el sitio Hugo instalar el tema personalizar la configuración inicial comprobar que el sitio compila correctamente. 11. Crear el repositorio en GitHub crear un repositorio vacío conectar el repositorio local realizar el primer commit subir el proyecto. 12. Publicar con Netlify conectar Netlify con GitHub seleccionar el repositorio configurar el despliegue realizar la primera publicación. 13. Verificar el flujo completo Modificar una página.\nEjecutar:\ngit add . git commit -m \"Cambios\" git push Comprobar que Netlify publica automáticamente la nueva versión del sitio.",
    "description": "Objetivo Montar una Raspberry Pi 5 preparada para desarrollar un sitio web con Hugo, administrarla remotamente mediante SSH y publicarla en GitHub y Netlify.\n1. Montar la Raspberry Pi Montar el hardware:\nRaspberry Pi 5 SSD NVMe o microSD HAT (si procede) disipador ventilador caja fuente de alimentación 2. Preparar Windows En el ordenador desde el que se administrará la Raspberry:",
    "tags": [],
    "title": "Flujo de trabajo",
    "uri": "/flujo_de_trabajo/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e SSH",
    "content": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos iPad con iPadOS. Conexión a Internet. Una aplicación SSH. Cómo cumplir los requisitos ¿Tengo una aplicación SSH? Busca en la pantalla de inicio:\nTermius Blink Shell Si tienes cualquiera de las dos, el requisito está cumplido.\nNo tengo ninguna Abre la App Store.\nBusca:\nTermius Instálala.\nEn esta guía se utilizará Termius.\nGenerar las claves Abre Termius.\nVe a:\nSettings ↓ Keychain ↓ + Selecciona:\nGenerate Key Tipo de clave:\nEd25519 Asigna un nombre, por ejemplo:\niPad 11 Pulsa Save.\nComprobar En Keychain debe aparecer una nueva clave llamada, por ejemplo:\niPad 11 Ábrela.\nDebe existir una opción similar a:\nPublic Key o\nCopy Public Key La clave se ha generado correctamente.\n¿Qué significan esas claves? Clave privada La guarda Termius.\nNo debe exportarse ni compartirse.\nClave pública Es la que deberá copiarse posteriormente a la Raspberry Pi.\nPuede copiarse al portapapeles desde la propia aplicación.\nProblemas frecuentes No aparece “Generate Key” Comprueba que estás en Settings → Keychain.\nHe generado una clave RSA No pasa nada, pero para esta guía se recomienda Ed25519.\nPuedes eliminar la clave RSA y crear una nueva Ed25519.",
    "description": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos iPad con iPadOS. Conexión a Internet. Una aplicación SSH. Cómo cumplir los requisitos ¿Tengo una aplicación SSH? Busca en la pantalla de inicio:",
    "tags": [],
    "title": "Generar claves SSH — iPad 11",
    "uri": "/ssh/generar-claves-ssh-ipad-11/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Visión general",
    "uri": "/componentes/compos1_vision_general/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "Decomponiendo por partes:",
    "description": "Decomponiendo por partes:",
    "tags": [],
    "title": "Componentes de una Raspberry Pi 5",
    "uri": "/componentes/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "El cerebro",
    "uri": "/componentes/compos2_el_cerebro/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e SSH",
    "content": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos iPhone con iOS. Conexión a Internet. Una aplicación SSH. Cómo cumplir los requisitos ¿Tengo una aplicación SSH? Busca en la pantalla de inicio:\nTermius Blink Shell Si tienes cualquiera de las dos, el requisito está cumplido.\nNo tengo ninguna Abre la App Store.\nBusca:\nTermius Instálala.\nEn esta guía se utilizará Termius.\nGenerar las claves Abre Termius.\nVe a:\nSettings ↓ Keychain ↓ + Selecciona:\nGenerate Key Tipo de clave:\nEd25519 Asigna un nombre, por ejemplo:\niPhone 11 Pulsa Save.\nComprobar En Keychain debe aparecer una nueva clave llamada, por ejemplo:\niPhone 11 Ábrela.\nDebe existir una opción similar a:\nPublic Key o\nCopy Public Key La clave se ha generado correctamente.\n¿Qué significan esas claves? Clave privada La guarda Termius.\nNo debe exportarse ni compartirse.\nClave pública Es la que deberá copiarse posteriormente a la Raspberry Pi.\nPuede copiarse al portapapeles desde la propia aplicación.\nProblemas frecuentes No aparece “Generate Key” Comprueba que estás en Settings → Keychain.\nHe generado una clave RSA No pasa nada, pero para esta guía se recomienda Ed25519.\nPuedes eliminar la clave RSA y crear una nueva Ed25519.",
    "description": "Objetivo Generar un par de claves SSH Ed25519 que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.\nRequisitos iPhone con iOS. Conexión a Internet. Una aplicación SSH. Cómo cumplir los requisitos ¿Tengo una aplicación SSH? Busca en la pantalla de inicio:",
    "tags": [],
    "title": "Generar claves SSH — iPhone 11",
    "uri": "/ssh/generar-claves-ssh-iphone-11/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e SSH",
    "content": "Objetivo Copiar la clave pública de un dispositivo (Windows, iPad, iPhone…) a la Raspberry Pi para que posteriormente pueda autorizarse y utilizarse para iniciar sesión mediante SSH.\nRequisitos Raspberry Pi encendida. Servicio SSH funcionando. Disponer de una clave pública (*.pub) en el dispositivo cliente. Cómo cumplir los requisitos ¿Está funcionando SSH? En la Raspberry, abre una terminal y ejecuta:\nsystemctl status ssh Si aparece active (running) El requisito está cumplido.\nSi aparece inactive Inicia el servicio:\nsudo systemctl enable --now ssh ¿Tengo una clave pública? Debe existir un archivo que termine en:\n.pub Por ejemplo:\nid_ed25519.pub Si todavía no lo tienes, consulta el documento correspondiente a tu dispositivo:\nGenerar claves SSH — Windows 10 Generar claves SSH — iPad 11 Generar claves SSH — iPhone 11 Copiar la clave pública Desde Windows Mostrar la clave:\ntype $HOME\\.ssh\\id_ed25519.pub Seleccionar toda la línea y copiarla al portapapeles.\nDesde iPad o iPhone Abrir Termius.\nIr a:\nSettings ↓ Keychain Abrir la clave.\nPulsar:\nCopy Public Key Pegar la clave en la Raspberry Conéctate a la Raspberry mediante SSH utilizando un método que ya funcione (por ejemplo, contraseña o una clave ya autorizada).\nEdita:\nvim ~/.ssh/authorized_keys Pega la clave pública en una línea nueva.\nGuarda el archivo.\nComprobar Muestra el contenido del archivo:\ncat ~/.ssh/authorized_keys Debe aparecer la nueva clave pública.\nProblemas frecuentes No existe authorized_keys Es normal.\nCréalo:\ntouch ~/.ssh/authorized_keys chmod 600 ~/.ssh/authorized_keys He copiado la clave privada La clave privada no debe copiarse nunca a la Raspberry.\nComprueba que el archivo utilizado termina en:\n.pub o que has utilizado la opción Copy Public Key en Termius.",
    "description": "Objetivo Copiar la clave pública de un dispositivo (Windows, iPad, iPhone…) a la Raspberry Pi para que posteriormente pueda autorizarse y utilizarse para iniciar sesión mediante SSH.\nRequisitos Raspberry Pi encendida. Servicio SSH funcionando. Disponer de una clave pública (*.pub) en el dispositivo cliente. Cómo cumplir los requisitos ¿Está funcionando SSH? En la Raspberry, abre una terminal y ejecuta:",
    "tags": [],
    "title": "Copiar una clave pública a la Raspberry Pi 5",
    "uri": "/ssh/copiar-clave-publica-a-raspberry-pi-5/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "Montaje e instalación de la Raspberry Pi 5",
    "description": "Montaje e instalación de la Raspberry Pi 5",
    "tags": [],
    "title": "Instalación",
    "uri": "/instalacion/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Tailscale",
    "content": "Instalar Tailscale Requisitos Windows 10. Conexión a Internet. Descargar Abrir:\nhttps://tailscale.com/download\nDescargar la versión para Windows.\nInstalar Ejecutar el instalador.\nAceptar las opciones por defecto.\nIniciar sesión Abrir Tailscale desde el menú Inicio.\nPulsar Log in.\nElegir una cuenta:\nGoogle Microsoft GitHub Apple etc. Comprobar El icono de Tailscale debe aparecer en la bandeja del sistema.\nEl equipo ya forma parte de la red privada Tailscale.",
    "description": "Instalar Tailscale Requisitos Windows 10. Conexión a Internet. Descargar Abrir:\nhttps://tailscale.com/download\nDescargar la versión para Windows.\nInstalar Ejecutar el instalador.",
    "tags": [],
    "title": "Instalar Tailscale — Windows 10",
    "uri": "/tailscale/instalar-tailscale-windows-10/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "RP1: controlador de entrada y salida",
    "uri": "/componentes/compos3_rp1_controlador_entrada_y_salida/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e SSH",
    "content": "Objetivo Permitir que uno o varios dispositivos (Windows, iPad, iPhone…) puedan iniciar sesión en la Raspberry Pi mediante SSH utilizando claves en lugar de una contraseña.\nRequisitos Raspberry Pi con SSH instalado y funcionando. Al menos una clave pública (*.pub) generada en el dispositivo cliente. Cómo cumplir los requisitos ¿Está funcionando SSH? En la Raspberry, abre una terminal y ejecuta:\nsystemctl status ssh Si aparece active (running) El requisito está cumplido.\nSi aparece inactive Inicia el servicio:\nsudo systemctl enable --now ssh ¿Dispongo de una clave pública? La clave pública suele terminar en:\n.pub Por ejemplo:\nid_ed25519.pub Si todavía no la has generado, consulta el documento correspondiente al dispositivo cliente.\nAutorizar la clave Abre una terminal en la Raspberry.\nComprueba que existe el directorio .ssh:\nls -ld ~/.ssh Si no existe, créalo:\nmkdir -p ~/.ssh chmod 700 ~/.ssh Edita el archivo:\nvim ~/.ssh/authorized_keys Pega la clave pública completa en una línea nueva.\nGuarda el archivo.\nComprobar permisos Ejecuta:\nchmod 600 ~/.ssh/authorized_keys Comprobar Desde el dispositivo cliente, intenta conectarte:\nssh usuario@raspi Si entra sin pedir la contraseña del usuario, la clave ha quedado autorizada correctamente.\n¿Qué contiene authorized_keys? Cada línea corresponde a un dispositivo autorizado.\nPor ejemplo:\nssh-ed25519 AAAAC3... Windows 10 ssh-ed25519 AAAAC3... iPad 11 ssh-ed25519 AAAAC3... iPhone 11 Problemas frecuentes Sigue pidiendo contraseña Comprueba que has copiado la clave pública (*.pub) y no la clave privada.\nHe pegado varias veces la misma clave No ocurre nada grave.\nPuedes eliminar las líneas duplicadas y guardar el archivo.\nQuiero impedir el acceso a un dispositivo Borra la línea correspondiente de ~/.ssh/authorized_keys.\nEse dispositivo dejará de poder iniciar sesión mediante SSH.",
    "description": "Objetivo Permitir que uno o varios dispositivos (Windows, iPad, iPhone…) puedan iniciar sesión en la Raspberry Pi mediante SSH utilizando claves en lugar de una contraseña.\nRequisitos Raspberry Pi con SSH instalado y funcionando. Al menos una clave pública (*.pub) generada en el dispositivo cliente. Cómo cumplir los requisitos ¿Está funcionando SSH? En la Raspberry, abre una terminal y ejecuta:",
    "tags": [],
    "title": "Autorizar claves SSH — Raspberry Pi 5",
    "uri": "/ssh/autorizar-claves-ssh-en-raspberry-pi-5/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Tailscale",
    "content": "Instalar Tailscale Requisitos Raspberry Pi OS instalado. Conexión a Internet. Usuario con permisos sudo. Instalar curl -fsSL https://tailscale.com/install.sh | sh Conectar el equipo sudo tailscale up Se mostrará una URL.\nÁbrela desde cualquier navegador, inicia sesión y autoriza la Raspberry.\nComprobar tailscale status tailscale ip La Raspberry ya puede utilizarse desde cualquier red.",
    "description": "Instalar Tailscale Requisitos Raspberry Pi OS instalado. Conexión a Internet. Usuario con permisos sudo. Instalar curl -fsSL https://tailscale.com/install.sh | sh Conectar el equipo sudo tailscale up Se mostrará una URL.",
    "tags": [],
    "title": "Instalar Tailscale — Raspberry Pi 5",
    "uri": "/tailscale/instalar-tailscale-raspberry-pi-5/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "QUÉ ES SSH (Secure Shell) es un protocolo.**\nUn protocolo es un sistema de normas que regulan la comunicación entre dos o más sistemas.\nPermite CONECTARSE DE FORMA SEGURA A OTRO ORDENADOR a través de una red para administrarlo como si estuvieras delante de él.\nCon SSH puedes:\niniciar sesión en otro equipo; ejecutar comandos; copiar archivos; administrar el sistema de forma remota. SSH cifra toda la comunicación entre ambos equipos, de modo que nadie puede leer ni modificar los datos durante la conexión.\nEn esta documentación, SSH se utilizará para acceder a la Raspberry Pi desde un ordenador, una tablet o un teléfono móvil.",
    "description": "QUÉ ES SSH (Secure Shell) es un protocolo.**\nUn protocolo es un sistema de normas que regulan la comunicación entre dos o más sistemas.\nPermite CONECTARSE DE FORMA SEGURA A OTRO ORDENADOR a través de una red para administrarlo como si estuvieras delante de él.\nCon SSH puedes:\niniciar sesión en otro equipo; ejecutar comandos; copiar archivos; administrar el sistema de forma remota. SSH cifra toda la comunicación entre ambos equipos, de modo que nadie puede leer ni modificar los datos durante la conexión.",
    "tags": [],
    "title": "SSH",
    "uri": "/ssh/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Todo lo eléctrico",
    "uri": "/componentes/compos4_todo_lo_electrico/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Tailscale",
    "content": "Instalar Tailscale Requisitos iPad con iPadOS. Apple ID. Conexión a Internet. Instalar Abrir App Store.\nBuscar:\nTailscale Instalar la aplicación oficial.\nIniciar sesión Abrir Tailscale.\nPulsar Log in.\nElegir:\nGoogle Microsoft GitHub Apple etc. Aceptar la creación de la VPN cuando iPadOS lo solicite.\nComprobar El icono VPN aparecerá en la barra de estado cuando Tailscale esté conectado.\nEl iPad ya puede acceder a los demás equipos de la red Tailscale.",
    "description": "Instalar Tailscale Requisitos iPad con iPadOS. Apple ID. Conexión a Internet. Instalar Abrir App Store.\nBuscar:\nTailscale Instalar la aplicación oficial.\nIniciar sesión Abrir Tailscale.",
    "tags": [],
    "title": "Instalar Tailscale — iPad 11",
    "uri": "/tailscale/instalar-tailscale-ipad-11/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Refrigeración y temperatura",
    "uri": "/componentes/compos5_refrigeracion_y_temperatura/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "QUÉ ES Tailscale es un programa.\nEs un programa que CONECTA DE FORMA SEGURA tus dispositivos (ordenador, Raspberry Pi, móvil, tablet…) a través de Internet.\nPara que puedan comunicarse entre sí como si estuvieran conectados al mismo router de casa, aunque cada uno esté en un lugar distinto.\nDicho en lenguaje técnico:\nTailscale es una VPN de malla (mesh VPN) que crea una red privada segura entre tus dispositivos a través de Internet.\nEn pocas palabras:\nHace que ordenadores, móviles y servidores se comporten como si estuvieran en la misma red local, aunque estén en lugares distintos, sin necesidad de abrir puertos ni configurar el router.\nPor ejemplo, con Tailscale puedes hacer desde cualquier lugar:\nssh usuario@raspi como si la Raspberry estuviera conectada al mismo Wi-Fi que tu ordenador.",
    "description": "QUÉ ES Tailscale es un programa.\nEs un programa que CONECTA DE FORMA SEGURA tus dispositivos (ordenador, Raspberry Pi, móvil, tablet…) a través de Internet.\nPara que puedan comunicarse entre sí como si estuvieran conectados al mismo router de casa, aunque cada uno esté en un lugar distinto.\nDicho en lenguaje técnico:\nTailscale es una VPN de malla (mesh VPN) que crea una red privada segura entre tus dispositivos a través de Internet.",
    "tags": [],
    "title": "Tailscale",
    "uri": "/tailscale/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Imagen y vídeo",
    "uri": "/componentes/compos6_imagen_y_video/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Tailscale",
    "content": "Instalar Tailscale Requisitos iPhone con iOS. Apple ID. Conexión a Internet. Instalar Abrir App Store.\nBuscar:\nTailscale Instalar la aplicación oficial.\nIniciar sesión Abrir Tailscale.\nPulsar Log in.\nElegir:\nGoogle Microsoft GitHub Apple etc. Aceptar la creación de la VPN cuando iOS lo solicite.\nComprobar El icono VPN aparecerá en la barra de estado cuando Tailscale esté conectado.\nEl iPhone ya puede acceder a todos los dispositivos de la red Tailscale.",
    "description": "Instalar Tailscale Requisitos iPhone con iOS. Apple ID. Conexión a Internet. Instalar Abrir App Store.\nBuscar:\nTailscale Instalar la aplicación oficial.\nIniciar sesión Abrir Tailscale.",
    "tags": [],
    "title": "Instalar Tailscale — iPhone 11",
    "uri": "/tailscale/instalar-tailscale-iphone-11/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Cámaras",
    "uri": "/componentes/compos7_camaras/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Comunicaciones",
    "uri": "/componentes/compos8_comunicaciones/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Expansión",
    "uri": "/componentes/compos9_expansion/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Conectores de servicio",
    "uri": "/componentes/compos10_conectores_de_servicio/index.html"
  },
  {
    "breadcrumb": "Inicio \u003e Componentes de una Raspberry Pi 5",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Almacenamiento",
    "uri": "/componentes/compos11_almacenamiento/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "categorías",
    "uri": "/categor%C3%ADas/index.html"
  },
  {
    "breadcrumb": "Inicio",
    "content": "",
    "description": "",
    "tags": [],
    "title": "etiquetas",
    "uri": "/etiquetas/index.html"
  }
]
