---
title: "11. Crear el repositorio en GitHub"
weight: 110
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

