import React from "react";


interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

interface StepProps {
  stepNumber: React.ReactNode;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText?: string;
  buttonAction?: () => void;
}

// Enhanced theme colors with professional gradients
const colors = {
  primary: "#96ea63",
  primaryLight: "#b3f085",
  primaryDark: "#7bc94a",
  primaryGlow: "rgba(150, 234, 99, 0.15)",
  secondary: "#a6a7ad",
  background: "#07070a",
  paper: "#0d0e14",
  cardBg: "rgba(13, 14, 20, 0.6)",
  textPrimary: "#ffffff",
  textSecondary: "#a6a7ad",
  textTertiary: "#7a7b85",
  grey500: "#212429",
  divider: "rgba(150, 234, 99, 0.2)",
  border: "rgba(255, 255, 255, 0.08)",
  shadow: "rgba(0, 0, 0, 0.3)",
};

// Professional step number icons
const NumberOneIcon: React.FC<IconProps> = ({ width = 64, height = 64 }) => (
  <div
    style={{
      width: width,
      height: height,
      borderRadius: "16px",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "700",
      color: "#1e2f14",
      fontFamily: "Bitcount Single, monospace",
      boxShadow: `0 8px 32px ${colors.primaryGlow}, 0 4px 16px rgba(0, 0, 0, 0.2)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
        borderRadius: "16px",
      }}
    />
    <span style={{ position: "relative", zIndex: 1 }}>01</span>
  </div>
);

const NumberTwoIcon: React.FC<IconProps> = ({ width = 64, height = 64 }) => (
  <div
    style={{
      width: width,
      height: height,
      borderRadius: "16px",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "700",
      color: "#1e2f14",
      fontFamily: "Bitcount Single, monospace",
      boxShadow: `0 8px 32px ${colors.primaryGlow}, 0 4px 16px rgba(0, 0, 0, 0.2)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
        borderRadius: "16px",
      }}
    />
    <span style={{ position: "relative", zIndex: 1 }}>02</span>
  </div>
);

const NumberThreeIcon: React.FC<IconProps> = ({ width = 64, height = 64 }) => (
  <div
    style={{
      width: width,
      height: height,
      borderRadius: "16px",
      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "700",
      color: "#1e2f14",
      fontFamily: "Bitcount Single, monospace",
      boxShadow: `0 8px 32px ${colors.primaryGlow}, 0 4px 16px rgba(0, 0, 0, 0.2)`,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
        borderRadius: "16px",
      }}
    />
    <span style={{ position: "relative", zIndex: 1 }}>03</span>
  </div>
);

const Step: React.FC<StepProps> = ({
  stepNumber,
  icon,
  title,
  description,
  buttonText,
  buttonAction,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "32px",
        marginBottom: "80px",
        position: "relative",
        padding: "32px",
        backgroundColor: colors.cardBg,
        backdropFilter: "blur(20px)",
        border: `1px solid ${colors.border}`,
        borderRadius: "20px",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(-2px)";
        target.style.boxShadow = `0 20px 40px ${colors.shadow}, 0 8px 32px ${colors.primaryGlow}`;
        target.style.borderColor = colors.primary;
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget as HTMLDivElement;
        target.style.transform = "translateY(0)";
        target.style.boxShadow = "none";
        target.style.borderColor = colors.border;
      }}
    >
      {/* Step Number */}
      <div style={{ flexShrink: 0, marginTop: "4px" }}>{stepNumber}</div>

      {/* Content */}
      <div style={{ flex: 1 }}>
        {/* Icon and Title Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "16px",
          }}
        >
          {icon}
          <div>
            <h3
              style={{
                fontFamily: "Bitcount Single, monospace",
                fontSize: "24px",
                fontWeight: "600",
                color: colors.textPrimary,
                margin: 0,
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: "Bitcount Single, monospace",
            fontSize: "16px",
            fontWeight: "400",
            lineHeight: "1.6",
            color: colors.textSecondary,
            margin: "0 0 24px 0",
            maxWidth: "520px",
            letterSpacing: "0.01em",
          }}
        >
          {description}
        </p>

        {/* Button */}
        {buttonText && (
          <button
            style={{
              fontFamily: "Bitcount Single, monospace",
              fontSize: "16px",
              fontWeight: "600",
              background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
              color: "#1e2f14",
              border: "none",
              borderRadius: "12px",
              padding: "14px 28px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              textTransform: "none",
              boxShadow: `0 4px 16px ${colors.primaryGlow}`,
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = "translateY(-2px)";
              target.style.boxShadow = `0 8px 24px ${colors.primaryGlow}`;
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLButtonElement;
              target.style.transform = "translateY(0)";
              target.style.boxShadow = `0 4px 16px ${colors.primaryGlow}`;
            }}
            onClick={buttonAction}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%)",
                borderRadius: "12px",
              }}
            />
            <span style={{ position: "relative", zIndex: 1 }}>
              {buttonText}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

