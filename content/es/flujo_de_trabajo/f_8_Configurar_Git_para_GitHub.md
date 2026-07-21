---
title: "8. Configurar Git para GitHub"
weight: 80
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

