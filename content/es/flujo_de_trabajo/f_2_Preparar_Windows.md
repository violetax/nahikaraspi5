---
title: "2. Preparar Windows"
weight: 20
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

