import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "../ui/button";

const CustomWalletButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="col-span-2"
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    style={{
                      boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
                    }}
                    className="glow-on-hover col-span-2 p-[7px] flex items-center justify-center uppercase w-full h-full after:!rounded-[2px] !rounded-[2px]"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    className="glow-on-hover col-span-2 p-[9.65px] flex items-center justify-center uppercase w-full h-full after:!rounded-[2px] !rounded-[2px]"
                    onClick={openChainModal}
                    style={{
                      boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
                    }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button>

                  <Button
                    className="glow-on-hover col-span-2 p-[9.65px] flex items-center justify-center uppercase w-full h-full after:!rounded-[2px] !rounded-[2px]"
                    onClick={openAccountModal}
                    type="button"
                    style={{
                      boxShadow: "-3px 8px 4px 0px rgba(0, 0, 0, 0.30)",
                    }}
                  >
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ""}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

export default CustomWalletButton;