const HowToGetPunk: React.FC = () => {
  const handleDownloadMetaMask = () => {
    window.open("https://metamask.io/download/", "_blank");
  };

  const steps: StepProps[] = [
    {
      stepNumber: <NumberOneIcon width={64} height={64} />,
      icon: <img src="/images/metamask-fox.png" alt="MetaMask Fox" width={48} height={48} />,
      title: "Download and Install MetaMask",
      description:
        "Download and install the MetaMask browser extension. This secure wallet will allow you to interact with Ethereum-based applications and manage your digital assets safely.",
      buttonText: "Download MetaMask",
      buttonAction: handleDownloadMetaMask,
    },
    {
      stepNumber: <NumberTwoIcon width={64} height={64} />,
      icon: <img src="/images/ethereum-diamond.png" alt="MetaMask Fox" width={48} height={48} />,
      title: "Purchase Ethereum (ETH)",
      description:
        "Fund your MetaMask wallet with Ethereum. You can buy ETH directly through MetaMask using various payment methods, or transfer from another wallet or exchange.",
    },
    {
      stepNumber: <NumberThreeIcon width={64} height={64} />,
      icon: <img src="/images/ethereum-diamond.png" alt="MetaMask Fox" width={48} height={48} />,
      title: "Start Trading CryptoPunks",
      description:
        "With MetaMask connected and funded, you can now browse, bid on, buy, and sell CryptoPunks directly through our marketplace interface. Your wallet will handle all transactions securely.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: colors.background,
        backgroundImage:
          "radial-gradient(circle at 20% 80%, rgba(150, 234, 99, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(150, 234, 99, 0.02) 0%, transparent 50%)",
        color: colors.textPrimary,
        minHeight: "100vh",
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "80px",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontFamily: "Bitcount Single, monospace",
              fontSize: "48px",
              fontWeight: "700",
              lineHeight: "1.1",
              color: colors.textPrimary,
              marginBottom: "20px",
              letterSpacing: "-0.02em",
            }}
          >
            How do I get a{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CryptoPunk
            </span>
            ?
          </h1>

          <p
            style={{
              fontFamily: "Bitcount Single, monospace",
              fontSize: "18px",
              fontWeight: "400",
              color: colors.textSecondary,
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
              letterSpacing: "0.01em",
            }}
          >
            Follow these three simple steps to join the CryptoPunks community
            and start collecting these iconic digital collectibles.
          </p>
        </div>

        {/* Steps */}
        <div>
          {steps.map((step, index) => (
            <Step key={index} {...step} />
          ))}
        </div>

        {/* Footer Note */}
        <div
          style={{
            textAlign: "center",
            marginTop: "60px",
            padding: "32px",
            backgroundColor: colors.cardBg,
            backdropFilter: "blur(20px)",
            border: `1px solid ${colors.border}`,
            borderRadius: "16px",
          }}
        >
          <p
            style={{
              fontFamily: "Bitcount Single, monospace",
              fontSize: "14px",
              color: colors.textTertiary,
              margin: 0,
              lineHeight: "1.5",
            }}
          >
            💡 <strong>Pro Tip:</strong> Always verify URLs and contract
            addresses before making transactions. Keep your seed phrase secure
            and never share it with anyone.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToGetPunk;
