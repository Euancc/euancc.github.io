import React from 'react'
export default function Projects() {
  return (
    <>
      <h2>Here are some of the projects that I've worked on...</h2>
      <section className="link-sect">
        <div className="links">
          <h3>To-Do-To-Day</h3>
          <p className="script-txt">
            This is the final group project that I was involved in for Dev
            Academy. We wanted to build a task management app that was fun and
            easy to use. Having learned React in Dev Academy we used that along
            with SQL and typescript. I wanted to gain some moore exposure to
            Auth0 so I took the lead on implementing that which was a challenge
            because it then meant we had to apply some extra syntax to the rest
            of the code we wrote but I'm glad I did because I learned a lot in
            doing so.
          </p>
          <a target="_blank" href="https://to-do-to-day.pushed.nz/">
            <img className="link-img" src="/images/notepad.avif"></img>
          </a>
        </div>

        <div className="links">
          <h3>Surf-log</h3>
          <p className="script-txt">
            This is the my personal project that I started while I was at Dev
            Academy that combines my two passions of coding and surfing. I
            wanted an app where you can log information of your surf session
            against forecasted conditions so that you can make more informed
            decisions about where to surf according to the forecast. I have used
            Typescript, Javascript and React with SQL for the database. My
            learning objective was to focus on forms and I quickly learned how
            tricky they can be. Currently a work in progress.
          </p>
          <a target="_blank" href="http://surf-log.devacademy.online/">
            <img className="link-img" src="/images/wave.avif"></img>
          </a>
        </div>
      </section>
    </>
  )
}
