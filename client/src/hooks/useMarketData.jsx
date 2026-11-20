import { useEffect, useState, useRef, useCallback } from "react";
import io from "socket.io-client";

const SOCKET_SERVER_URL = import.meta.env.VITE_SOCKET_SERVER_URL;
const SECRET_KEY = import.meta.env.VITE_MARKET_SECRET;

export default function useMarketData(symbols = ["GOLD"]) {
  const [marketData, setMarketData] = useState(null);
  const socketRef = useRef(null);

  const handleMarketData = useCallback((data) => {
    if (data?.symbol?.toLowerCase() === "gold") {
      setMarketData(data);
    }
  }, []);

  useEffect(() => {
    // console.log("📡 Connecting to WebSocket...");

    // Initialize socket connection
    socketRef.current = io(SOCKET_SERVER_URL, {
      query: { secret: SECRET_KEY },
      transports: ["websocket"],
      withCredentials: true,
    });

    const socket = socketRef.current;

    socket.on("connect", () => {
      // console.log("✅ Connected to WebSocket server");
      socket.emit("request-data", symbols);
    });

    socket.on("market-data", handleMarketData);
    socket.on("error", (error) => console.error("❌ WebSocket error:", error));

    return () => {
      // console.log("🔌 Disconnecting WebSocket...");
      if (socket) socket.disconnect();
    };
  }, [handleMarketData, symbols]);

  return { marketData };
}
