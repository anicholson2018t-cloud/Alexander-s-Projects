# Installing Node.js

ClockFunction requires Node.js to run.

---

## Windows

1. Visit the Node.js website:
   https://nodejs.org

2. Download the **LTS (Long-Term Support)** version.

3. Open the downloaded installer.

4. Follow the installation wizard:
   - Click **Next**
   - Accept the licence agreement
   - Leave the default options selected
   - Click **Install**

5. Once installed, open **Command Prompt**.

6. Check the installation:

```bash
node -v
```

7. You should see a version number (for example `v22.x.x`).

---

## macOS

1. Visit the Node.js website:
   https://nodejs.org

2. Download the **LTS** installer for macOS.

3. Open the downloaded `.pkg` file.

4. Follow the installation wizard.

5. Open **Terminal**.

6. Check the installation:

```bash
node -v
```

7. If a version number appears, Node.js has been installed successfully.

---

## Linux

### Ubuntu / Debian

Open Terminal and run:

```bash
sudo apt update
sudo apt install nodejs npm
```

Check the installation:

```bash
node -v
```

---

### Fedora

```bash
sudo dnf install nodejs npm
```

---

### Arch Linux

```bash
sudo pacman -S nodejs npm
```

---

## Verify Installation

To confirm Node.js is working, run:

```bash
node -v
npm -v
```

Both commands should display version numbers.

---

## Running ClockFunction

Open a terminal in the ClockFunction folder and run:

```bash
node ClockFunction.js
```
