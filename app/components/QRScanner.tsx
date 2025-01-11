'use client'

import { useEffect, useRef } from 'react'
import QrScanner from 'qr-scanner'

interface QRScannerProps {
  onScan: (result: string) => void
}

export default function QRScanner({ onScan }: QRScannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(
        videoRef.current,
        (result) => {
          onScan(result.data)
          qrScanner.destroy()
        },
        {
          returnDetailedScanResult: true,
        }
      )

      qrScanner.start()

      return () => {
        qrScanner.destroy()
      }
    }
  }, [onScan])

  return (
    <div className="w-full max-w-md">
      <video ref={videoRef} className="w-full h-auto" />
    </div>
  )
}

