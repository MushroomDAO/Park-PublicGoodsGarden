# 06. Technical Architecture (技术架构)

本文档列出了实现 Public Good Park 愿景所需的核心技术组件及待办事项。

## 🏗️ Core Stack Components

### 1. Identity & Access (MySBT)
*   **Definition**: A non-transferable Soulbound Token (Park ID) representing user reputation and access rights.
*   **To-Do**:
    *   [ ] Deploy `ParkID` SBT contract (ERC-721/1155).
    *   [ ] Implement "Reputation Score" oracle to feed on-chain/off-chain activity data.
    *   [ ] Build "Gatekeeper" middleware to verify SBT before API calls. **(spec: [10. Ticket & Credential Design](10_Ticket_Credential_Design.md) §4.4)**

### 2. Billing & Paymaster (Gasless Gateway)
*   **Definition**: The "Box Office" that handles fiat/crypto conversion and Ticket burning.
*   **To-Do**:
    *   [ ] Integrate **Paymaster** (ERC-4337) to allow users to pay via stablecoins (USDC) or fiat (Stripe/Alipay), with backend automatically handling the Swap -> Stake -> Burn flow.
    *   [ ] Implement `verifySBT()` SDK function for Builders to check user status. **(seat model: [10. Ticket & Credential Design](10_Ticket_Credential_Design.md) §3)**
    *   [ ] Implement `chargeUser()` SDK function for incremental service fees.

### 3. The Vault (Regulation Hub)
*   **Definition**: The central treasury contract acting as a "Regulation Hub" (not a bank).
*   **To-Do**:
    *   [ ] **Inflow Logic**: Handle `Ticket Burn` and `Exit Fee` deposits.
    *   [ ] **Outflow Logic (Valve)**: Implement the algorithm to release tokens for `Infra Mining Rewards` based on `Cost Premium` (e.g., Cost * 1.2).
    *   [ ] **Safety Cap**: Circuit breaker to stop outflows if Vault/TotalSupply ratio drops below 10%.

### 4. Validator Network (Infra Layer)
*   **Definition**: Decentralized nodes providing compute/storage/signing services.
*   **To-Do**:
    *   [ ] Specify hardware requirements for "Community Nodes".
    *   [ ] Implement "Proof of Service" heartbeat mechanism to prevent lazy mining.
    *   [ ] Set up "Slashing" logic for downtime or malicious behavior (e.g., double signing).

### 5. Integration: MyTask 4-Corner Model
Connecting the micro-economy of specific applications to the macro-economy of Park.
*   **Sponsor/Tasker/Supplier/Jury**: Ensuring all roles hold Park Tickets (GT) as a baseline commitment.
*   **Dispute**: Integrating the Jury system as a Protocol Layer service available to other apps.
