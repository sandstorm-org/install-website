import { env, WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
  async fetch(request: Request) {
    const installScript = await env.ASSETS.fetch("https://install.sandstorm.org/install.sh");
    return new Response(installScript.body, {status: 200, headers: {"Content-Type": "text/x-shellscript",},});
  }
}