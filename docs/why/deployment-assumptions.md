# Deployment assumptions

STUF separates verification from deployment.

## STUF assumes

- artifacts can be addressed by metadata
- trusted root material exists
- a profile defines verification rules
- clients can reject unauthorized artifacts
- operators can update trusted metadata safely

## STUF does not assume

- mirrors are trusted
- networks are trusted
- every client has abundant memory
- every deployment uses the same protocol
- every platform can use the same crypto bindings

## Practical deployment pattern

    Publisher
      -> signs metadata
    Repository
      -> distributes metadata and artifacts
    Mirror or staging layer
      -> serves bytes
    Client verifier
      -> checks authorization
    Installer

The mirror distributes bytes. The verifier decides trust.
