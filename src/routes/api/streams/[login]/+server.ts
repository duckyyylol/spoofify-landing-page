import { PRIVATE_TWITCH_CLIENT_SECRET } from '$env/static/private';
import { apiResponse } from '$lib/util';
import { json } from '@sveltejs/kit';
import axios from 'axios';
import type { Auth } from 'duckylib';

export const GET = async ({params, url}): Promise<Response> => {
    let username = params.login;
    if(!url.searchParams.has("client_id")) return json(apiResponse(null));
    let clientId = url.searchParams.get("client_id");
    console.log(clientId)
    if(!clientId) return json(apiResponse(null));

    let param = new URLSearchParams();
    param.append("client_id", clientId);
    param.append("client_secret", PRIVATE_TWITCH_CLIENT_SECRET);
    param.append("grant_type", "client_credentials");
    
    let token = await axios.post(`https://id.twitch.tv/oauth2/token`, param);
    console.log("TOKEN", token)
    if(!token || token.status !== 200 || !token.data?.access_token) return json(apiResponse(null));

    let stream = await axios.get(`https://api.twitch.tv/helix/streams?user_login=${username}`, {headers: {'Client-Id': clientId, 'Authorization': `Bearer ${token.data.access_token}`}});

    return json(apiResponse(stream.data?.data?.[0] || null));
}