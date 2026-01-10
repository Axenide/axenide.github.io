+++
title = "Ax-Shell"
date = 2025-03-03
weight = 1
description = "Una shell *hackeable* para Hyprland, impulsada por Fabric."
path = "/es/ax-shell"

[taxonomies]
tags = ["dev", "wip"]
[extra]
no_header = true
banner = "1.png"
hide_banner = true
accent_color = "hsl(349.22, 100%, 40.39%)"
[extra.meta]
favicon = "favicon.svg"
+++

<img src="./ax-shell-banner.png" alt="Ambxst Logo" class="transparent drop-shadow no-hover" style="width: 100%;" />

<div align="center">
  
Una shell modificable para [Hyprland](https://hyprland.org/), impulsada por [Fabric](https://ffpy.org/).

</div>

{{ carousel(images=["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png"], interval=3000, style="margin: -2rem 0 -2rem 0") }}

<div align="center">
  {{ social_icon(icon="kofi_icon_bg", link="https://ko-fi.com/Axenide", size="32px", effect="zoom rotate", rotate="-15") }}
  {{ social_icon(icon="github_icon_bg", link="https://github.com/Axenide/Ax-Shell", size="32px", effect="zoom rotate", rotate="-15") }}
  {{ social_icon(icon="discord_icon_bg", link="https://discord.com/invite/gHG9WHyNvH", size="32px", effect="zoom rotate", rotate="-15") }}
</div>

## Instalación

> [!NOTE]
> Necesitas una instalación funcional de Hyprland.
> Esto también habilitará NetworkManager si aún no está activo.

### Arch Linux

> [!TIP]
> ¡Este comando también sirve para actualizar una instalación existente!

**Ejecuta el siguiente comando en tu terminal una vez hayas iniciado sesión en Hyprland:**
```bash
curl -fsSL get.axeni.de/ax-shell | bash
```

**Alternativa:**

```bash
curl -fsSL [https://raw.githubusercontent.com/Axenide/Ax-Shell/main/install.sh](https://raw.githubusercontent.com/Axenide/Ax-Shell/main/install.sh) | bash
```

### NixOS

[poogas](https://github.com/poogas) ha creado un flake para Ax-Shell.
👉 [¡Pruébalo!](https://github.com/poogas/Ax-Shell) 👈

### Instalación Manual

1. Instala las dependencias:
* [Fabric](https://github.com/Fabric-Development/fabric)
* [fabric-cli](https://github.com/Fabric-Development/fabric-cli)
* [Gray](https://github.com/Fabric-Development/gray)
* [Matugen](https://github.com/InioX/matugen)
* `awww`
* `brightnessctl`
* `cava`
* `cliphist`
* `ddcutil`
* `gnome-bluetooth-3.0`
* `gobject-introspection`
* `gpu-screen-recorder`
* `grimblast`
* `hypridle`
* `hyprlock`
* `hyprpicker`
* `hyprshot`
* `hyprsunset`
* `imagemagick`
* `libnotify`
* `networkmanager`
* `network-manager-applet`
* `nm-connection-editor`
* `noto-fonts-emoji`
* `nvtop`
* `playerctl`
* `swappy`
* `tesseract`
* `tesseract-data-eng`
* `tesseract-data-spa`
* `tmux`
* `unzip`
* `upower`
* `uwsm`
* `vte3`
* `webp-pixbuf-loader`
* `wl-clipboard`
* Dependencias de Python:
* PyGObject
* ijson
* numpy
* pillow
* psutil
* pywayland
* requests
* setproctitle
* toml
* watchdog


* Fuentes (automatizado en la primera ejecución):
* Zed Sans
* Tabler Icons




2. Descarga y ejecuta Ax-Shell:
```bash
git clone [https://github.com/Axenide/Ax-Shell.git](https://github.com/Axenide/Ax-Shell.git) ~/.config/Ax-Shell
uwsm -- app python ~/.config/Ax-Shell/main.py > /dev/null 2>&1 & disown

```



<h2><sub><img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /></sub> Hoja de Ruta (Roadmap)</h2>

* [x] Lanzador de aplicaciones (App Launcher)
* [x] Gestor de Bluetooth
* [x] Calculadora
* [x] Calendario
* [x] Gestor de Portapapeles
* [x] Selector de Color
* [x] Interfaz de usuario personalizable
* [x] Dashboard
* [x] Dock
* [x] Selector de Emojis
* [x] Tablero Kanban
* [x] Gestor de Red
* [x] Notificaciones
* [x] OCR
* [x] Pines
* [x] Gestor de Energía
* [x] Menú de Apagado
* [x] Grabador de Pantalla
* [x] Captura de Pantalla
* [x] Ajustes
* [x] Bandeja del Sistema (System Tray)
* [x] Terminal
* [x] Gestor de Sesiones Tmux
* [x] Verificador de actualizaciones
* [x] Diseño Vertical
* [x] Selector de Fondos de Pantalla
* [x] Vista previa de áreas de trabajo (Workspaces)
* [x] Soporte para múltiples monitores
* [ ] Asistente de IA Multimodal
* [ ] OSD
* [ ] Gestor de OTP
