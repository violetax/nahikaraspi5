---
title: "Copiar una clave pública a la Raspberry Pi 5"
weight: 4
---

# Objetivo

Copiar la **clave pública** de un dispositivo (Windows, iPad, iPhone...) a la Raspberry Pi para que posteriormente pueda autorizarse y utilizarse para iniciar sesión mediante SSH.

---

# Requisitos

- Raspberry Pi encendida.
- Servicio SSH funcionando.
- Disponer de una clave pública (`*.pub`) en el dispositivo cliente.

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

## ¿Tengo una clave pública?

Debe existir un archivo que termine en:

```
.pub
```

Por ejemplo:

```
id_ed25519.pub
```

Si todavía no lo tienes, consulta el documento correspondiente a tu dispositivo:

- Generar claves SSH — Windows 10
- Generar claves SSH — iPad 11
- Generar claves SSH — iPhone 11

---

# Copiar la clave pública

## Desde Windows

Mostrar la clave:

```powershell
type $HOME\.ssh\id_ed25519.pub
```

Seleccionar toda la línea y copiarla al portapapeles.

---

## Desde iPad o iPhone

Abrir **Termius**.

Ir a:

```
Settings
    ↓
Keychain
```

Abrir la clave.

Pulsar:

```
Copy Public Key
```

---

# Pegar la clave en la Raspberry

Conéctate a la Raspberry mediante SSH utilizando un método que ya funcione (por ejemplo, contraseña o una clave ya autorizada).

Edita:

```bash
vim ~/.ssh/authorized_keys
```

Pega la clave pública en una línea nueva.

Guarda el archivo.

---

# Comprobar

Muestra el contenido del archivo:

```bash
cat ~/.ssh/authorized_keys
```

Debe aparecer la nueva clave pública.

---

# Problemas frecuentes

## No existe `authorized_keys`

Es normal.

Créalo:

```bash
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

---

## He copiado la clave privada

La clave privada **no** debe copiarse nunca a la Raspberry.

Comprueba que el archivo utilizado termina en:

```
.pub
```

o que has utilizado la opción **Copy Public Key** en Termius.
