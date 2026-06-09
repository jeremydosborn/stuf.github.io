# Threat model

STUF assumes that update infrastructure can be partially compromised.

## Attacker capabilities

An attacker may be able to:

- observe update traffic
- modify network responses
- compromise a mirror
- replay old metadata
- serve different metadata to different clients
- attempt downgrade attacks
- attempt freeze attacks
- compromise some signing keys
- exploit memory pressure on constrained devices

## Security objectives

| Threat | Desired result |
|---|---|
| Unauthorized artifact | rejected |
| Expired metadata | rejected |
| Hash mismatch | rejected |
| Length mismatch | rejected |
| Role confusion | rejected |
| Unsupported profile assumption | rejected |
| Malformed canonical metadata | rejected |

## Security boundary

STUF should make one thing clear:

> An artifact is not trusted because it was downloaded. It is trusted only after a profile-specific metadata chain authorizes it and the artifact bytes match the authorized target description.

## Out of scope

STUF does not by itself solve secure boot, device identity, hardware roots of trust, remote attestation, malware detection, rollout orchestration, or key ceremony governance.
