---
title: "Generar claves SSH — Windows 10"
weight: 1
---
# Objetivo

Generar un par de claves SSH **Ed25519** que permitirá autenticarse en la Raspberry Pi sin introducir la contraseña en cada conexión.

---

# Requisitos

- Windows 10.
- PowerShell.
- Cliente OpenSSH.

---

# Cómo cumplir los requisitos

## ¿Tengo PowerShell?

Pulsa **Inicio** y escribe:

```
PowerShell
```

Si aparece **Windows PowerShell**, el requisito está cumplido.

---

## ¿Tengo OpenSSH?

Abrir PowerShell y ejecutar:

```powershell
ssh -V
```

### Si aparece algo parecido a

```text
OpenSSH_for_Windows_9.x
```

El requisito está cumplido.

### Si aparece

```text
'ssh' no se reconoce...
```

Hay que instalar el cliente OpenSSH.

Ir a

```
Configuración
    ↓
Aplicaciones
    ↓
Características opcionales
```

Buscar

```
OpenSSH Client
```

Instalarlo.

Cerrar PowerShell.

Abrirlo otra vez.

Repetir

```powershell
ssh -V
```

hasta obtener la versión.

---

# Generar las claves

```powershell
ssh-keygen -t ed25519
```

Aceptar la ubicación propuesta.

Elegir una *passphrase* o pulsar Enter para dejarla vacía.

---

# Comprobar

```powershell
dir $HOME\.ssh
```

Debe aparecer:

```
id_ed25519
id_ed25519.pub
```

---

# ¿Qué significan esos archivos?

## id_ed25519

Es la **clave privada**.

Nunca debe enviarse a nadie.

Nunca debe copiarse a otro ordenador.

---

## id_ed25519.pub

Es la **clave pública**.

Es la que deberá copiarse posteriormente a la Raspberry Pi.

---

# Problemas frecuentes

## No existe la carpeta `.ssh`

Es normal.

`ssh-keygen` la crea automáticamente.

---

## Ya existen claves

No las sobrescribas salvo que quieras reemplazarlas deliberadamente.
