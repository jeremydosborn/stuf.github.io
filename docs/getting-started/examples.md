# Build examples

The examples show how STUF concepts fit together.

## Publisher example

A publisher example should demonstrate how metadata and target artifacts are prepared for verification.

    cargo run -p stuf-examples

## Embedded target

Install the target:

    rustup target add thumbv7m-none-eabi

Build:

    cargo build --target thumbv7m-none-eabi

## Example goals

- show the trust anchor
- show metadata chain verification
- show target authorization
- show target bytes checked by hash and length
- show failure paths clearly
