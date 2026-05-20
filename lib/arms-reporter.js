// Telemetry disabled in mwmdeadpool fork — no RUM events sent to Alibaba.
// Original implementation reported every recall/add call to a Chinese log endpoint.
export async function reportRumEvent() {
  return undefined;
}
