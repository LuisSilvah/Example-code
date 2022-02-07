import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState)

  useEffect(() => {
    const getUser = async () => {
      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`)

      setUser(data)
    }

    getUser()
  }, [props.match.params.id])

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1>{props.match.params.id}</h1>
        <Link to="/">Home</Link>

        <div className="container_card">
        <div class="user-card">
    <div class="user-cover">
      <img class="user-avatar" src={user.avatar_url} alt="user profile image" />
    </div>
    <div class="user-details">
      <div class="user-name hide-text">{user.name} - {user.followers}</div>
      <div class="user-email hide-text">{user.location}</div>
      <div class="user-bio hide-text">{user.bio}</div>
    </div>
    <button class="contact-user hide-text"><a href={`${user.html_url}`} target={'_blank'}>GitHub</a></button>
  </div>
    </div>
    </div>
      )
}