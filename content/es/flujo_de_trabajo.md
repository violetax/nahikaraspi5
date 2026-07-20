---
title: "Flujo de trabajo"
weight: 2
---

# Objetivo

Montar una Raspberry Pi 5 preparada para desarrollar un sitio web con Hugo, administrarla remotamente mediante SSH y publicarla en GitHub y Netlify.

---

# 1. Montar la Raspberry Pi

Montar el hardware:

- Raspberry Pi 5
- SSD NVMe o microSD
- HAT (si procede)
- disipador
- ventilador
- caja
- fuente de alimentación

---

# 2. Preparar Windows

En el ordenador desde el que se administrará la Raspberry:

[Generar claves SSH — Windows 10](SSH/generar-claves-ssh-windows-10/)
- instalar OpenSSH (si es necesario)
- generar un par de claves SSH Ed25519

## Instalar Git

Descarga Git desde:

https://git-scm.com/downloads

Acepta las opciones predeterminadas del instalador.

Comprobar:

```powershell
git --version
```

---

## Instalar Windows Terminal (opcional)

Abre **Microsoft Store**.

Busca:

```
Windows Terminal
```

Pulsa **Instalar**.

Comprobar:

```powershell
wt
```

---

## Instalar Visual Studio Code (opcional)

Descarga Visual Studio Code desde:

https://code.visualstudio.com/

Acepta las opciones predeterminadas del instalador.

Durante la instalación es recomendable marcar:

- Add "Open with Code" action
- Add to PATH

Comprobar:

```powershell
code --version
```

Si el comando no funciona, reinicia la sesión de Windows y vuelve a intentarlo.


---

# 3. Instalar Raspberry Pi OS

Utilizar **Raspberry Pi Imager**.

En **Edit Settings** configurar, al menos:

- hostname
- usuario
- contraseña
- SSH
- autenticación mediante clave pública
- clave pública generada en Windows
- Wi-Fi (si procede)
- zona horaria
- distribución del teclado.

---

# 4. Primer acceso por SSH

Desde Windows:

```bash
ssh usuario@hostname
```

Comprobar que la autenticación mediante claves funciona correctamente.

---

# 5. Configurar la Raspberry Pi

1. Actualizar el sistema.

```bash
sudo apt update
sudo apt full-upgrade
sudo reboot
```

## Comprobar:

1. Usuario con permisos `sudo`
```bash
groups
```

Debe aparecer:

```text
sudo
```

Si no aparece:

```bash
sudo usermod -aG sudo <usuario>
```

Cierra la sesión y vuelve a entrar.

2. Hostname

```bash
hostname
```

Debe aparecer el nombre elegido durante la instalación, por ejemplo:

```text
raspi5
```

Para cambiarlo:

```bash
sudo raspi-config
```

Ir a:

```
System Options
    ↓
Hostname
```

3. Fecha y hora

Mostrar la fecha y la hora actuales:

```bash
date
```

Comprueba que son correctas.

4. Zona horaria

# Comprobar la zona horaria

Mostrar la configuración:

```bash
timedatectl
```

Debe aparecer una línea similar a:

```text
Time zone: Europe/Madrid
```

Para cambiarla:

```bash
sudo raspi-config
```

Ir a:

```
Localisation Options
    ↓
Timezone
```

5. Almacenamiento


Mostrar los dispositivos de almacenamiento:

```bash
lsblk
```

Mostrar el espacio disponible:

```bash
df -h
```

Comprueba que:

- aparece el SSD NVMe o la microSD esperados;
- el sistema ha arrancado desde el dispositivo correcto;
- hay suficiente espacio libre.

6. Conexión a Internet.

```bash
ping -c 4 google.com
```

7. Instalar las herramientas básicas:

- Git
- Vim
- Curl
- Tree
- etc.

```bash
sudo apt install -y git vim curl tree xclip
```

---

# 6. Instalar Tailscale en la Raspberry Pi

[Instalar Tailscale](Tailscale/instalar-tailscale-raspberry-pi-5.md)

Iniciar sesión.

Autorizar el dispositivo.

Comprobar que aparece en la red Tailscale.

---

# 7. Instalar Tailscale en Windows

[Instalar Tailscale](Tailscale/instalar-tailscale-windows-10.md)

Iniciar sesión con la misma cuenta.

Comprobar que Windows y la Raspberry Pi pueden verse entre sí.

---

# 8. Configurar Git para GitHub

En la Raspberry:

1. Configurar `user.name` y `user.email`

```bash
git config --global user.name "Tu nombre"
git config --global user.email "tu@email.com"
```

2. Generar un par de claves SSH propio

```bash
ssh-keygen -t ed25519 -C "tu@email.com"
```

Pulsa **Enter** para aceptar la ubicación por defecto.

Si no deseas proteger la clave con una contraseña, pulsa **Enter** dos veces más.

Comprobar:

```bash
ls ~/.ssh
```

Debe aparecer, al menos:

```text
id_ed25519
id_ed25519.pub
```

3. Añadir la clave pública a GitHub.

```bash
cat ~/.ssh/id_ed25519.pub | xclip
```

En GitHub:

```
Settings
    ↓
SSH and GPG keys
    ↓
New SSH key
```

Pega la clave y guarda los cambios.

---

Comprobar que puede hacerse:

```bash
git clone git@github.com:...
```

sin solicitar usuario ni contraseña.

---

# 9. Instalar Hugo

Descargar e instalar la versión oficial desde **GitHub Releases**.

Comprobar:

```bash
hugo version
```

---

# 10. Crear el sitio

Desde Windows, conectado mediante SSH a la Raspberry:

- crear el sitio Hugo
- instalar el tema
- personalizar la configuración inicial
- comprobar que el sitio compila correctamente.

---

# 11. Crear el repositorio en GitHub

## Crear un repositorio vacío

En GitHub:

```
New repository
```

Introduce un nombre.

No marques:

- Add a README
- Add .gitignore
- Choose a license

Pulsa **Create repository**.

---

## Conectar el repositorio local

En la Raspberry:

```bash
git init
git branch -M main
git remote add origin git@github.com:USUARIO/REPOSITORIO.git
```

Comprobar:

```bash
git remote -v
```

---

## Realizar el primer commit

```bash
git add .
git commit -m "Primer commit"
```

Comprobar:

```bash
git log --oneline
```

---

## Subir el proyecto

```bash
git push -u origin main
```

A partir de ahora bastará con:

```bash
git push
```

---

# 12. Publicar con Netlify

- conectar Netlify con GitHub
- seleccionar el repositorio
- configurar el despliegue
- realizar la primera publicación.

---

# 13. Verificar el flujo completo

Modificar una página.

Ejecutar:

```bash
git add .
git commit -m "Cambios"
git push
```

Comprobar que Netlify publica automáticamente la nueva versión del sitio.
