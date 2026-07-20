---
title: "Instalar Tailscale — Raspberry Pi 5"
weight: 5
---

# Instalar Tailscale

## Requisitos

- Raspberry Pi OS instalado.
- Conexión a Internet.
- Usuario con permisos `sudo`.

## Instalar

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

## Conectar el equipo

```bash
sudo tailscale up
```

Se mostrará una URL.

Ábrela desde cualquier navegador, inicia sesión y autoriza la Raspberry.

## Comprobar

```bash
tailscale status
```

```bash
tailscale ip
```

La Raspberry ya puede utilizarse desde cualquier red.
