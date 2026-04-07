import React from 'react'

export function DashboardDescription() {
  return (
    <div
      style={{
        marginTop: '2rem',
        padding: '1.5rem',
        borderRadius: '8px',
        border: '1px solid rgba(255,255,255,0.1)',
        backgroundColor: 'rgba(255,255,255,0.05)',
        color: 'rgba(255,255,255,0.75)',
        lineHeight: '1.7',
        fontSize: '0.9rem',
      }}
    >
      <h2 style={{ marginTop: 0, color: 'white', fontSize: '1.1rem' }}>
        Welcome to the Hartman Ely Investments CMS
      </h2>
      <p style={{ marginTop: '0.5rem' }}>
        This panel controls all editable content on{' '}
        <strong style={{ color: 'white' }}>hartmanely.com</strong>. Here's where
        to find everything:
      </p>

      <h3 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
        Collections
      </h3>
      <ul style={{ marginTop: 0, paddingLeft: '1.25rem' }}>
        <li>
          <strong style={{ color: 'white' }}>Projects</strong> — Add, edit, or
          remove individual projects. Each project has a hero image, thumbnail
          (used in grids and navigation), gallery, description, awards, and more.
          Set the <em>Order</em> field to control the display order on listing
          pages.
        </li>
        <li style={{ marginTop: '0.4rem' }}>
          <strong style={{ color: 'white' }}>Media</strong> — Upload and manage
          all images used across the site.
        </li>
      </ul>

      <h3 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '0.25rem' }}>
        Globals
      </h3>
      <ul style={{ marginTop: 0, paddingLeft: '1.25rem' }}>
        <li>
          <strong style={{ color: 'white' }}>Home Page</strong> — Controls the
          hero image, headline, mission statement, about block, and portfolio
          category cards on the homepage.
        </li>
        <li style={{ marginTop: '0.4rem' }}>
          <strong style={{ color: 'white' }}>About Page</strong> — Controls the
          hero image, body text, and team member profiles on the About page.
        </li>
        <li style={{ marginTop: '0.4rem' }}>
          <strong style={{ color: 'white' }}>Category Pages</strong> — Sets the
          hero image for the All Projects, Redevelopment, Consulting, and
          Renewable Energy listing pages.
        </li>
      </ul>
    </div>
  )
}
