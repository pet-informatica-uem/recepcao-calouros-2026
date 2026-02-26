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
    let isMounted = true;
    const scanner = new Html5QrcodeScanner(QR_SCANNER_REGION_ID, config, verbose);

    const startScanner = async () => {
      try {
        // Pequena pausa para garantir que o navegador liberou o DOM
        await new Promise((r) => setTimeout(r, 100));
        
        const container = document.getElementById(QR_SCANNER_REGION_ID);
        if (!container || !isMounted) return;

        // Limpa o lixo interno antes de renderizar
        container.innerHTML = "";

        scanner.render(
          (decodedText, result) => successRef.current(decodedText, result),
          (msg, err) => errorRef.current?.(msg, err)
        );
        scannerRef.current = scanner;
      } catch (err) {
        console.error("Erro ao iniciar o scanner:", err);
      }
    };

    startScanner();

    return () => {
      isMounted = false;
      if (scannerRef.current) {
        scannerRef.current.clear().catch((e) => console.warn("Erro no clear:", e));
        scannerRef.current = null;
      }
    };
  }, [config, verbose]); // ✅ NÃO depende de props/callbacks

  return <div id={QR_SCANNER_REGION_ID} />;
}