---
title: "Generar claves SSH — iPad 11"
weight: 2
---

# Objetivo

Generar un par de claves SSH **Ed25519** que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.

---

# Requisitos

- iPad con iPadOS.
- Conexión a Internet.
- Una aplicación SSH.

---

# Cómo cumplir los requisitos

## ¿Tengo una aplicación SSH?

Busca en la pantalla de inicio:

- **Termius**
- **Blink Shell**

Si tienes cualquiera de las dos, el requisito está cumplido.

---

## No tengo ninguna

Abre la **App Store**.

Busca:

```
Termius
```

Instálala.

> En esta guía se utilizará **Termius**.

---

# Generar las claves

Abre **Termius**.

Ve a:

```
Settings
    ↓
Keychain
    ↓
+
```

Selecciona:

```
Generate Key
```

Tipo de clave:

```
Ed25519
```

Asigna un nombre, por ejemplo:

```
iPad 11
```

Pulsa **Save**.

---

# Comprobar

En **Keychain** debe aparecer una nueva clave llamada, por ejemplo:

```
iPad 11
```

Ábrela.

Debe existir una opción similar a:

```
Public Key
```

o

```
Copy Public Key
```

La clave se ha generado correctamente.

---

# ¿Qué significan esas claves?

## Clave privada

La guarda Termius.

No debe exportarse ni compartirse.

---

## Clave pública

Es la que deberá copiarse posteriormente a la Raspberry Pi.

Puede copiarse al portapapeles desde la propia aplicación.

---

# Problemas frecuentes

## No aparece "Generate Key"

Comprueba que estás en **Settings → Keychain**.

---

## He generado una clave RSA

No pasa nada, pero para esta guía se recomienda **Ed25519**.

Puedes eliminar la clave RSA y crear una nueva Ed25519.
