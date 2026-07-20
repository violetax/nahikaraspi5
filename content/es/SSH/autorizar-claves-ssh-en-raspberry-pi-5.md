---
title: "Autorizar claves SSH — Raspberry Pi 5"
weight: 5
---

# Objetivo

Permitir que uno o varios dispositivos (Windows, iPad, iPhone...) puedan iniciar sesión en la Raspberry Pi mediante SSH utilizando claves en lugar de una contraseña.

---

# Requisitos

- Raspberry Pi con SSH instalado y funcionando.
- Al menos una clave pública (`*.pub`) generada en el dispositivo cliente.

---

# Cómo cumplir los requisitos

## ¿Está funcionando SSH?

En la Raspberry, abre una terminal y ejecuta:

```bash
systemctl status ssh
```

### Si aparece

```
active (running)
```

El requisito está cumplido.

### Si aparece

```
inactive
```

Inicia el servicio:

```bash
sudo systemctl enable --now ssh
```

---

## ¿Dispongo de una clave pública?

La clave pública suele terminar en:

```
.pub
```

Por ejemplo:

```
id_ed25519.pub
```

Si todavía no la has generado, consulta el documento correspondiente al dispositivo cliente.

---

# Autorizar la clave

Abre una terminal en la Raspberry.

Comprueba que existe el directorio `.ssh`:

```bash
ls -ld ~/.ssh
```

Si no existe, créalo:

```bash
mkdir -p ~/.ssh
chmod 700 ~/.ssh
```

Edita el archivo:

```bash
vim ~/.ssh/authorized_keys
```

Pega la clave pública completa en una línea nueva.

Guarda el archivo.

---

# Comprobar permisos

Ejecuta:

```bash
chmod 600 ~/.ssh/authorized_keys
```

---

# Comprobar

Desde el dispositivo cliente, intenta conectarte:

```bash
ssh usuario@raspi
```

Si entra sin pedir la contraseña del usuario, la clave ha quedado autorizada correctamente.

---

# ¿Qué contiene `authorized_keys`?

Cada línea corresponde a un dispositivo autorizado.

Por ejemplo:

```text
ssh-ed25519 AAAAC3... Windows 10
ssh-ed25519 AAAAC3... iPad 11
ssh-ed25519 AAAAC3... iPhone 11
```

---

# Problemas frecuentes

## Sigue pidiendo contraseña

Comprueba que has copiado la **clave pública** (`*.pub`) y no la clave privada.

---

## He pegado varias veces la misma clave

No ocurre nada grave.

Puedes eliminar las líneas duplicadas y guardar el archivo.

---

## Quiero impedir el acceso a un dispositivo

Borra la línea correspondiente de `~/.ssh/authorized_keys`.

Ese dispositivo dejará de poder iniciar sesión mediante SSH.
