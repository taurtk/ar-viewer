declare module 'html5-qrcode' {
  export class Html5QrcodeScanner {
    constructor(
      elementId: string,
      config: {
        fps: number
        qrbox: { width: number; height: number }
      },
      verbose: boolean
    )
    render(
      successCallback: (decodedText: string, decodedResult: any) => void,
      errorCallback: (error: any) => void
    ): void
    clear(): Promise<void>
  }
} 