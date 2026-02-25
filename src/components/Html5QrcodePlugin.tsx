import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useRef } from "react";

// Props interface
interface Html5QrcodePluginProps {
  fps?: number;
  qrbox?: number | { width: number; height: number };
  aspectRatio?: number;
  disableFlip?: boolean;
  verbose?: boolean;
  qrCodeSuccessCallback: (decodedText: string, result: any) => void;
  qrCodeErrorCallback?: (errorMessage: string, error: any) => void;
}

const QR_SCANNER_REGION_ID = "html5qr-code-full-region";

const createConfig = (props: Html5QrcodePluginProps) => {
  const config: any = {};
  if (props.fps) config.fps = props.fps;
  if (props.qrbox) config.qrbox = props.qrbox;
  if (props.aspectRatio) config.aspectRatio = props.aspectRatio;
  if (props.disableFlip !== undefined) config.disableFlip = props.disableFlip;
  return config;
};

const QRScanner = (props: Html5QrcodePluginProps) => {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const isMounted = useRef(true);

  useEffect(() => {
    const startScanning = async () => {
      const config = createConfig(props);
      const verbose = props.verbose === true;

      if (!props.qrCodeSuccessCallback) {
        throw new Error("qrCodeSuccessCallback is a required callback.");
      }

      const html5QrcodeScanner = new Html5QrcodeScanner(
        QR_SCANNER_REGION_ID,
        config,
        verbose
      );
      console.log("Rendering html5QrcodeScanner...");
      await html5QrcodeScanner.render(
        props.qrCodeSuccessCallback,
        props.qrCodeErrorCallback
      );
      return html5QrcodeScanner;
    };

    const initScanner = async () => {
      if (isMounted.current) {
        scannerRef.current = await startScanning();
      }
    };

    initScanner();

    return () => {
      isMounted.current = false;
      const clearScanner = async () => {
        try {
          if (scannerRef.current) {
            await scannerRef.current.clear();
            scannerRef.current = null;
          }
        } catch (error) {
          console.error("Failed to clear html5QrcodeScanner.", error);
        }
      };
      clearScanner();
    };
  }, [props]);

  return <div id={QR_SCANNER_REGION_ID} />;
};

export default QRScanner;