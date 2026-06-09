# Fleet staging mirrors

Fleet systems often need staged update delivery.

## Example flow

    Publisher signs metadata
      ↓
    Fleet operator stages metadata and artifact
      ↓
    Vehicle, device, or client verifies metadata chain
      ↓
    Client verifies target bytes
      ↓
    Update accepted or rejected

## Pilot questions

- Can a fleet operator stage updates without becoming a trusted signer?
- Can devices reject stale or mismatched artifacts?
- Can audit logs show which metadata authorized each update?
- Can constrained devices verify enough locally?
