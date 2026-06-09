# Verification flow

A profile-specific verifier should make each trust transition explicit.

## Generic flow

    1. Load trust anchor
    2. Verify top-level metadata
    3. Check signatures and thresholds
    4. Check expiry and version rules
    5. Verify delegated metadata if required
    6. Authorize target metadata
    7. Verify target bytes by hash and length
    8. Return Verified<Target>

## TUF-oriented flow

    Root
      ↓
    Timestamp
      ↓
    Snapshot
      ↓
    Targets
      ↓
    Verified artifact

## Failure behavior

Verification should fail closed.

Common failures:

- missing role
- invalid signature
- expired metadata
- unexpected version
- hash mismatch
- length mismatch
- unsupported profile rule
- malformed canonical encoding
