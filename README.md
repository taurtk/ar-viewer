# AR QR Scanner

A web-based QR code scanner that can load and display 3D models (GLTF/GLB) in augmented reality using Three.js.

## Features

- QR Code scanning using HTML5 QR Code Scanner
- 3D model viewing with Three.js
- Support for GLTF/GLB file formats
- Interactive 3D model controls (orbit, pan, zoom)
- Responsive design
- Real-time model scaling and centering
- Error handling and user feedback

## Tech Stack

- Next.js 14
- TypeScript
- Three.js
- HTML5 QR Code Scanner
- TailwindCSS

## Prerequisites

- Node.js 18.17 or later
- npm or yarn

## Installation

1. Clone the repository:

git clone https://github.com/yourusername/ar-qr-scanner.git
cd ar-qr-scanner


bash
npm install


bash
npm install
bash
npm run dev


4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Allow camera access when prompted
2. Point your camera at a QR code containing a URL to a GLTF/GLB file
3. Once scanned, the 3D model will be loaded and displayed
4. Use mouse/touch controls to interact with the 3D model:
   - Left click/one finger: Rotate
   - Right click/two fingers: Pan
   - Scroll/pinch: Zoom

## Project Structure
