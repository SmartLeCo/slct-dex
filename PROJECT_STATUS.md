# SmartLeCo DEX — Project Status

Last updated: 2026-10-26
Status: PRODUCTION — LIVE AND TESTED

## 1. Project

- Project directory: ~/Projects/slct-dex
- GitHub repository: SmartLeCo/slct-dex
- Production URL: https://dex.smartleco.xyz
- Vercel team: smart-le-co-s-projects
- Vercel project: slct-dex
- Framework: Next.js 16.4.3
- LI.FI Widget: 4.10.3
- Network aggregation: LI.FI

## 2. Current production version — IMPORTANT

Production Git revision deployed:

896b4cf — Use injected MetaMask provider while preserving wallet connectors

Current development branch:

fix/metamask-mobile

This is the latest confirmed working production version.

IMPORTANT:
The main branch is NOT the current production version.
Do not assume main contains the latest DEX implementation.

Production deployment:
https://slct-3bgdzi6ts-smart-le-co-s-projects.vercel.app

Production domain:
https://dex.smartleco.xyz

## 3. Git branch history

main
- Original SmartLeCo DEX.
- LI.FI Widget 3.40.12.
- Historical implementation, before TRON/Stellar upgrade.
- Not the current production source.

feat/lifi-v4-tron-stellar
- Upgraded LI.FI Widget from v3 to v4.
- Added TRON, Stellar and other blockchain providers.
- Commit aa3b424.
- Successfully deployed and tested initially.
- MetaMask Mobile EVM connection issue discovered afterward.

fix/metamask-mobile
- Branched from feat/lifi-v4-tron-stellar.
- Current production branch.
- Commit 896b4cf.
- Fixed MetaMask Mobile connection problem.
- Confirmed working on iOS and Android.

Do not delete or merge branches without reviewing this file.

## 4. Wallet configuration — CRITICAL

The current working Ethereum provider uses:

EthereumProvider({
  walletConnect: true,
  coinbase: {
    appName: 'SmartLeCo DEX',
    appLogoUrl: 'https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png',
  },
  baseAccount: {
    appName: 'SmartLeCo DEX',
    appLogoUrl: 'https://smartleco.xyz/wp-content/uploads/2026/04/logo_SLC-100.png',
  },
  metaMask: false,
})

IMPORTANT:

- metaMask: false disables the separate MetaMask SDK connector.
- MetaMask remains available through Wagmi injected-provider discovery.
- This configuration fixed MetaMask Mobile on iOS and Android.
- Setting metaMask: true previously caused mobile connection problems.
- Do not change this configuration without testing desktop and mobile wallets.

Other providers:
- TronProvider()
- StellarProvider()
- SolanaProvider()
- BitcoinProvider()
- SuiProvider()

## 5. Verified wallet connections

PASS:
- MetaMask — desktop browser.
- Rabby — desktop browser.
- MetaMask — iPhone 8, internal browser.
- MetaMask — Android, internal browser.
- Trust Wallet — mobile internal browser.

Seven wallet options were displayed after the final configuration.

## 6. Verified swap operations

PASS:
- Real DITEX/SLCT swap using MetaMask on iPhone.
- Transaction completed successfully.
- SmartLeCo integrator fees calculated correctly.
- SmartLeCo integrator fees credited successfully.

LI.FI API tests:
- Polygon USDC -> SLCT: quote successful.
- TRON USDT -> Polygon USDC: quote successful.
- Stellar USDC -> Polygon USDC: supported connection confirmed.

NOT YET VERIFIED:
- Real TRON swaps with a TRON wallet.
- Real Stellar swaps with a Stellar wallet.
- Actual Stellar integrator fee settlement.
- End-to-end swaps through all other supported ecosystems.

## 7. Fees and referrals — DO NOT CHANGE

LI.FI Widget:
integrator="SmartLeCo-DEX"

Widget configuration:
feeConfig: { fee: 0.005 }

SmartLeCo integrator fee: 0.5%.

In verified quotes:
- SmartLeCo share: 0.5%.
- LI.FI share: 0.25%.
- Total LI.FI fixed fee: 0.75%.

Actual SmartLeCo fee settlement was confirmed
with a real DITEX/SLCT swap on iPhone.

Referral page:
https://smartleco.xyz/referral/

The existing two-level SmartLeCo referral model must be preserved.

## 8. Important application files

app/page.tsx
- Server entry point.

app/DexLoader.tsx
- Client-side dynamic loader.
- Prevents server-side window errors.

app/DexClient.tsx
- Main DEX interface.
- LI.FI configuration.
- Wallet providers.
- SmartLeCo fee configuration.
- Referral button.

package.json
package-lock.json
- Dependency definitions and versions.

## 9. Preview deployment history

Preview deployments are temporary Vercel deployments,
NOT separate Git branches.

