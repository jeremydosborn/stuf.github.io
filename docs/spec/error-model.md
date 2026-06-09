# Error model

STUF errors should be explicit enough to audit and compact enough for constrained profiles.

## Error categories

| Category | Example |
|---|---|
| Encoding | malformed canonical metadata |
| Signature | invalid signature or threshold failure |
| Expiry | metadata expired |
| Version | rollback or unexpected version |
| Target | hash or length mismatch |
| Profile | unsupported profile rule |
| Environment | missing clock or crypto provider |

## Design goal

Errors should support two modes:

1. detailed diagnostics for development and cloud profiles
2. compact codes for constrained embedded profiles

!!! tip
    A small error model is easier to embed, but too little information makes security review harder.
