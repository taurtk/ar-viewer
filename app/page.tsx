'use client'

import { useState, useEffect } from 'react'
import { Html5QrcodeScanner } from 'html5-qrcode'
import ARViewer from './components/ARViewer'

export default function Home() {
  const [modelUrl, setModelUrl] = useState<string | null>(null)

  useEffect(() => {
    if (modelUrl) return // Don't initialize scanner if we have a model URL

    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    )

    const handleScan = (decodedText: string) => {
      if (decodedText?.endsWith('.gltf') || decodedText?.endsWith('.glb')) {
        setModelUrl(decodedText)
        scanner.clear()
      }
    }

    const handleError = (err: any) => {
      console.error(err)
    }

    scanner.render(handleScan, handleError)

    // Cleanup
    return () => {
      scanner.clear().catch(console.error)
    }
  }, [modelUrl])

  return (
    <main className="min-h-screen">
      {!modelUrl ? (
        <div className="p-4">
          <h1 className="text-2xl font-bold text-center mb-4">AR QR Scanner</h1>
          <div id="qr-reader" className="w-full max-w-lg mx-auto" />
        </div>
      ) : (
        <ARViewer modelUrl={modelUrl} />
      )}
    </main>
  )
}

