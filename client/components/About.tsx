import React from 'react'

export default function About() {
  return (
    <>
      <div className="aboutContainer">
        <h3>From diggers to development</h3>
        <div className="imgCV">
          <div>
            <img
              className="profile-img"
              src="/images/Cropped-Biani-Studio.jpg"
            ></img>
          </div>
          <div>
            <a href="/images/CVJuly2023.pdf" download="/images/CVJuly2023.pdf">
              <button className="cvLink">CV</button>
            </a>
          </div>
        </div>
        <p>
          After the first time I drove an excavator, I wanted to become an
          excavator operator. It takes a lot of hard work and a high level of
          skill to be regarded as an operator in the civil construction
          industry. The journey was a lot harder than I initially thought it
          would be but I put in the work and have been employed as an operator
          for the last 7 years. I still enjoy operating excavators, but I can’t
          see myself working in the construction industry for the rest of my
          life. I thought a lot about what I wanted out of my life and career
          and considered many options. One that kept on coming back to me was
          coding. I researched what is involved in coding, career paths and what
          the culture of the tech industry is like and was drawn towards it. I
          first tried my hand at coding on Free Code Camp and found that I
          really enjoyed the problem solving aspect of it and I was surprised at
          how rewarding it felt to write code. That was when I decided to sign
          up to Dev Academy for their full-stack bootcamp and I haven't looked
          back. I love the challenge of learning new concepts and how rewarding
          it is when I fully understand them. The more code I write, the more I
          enjoy it and want to pursue a career in software development.
        </p>
      </div>
    </>
  )
}
