import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

export default function HomePage() {
  const userName = [
    {
        "login": "taniarascia",
        "id": 11951801,
        "node_id": "MDQ6VXNlcjExOTUxODAx",
        "avatar_url": "https://avatars.githubusercontent.com/u/11951801?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/taniarascia",
        "html_url": "https://github.com/taniarascia",
        "followers_url": "https://api.github.com/users/taniarascia/followers",
        "following_url": "https://api.github.com/users/taniarascia/following{/other_user}",
        "gists_url": "https://api.github.com/users/taniarascia/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/taniarascia/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/taniarascia/subscriptions",
        "organizations_url": "https://api.github.com/users/taniarascia/orgs",
        "repos_url": "https://api.github.com/users/taniarascia/repos",
        "events_url": "https://api.github.com/users/taniarascia/events{/privacy}",
        "received_events_url": "https://api.github.com/users/taniarascia/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Tania Rascia",
        "company": null,
        "blog": "https://www.taniarascia.com",
        "location": "Chicago",
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 47,
        "public_gists": 97,
        "followers": 11535,
        "following": 27,
        "created_at": "2015-04-14T22:48:45Z",
        "updated_at": "2021-07-13T02:40:19Z"
      },
      {
        "login": "LuisSilvah",
        "id": 79490427,
        "node_id": "MDQ6VXNlcjc5NDkwNDI3",
        "avatar_url": "https://avatars.githubusercontent.com/u/79490427?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/LuisSilvah",
        "html_url": "https://github.com/LuisSilvah",
        "followers_url": "https://api.github.com/users/LuisSilvah/followers",
        "following_url": "https://api.github.com/users/LuisSilvah/following{/other_user}",
        "gists_url": "https://api.github.com/users/LuisSilvah/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/LuisSilvah/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/LuisSilvah/subscriptions",
        "organizations_url": "https://api.github.com/users/LuisSilvah/orgs",
        "repos_url": "https://api.github.com/users/LuisSilvah/repos",
        "events_url": "https://api.github.com/users/LuisSilvah/events{/privacy}",
        "received_events_url": "https://api.github.com/users/LuisSilvah/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Luis Gustavo",
        "company": null,
        "blog": "",
        "location": "CAMPINAS - SP",
        "email": null,
        "hireable": null,
        "bio": "Developer(Front-end lover) learning more every day.",
        "twitter_username": null,
        "public_repos": 7,
        "public_gists": 0,
        "followers": 5,
        "following": 9,
        "created_at": "2021-02-23T01:28:43Z",
        "updated_at": "2021-12-16T19:33:18Z"
      }, 
      {
        "login": "car1nhanha",
        "id": 34972401,
        "node_id": "MDQ6VXNlcjM0OTcyNDAx",
        "avatar_url": "https://avatars.githubusercontent.com/u/34972401?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/car1nhanha",
        "html_url": "https://github.com/car1nhanha",
        "followers_url": "https://api.github.com/users/car1nhanha/followers",
        "following_url": "https://api.github.com/users/car1nhanha/following{/other_user}",
        "gists_url": "https://api.github.com/users/car1nhanha/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/car1nhanha/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/car1nhanha/subscriptions",
        "organizations_url": "https://api.github.com/users/car1nhanha/orgs",
        "repos_url": "https://api.github.com/users/car1nhanha/repos",
        "events_url": "https://api.github.com/users/car1nhanha/events{/privacy}",
        "received_events_url": "https://api.github.com/users/car1nhanha/received_events",
        "type": "User",
        "site_admin": false
      }
    ];


    
  
  return (
      <>
      <h1>Home Page</h1>
      <main>
      <h2>List of People</h2>
      <h5>Search The List:</h5>
      <input id="searchDir" type="search" placeholder="Search..."/>

      <ul id="people-list" className="people-list">
          {userName.map((user) => (
          <li key={user.id}><Link to={user.login} className="last-name">{user.login}</Link> on GitHub.</li>
          ))}
      </ul>
    </main>
      </>
  );
}
