import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = process.env.APP_TOKEN;

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const searchParams = req.nextUrl.searchParams;
  const query = searchParams.get("searchterm");
  const page = searchParams.get("page") || 1;
  const per_page = 10;

  console.log("❤️❤️ ~ file: route.ts:12 ~ GET ~ searchterm:", query);

  try {
    if (!query) {
      return new NextResponse("Missing search term", { status: 400 });
    }

    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`,
      {
        method: "GET",
        headers,
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching users:", error);

    return new NextResponse("Internal error", { status: 500 });
  }
}

/*
"login": "mbostock",
"id": 230541,
"node_id": "MDQ6VXNlcjIzMDU0MQ==",
"avatar_url": "https://avatars.githubusercontent.com/u/230541?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/mbostock",
"html_url": "https://github.com/mbostock",
"followers_url": "https://api.github.com/users/mbostock/followers",
"following_url": "https://api.github.com/users/mbostock/following{/other_user}",
"gists_url": "https://api.github.com/users/mbostock/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mbostock/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mbostock/subscriptions",
"organizations_url": "https://api.github.com/users/mbostock/orgs",
"repos_url": "https://api.github.com/users/mbostock/repos",
"events_url": "https://api.github.com/users/mbostock/events{/privacy}",
"received_events_url": "https://api.github.com/users/mbostock/received_events",
"type": "User",
"site_admin": false,
"score": 1

    const body = await req.json();
    const { searchterm } = body;
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchterm}`,
      {
        method: "GET",
        headers,
      }
    );
*/
