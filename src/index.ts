/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { resumeData, type ResumeData } from "./resumeData";
import { renderResume } from "./renderer";

async function jsonResumeHandler(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	return new Response(JSON.stringify(resumeData), {
		headers: {
			"Content-Type": "application/json",
			"Cache-Control": "public, max-age=3600",
		}
	});

}

async function renderResumeHandler(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
	const html = renderResume(resumeData);
	return new Response(html, {
		headers: {
			"Content-Type": "text/html",
			"Cache-Control": "public, max-age=3600",
		}
	});
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		if (request.method === "GET" && request.url.endsWith("/resume.json")) {
			return jsonResumeHandler(request, env, ctx);
		}

		if (request.method === "GET" && request.url.split("/")[3] == '') {
			
			return renderResumeHandler(request, env, ctx);
		}

		return new Response('Hello there, recruiter! Good that you\'re looking around.');
	},

} satisfies ExportedHandler<Env>;


