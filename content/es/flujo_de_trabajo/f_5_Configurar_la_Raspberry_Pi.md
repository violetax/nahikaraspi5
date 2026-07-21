---
title: "5. Configurar la Raspberry Pi"
weight: 50
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

4. Comprobar la zona horaria

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

- Terminator
- Git
- Vim
- Curl
- Tree
- etc.

```bash
sudo apt install -y git vim-gtk3 curl tree xclip terminator
```

Comprobar Vim:

```bash
vim --version | grep clipboard
```

Debe salir algo como: 

```text
+clipboard
+xterm_clipboard
```

---
