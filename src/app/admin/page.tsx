"use client";

import React, { useEffect, useRef, useState } from "react";

import Html5QrcodePlugin from "@/src/components/Html5QrcodePlugin";

const registraPresenca = async (codigo: string, password: string) => {

  const response = await fetch("/api/presenca-proxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: password,
    },
    body: JSON.stringify({ codigoPresenca: codigo, senha: password }),
  });

  if (response.ok) {
    console.log("✅ presença registrada código: ", codigo);
    alert("✅ Presença registrada com sucesso! ✅");
  } else {
    console.error("❌ falha ao registrar presença");
    alert("❌ Falha ao registrar presença! ❌");
  }
};

const ProtectedPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const lastScannedRef = useRef<string | null>(null);

  const correctUsername = "admin"; // Change to your desired username
  const correctPassword = "pet1235"; // Change to your desired password

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === correctUsername && password === correctPassword) {
      const expiry = new Date().getTime() + 30 * 60 * 1000; // 30 minutes from now
      localStorage.setItem(
        "auth",
        JSON.stringify({ username, password, expiry })
      );
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Invalid username or password.");
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      const { username, password, expiry } = JSON.parse(auth);
      if (new Date().getTime() < expiry) {
        if (username === correctUsername && password === correctPassword) {
          setUsername(username);
          setPassword(password);
          setIsAuthenticated(true);
        }
      } else {
        localStorage.removeItem("auth"); // Expired
      }
    }
    setIsCheckingAuth(false); // Done checking
  }, []);

  if (isAuthenticated) {
    const onScanSuccess = (decodedText: string, result: any) => {
      if (lastScannedRef.current === decodedText) {
        // Prevent repeated calls for the same QR code
        return;
      }

      lastScannedRef.current = decodedText;

      registraPresenca(decodedText, password);
    };

    const onScanError = (errorMessage: string, error: any) => {
      return;
    };

    return (
      <div className="w-4/5 mx-auto mt-4 text-white text-2xl">
        <Html5QrcodePlugin
          fps={10}
          qrbox={{ width: 250, height: 250 }}
          disableFlip={false}
          verbose={false}
          qrCodeSuccessCallback={onScanSuccess}
          qrCodeErrorCallback={onScanError}
        />
      </div>
    );
  }

  if (isCheckingAuth) {
    return;
  }

  return (
    <div className="w-1/2 mx-auto flex flex-col items-center">
      <h1 className="my-4 text-2xl text-white">
        Please log in to access this page
      </h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2 ">
          <label className="text-l text-white">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-2 ">
          <label className="text-l text-white">Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded w-[80px] mt-4"
          type="submit"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default ProtectedPage;