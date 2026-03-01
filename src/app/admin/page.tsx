"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

import Html5QrcodePlugin from "@/src/components/Html5QrcodePlugin";

const ATIVIDADES = [
  { id: "apresentacao-tarde", label: "Apresentação de Depto. e Curso (tarde)" },
  { id: "apresentacao-noite", label: "Apresentação de Depto. e Curso (noite)" },
  { id: "caminhada", label: "Caminhada" },
] as const;

type AtividadeId = (typeof ATIVIDADES)[number]["id"];

const registraPresenca = async (codigo: string, password: string, atividade: AtividadeId) => {
  const response = await fetch("/api/presenca-proxy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: password,
    },
    body: JSON.stringify({ codigoPresenca: codigo, senha: password, atividade, timestamp: new Date().toISOString() }),
  });

  if (response.ok) {
    console.log("✅ presença registrada código: ", codigo);
    alert("✅ Presença registrada com sucesso! ✅");
  } else {
    const err = await response.json().catch(() => null);
    console.error("❌ falha ao registrar presença", err);
    alert("❌ Falha ao registrar presença! ❌");
  }
};

export default function ProtectedPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const [atividade, setAtividade] = useState<AtividadeId>(ATIVIDADES[0].id);

  const qrBoxConfig = useMemo(() => ({ width: 250, height: 250 }), []);

  // trava por (atividade + codigo)
  const lastScannedRef = useRef<string | null>(null);

  const correctUsername = process.env.NEXT_PUBLIC_ADMIN_USERNAME;
  const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

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

  const onScanSuccess = (decodedText: string) => {
    const key = `${atividade}:${decodedText}`;
    if (lastScannedRef.current === key) return;

    lastScannedRef.current = key;
    registraPresenca(decodedText, password, atividade);
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
    const onScanError = () => {};

    return (
      <div className="w-4/5 mx-auto mt-4 text-white text-2xl">
        <div className="mb-4 flex flex-col gap-2">
          <label className="text-lg">Atividade atual</label>
          <select
            className="text-black bg-white p-2 rounded w-full max-w-xl"
            value={atividade}
            onChange={(e) => {
              setAtividade(e.target.value as AtividadeId);
            }}
          >
            {ATIVIDADES.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
        </div>

        <Html5QrcodePlugin
          fps={10}
          qrbox={qrBoxConfig}
          disableFlip={false}
          qrCodeSuccessCallback={onScanSuccess} // O plugin usará successRef.current
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
          <label className="text-lg text-white">Username: </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
        <div className="mb-2 ">
          <label className="text-lg text-white">Password: </label>
          <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="rounded bg-white text-black outline-none focus:ring-2 focus:ring-blue-500"
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