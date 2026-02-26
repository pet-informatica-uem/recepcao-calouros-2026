import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useMemo, useRef } from "react";

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

export default function Html5QrcodePlugin(props: Html5QrcodePluginProps) {
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  // callbacks atualizados sem reiniciar scanner
  const successRef = useRef(props.qrCodeSuccessCallback);
  const errorRef = useRef(props.qrCodeErrorCallback);

  useEffect(() => {
    successRef.current = props.qrCodeSuccessCallback;
    errorRef.current = props.qrCodeErrorCallback;
  }, [props.qrCodeSuccessCallback, props.qrCodeErrorCallback]);

  // só muda quando config “real” mudar
  const config = useMemo(() => {
    const c: any = {};
    if (props.fps) c.fps = props.fps;
    if (props.qrbox) c.qrbox = props.qrbox;
    if (props.aspectRatio) c.aspectRatio = props.aspectRatio;
    if (props.disableFlip !== undefined) c.disableFlip = props.disableFlip;
    return c;
  }, [props.fps, props.qrbox, props.aspectRatio, props.disableFlip]);

  const verbose = props.verbose === true;

  useEffect(() => {
    let cancelled = false;

    const start = async () => {
      // limpa scanner anterior (se existir)
      if (scannerRef.current) {
        try {
          await scannerRef.current.clear();
        } catch {}
        scannerRef.current = null;
      }

      // limpa DOM pra evitar duplicação
      const el = document.getElementById(QR_SCANNER_REGION_ID);
      if (el) el.innerHTML = "";

      const scanner = new Html5QrcodeScanner(QR_SCANNER_REGION_ID, config, verbose);
      scannerRef.current = scanner;

      if (cancelled) return;

      scanner.render(
        (decodedText, result) => successRef.current(decodedText, result),
        (msg, err) => errorRef.current?.(msg, err)
      );
    };

    start();

    return () => {
      cancelled = true;
      const current = scannerRef.current;
      scannerRef.current = null;

      current?.clear().catch(() => {});
      const el = document.getElementById(QR_SCANNER_REGION_ID);
      if (el) el.innerHTML = "";
    };
  }, [config, verbose]); // ✅ NÃO depende de props/callbacks

  return <div id={QR_SCANNER_REGION_ID} />;
}