Previous preview URLs:
- slct-hqzkkiuew-smart-le-co-s-projects.vercel.app
- slct-r7impvwcu-smart-le-co-s-projects.vercel.app

MetaMask Mobile displayed phishing/security warnings
for temporary Vercel Preview domains.

Do NOT assume those warnings indicate a problem
with the official production domain.

Avoid repeatedly creating temporary preview domains
for MetaMask Mobile testing.

No Cloudflare or DNS changes are needed for the
current working production domain.

## 10. Security status

Last npm audit production dependencies:
- Critical: 0
- High: 38
- Moderate: 8
- Low: 12

Warnings are primarily related to transitive dependencies
used by blockchain and wallet providers.

Important:
- These warnings have NOT been fully resolved.
- Do not claim that an npm audit pass has occurred.
- Avoid automatic npm audit fix --force.
- Do not blindly replace dependencies using overrides.
- Reassess security when updating LI.FI and providers.

## 11. Future development workflow

1. Read PROJECT_STATUS.md before changing code.
2. Confirm current Git branch and working tree.
3. Preserve production revision 896b4cf as the
   known-good reference as of 2026-10-26.
4. Do not assume main is current.
5. Keep SmartLeCo fees and integrator unchanged.
6. Preserve working MetaMask Mobile configuration.
7. Preserve all existing supported blockchain providers.
8. Preserve approved SmartLeCo design and original logos.
9. Run npm run build before deployment.
10. Test desktop and mobile wallet connections.
11. Test quote and fee calculations.
12. Commit changes before production deployment.
13. Deploy only after assessing risks.
14. Confirm new production deployment and update this file.

User workflow:
ONE TERMINAL COMMAND PER STEP.
Wait for actual Terminal output before the next step.

## 12. Current next priorities

- Do not modify the stable DEX unnecessarily.
- Verify TRON wallet and real swap when available.
- Verify Stellar wallet and real swap when available.
- Monitor LI.FI security and provider updates.
- Preserve production rollback capability.
- Eventually align Git main with tested production,
  but only as a deliberate separate operation.

## 13. WalletConnect fix — 2026-10-26

Current tested release commit: 4a21385
Git branch: main
Production: https://dex.smartleco.xyz

Problem:
- WalletConnect was displayed in the wallet list but clicking did nothing.
- No QR modal appeared.
- No relevant error appeared in Chrome Console.

Confirmed fix:
- Installed @walletconnect/ethereum-provider as a direct dependency.
- Configured EthereumProvider walletConnect with SmartLeCo Reown Project ID.
- Preserved metaMask: false to maintain working MetaMask Mobile connections.
- Preserved all other providers and SmartLeCo feeConfig: { fee: 0.005 }.

Verification:
- npm run build passed.
- WalletConnect QR modal opened on localhost.
- WalletConnect wallet connection and disconnection worked locally.
- WalletConnect QR modal opened on production.

Important:
- Do not remove @walletconnect/ethereum-provider.
- Do not replace walletConnect configuration with a bare true value.
- Do not re-enable MetaMask SDK without full mobile testing.
- Recheck WalletConnect, MetaMask Mobile, Rabby, swaps and fees after upgrades.

Current main branch contains the latest DEX implementation.

## 14. Stellar / LOBSTR verification — 2026-10-26

Status: WALLET CONNECTION VERIFIED ON PRODUCTION

Stellar integration:
- LI.FI Widget 4.10.3.
- @lifi/widget-provider-stellar.
- StellarProvider() is enabled.
- Stellar Wallets Kit uses Stellar PUBLIC network.
- LOBSTR is already included through LobstrModule().
- Freighter and other Stellar wallets are also included.

LOBSTR connection method:
- Install the official LOBSTR Signer browser extension.
- Link LOBSTR Signer to the existing mobile LOBSTR wallet.
- Open https://dex.smartleco.xyz in Chrome.
- Select Connect wallet -> LOBSTR.
- The integration uses @lobstrco/signer-extension-api.
- EVM WalletConnect is NOT required for this connection.

Production verification:
- LOBSTR extension detected: PASS.
- LOBSTR displayed as Installed: PASS.
- Stellar wallet connection: PASS.
- Stellar wallet disconnection: PASS.

NOT YET VERIFIED:
- Real Stellar -> Polygon swap.
- Stellar transaction signing through LI.FI.
- Cross-chain execution and receiving tokens.
- SmartLeCo integrator fee settlement on Stellar routes.

These transaction tests are intentionally postponed
until the user chooses to perform them.

IMPORTANT:
- No DEX code changes were needed for LOBSTR.
- Do not modify the working StellarProvider configuration unnecessarily.
- Do not mark Stellar swaps as verified until a real transaction succeeds.

Current main branch at this checkpoint: 818728e.
