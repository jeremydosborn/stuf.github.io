# Embedded profile

The embedded profile is for constrained devices that need local verification before accepting an update.

## Target environment

- microcontrollers
- RTOS environments
- constrained Linux devices
- field hardware
- industrial equipment

## Design concerns

- small memory footprint
- predictable allocation behavior
- static trust anchors
- minimal parser surface
- no silent network trust
- explicit hash and length checks

## Example target

| Field | Value |
|---|---|
| Architecture | ARM Cortex-M |
| Example | LM3S6965EVB / QEMU |
| Goal | constrained firmware verification |
