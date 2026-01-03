+++
title = "Ambxst"
date = 2025-12-31
weight = 1
description = "Una shell ***Ax**tremadamente* personalizable."
path = "/es/ambxst"

[taxonomies]
tags = ["dev", "wip"]
[extra]
no_header = true
[extra.meta]
favicon = "favicon.ico"
+++

<img src="./ambxst-banner.png" alt="Ambxst Logo" class="transparent drop-shadow no-hover" style="max-width: 500px; width: 100%;" />

<div align="center">

Una shell ***Ax**tremadamente* personalizable.

</div>

{{ carousel(images=["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png"], interval=3000, style="margin: -2rem 0 -2rem 0") }}

<div align="center">
  {{ social_icon(icon="kofi_icon_bg", link="https://ko-fi.com/Axenide", size="32px", effect="zoom rotate", rotate="-15") }}
  {{ social_icon(icon="github_icon_bg", link="https://github.com/Axenide/Ambxst", size="32px", effect="zoom rotate", rotate="-15") }}
  {{ social_icon(icon="discord_icon_bg", link="https://discord.com/invite/gHG9WHyNvH", size="32px", effect="zoom rotate", rotate="-15") }}
</div>

## Instalación

{% crt() %}
```bash
curl -L get.axeni.de/ambxst | sh
```
{% end %}

> [!WARNING]
> Ambxst está actualmente en desarrollo temprano.

## Características
- [x] Componentes personalizables
- [x] Temas
- [x] Integración con el sistema
- [x] Lanzador de aplicaciones
- [x] Gestor de portapapeles
- [x] Notas rápidas (y no tan rápidas)
- [x] Gestor de wallpapers
- [x] Selector de emojis
- [x] Gestor de sesiones de [tmux](https://github.com/tmux/tmux)
- [x] Monitor del sistema
- [x] Control multimedia
- [x] Sistema de notificaciones
- [x] Gestor de Wi-Fi
- [x] Gestor de Bluetooth
- [x] Mezclador de audio
- [x] Integración con [EasyEffects](https://github.com/wwmm/easyeffects)
- [x] Captura de pantalla
- [x] Grabación de pantalla
- [x] Selector de color
- [x] OCR
- [x] Escáner de códigos QR y códigos de barras
- [x] "Espejo" (webcam)
- [x] Modo juego
- [x] Modo noche
- [x] Gestor de perfiles de energía
- [x] Asistente de IA
- [x] Clima
- [x] Calendario
- [x] Menú de apagado
- [x] Gestión de espacios de trabajo
- [x] Soporte para diferentes layouts (dwindle, master, scrolling, etc.)
- [x] Soporte para múltiples monitores
- [x] Atajos de teclado personalizables
- [ ] Sistema de plugins y extensiones
- [ ] Compatibilidad con otros compositores Wayland

## ¿Y los *docs*?

Quiero liberar esto antes de fin de año, así que tendrás que esperar un poco para la documentación completa. u_u
Sin embargo, lo más importante que debes saber es lo siguiente:
- La configuración principal se encuentra en `~/.config/Ambxst`.
- Puedes preguntar lo que sea en el [servidor de Discord de Axenide](https://discord.com/invite/gHG9WHyNvH) o en las [discusiones de GitHub](https://github.com/Axenide/Ambxst/discussions).

> [!CAUTION]
> Los paquetes instalados via Nix tomarán prioridad sobre los del sistema. Tenlo en cuenta si tienes conflictos de versiones.
