"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const config = getDefaultConfig({
  appName: "KrypDraw",
  projectId: "1c63175b5810d03b94e1e67885b6e7ae",
  chains: [
    mainnet as any,
    polygon as any,
    optimism as any,
    arbitrum as any,
    base as any,
    zora as any,
  ],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

const HomePage = (props: any) => {
  const { session, children } = props;
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <SessionProvider
            refetchInterval={5 * 60}
            refetchOnWindowFocus={true}
            session={session}
          >
            {children}
          </SessionProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default HomePage;
