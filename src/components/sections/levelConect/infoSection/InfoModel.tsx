import { useState } from 'react'
import icon_fap from 'public/assets/icons/fap-logo.png'
import { FcGraduationCap } from 'react-icons/fc'
import { BsGithub } from 'react-icons/bs'
import { StartLevel } from 'src/components/sections/InfoPage'
import 'public/css/leave.css'
import 'public/css/leaveResponsive.css'
import TypeModel from 'src/types/infoModel'
import { Home } from 'src/components/home/Home'

export function InfoModel(Props: TypeModel): JSX.Element {
  const [useHome, setHome] = useState(false)
  const [infoPageStart, setInfopageStart] = useState(false)

  if (infoPageStart) return <StartLevel />

  if (useHome) return <Home />

  return (
    <>
      <section className="body-left">
        <div className="element-block">
          <span className="block-page"></span>
        </div>

        <div className="body-content space-top">
          <div className="element-circleTwo">
            <span className="circle-page"></span>
          </div>
          <div className="element-circleOne">
            <span className="circle-page"></span>
          </div>
          <a href="#">
            <img
              onClick={() => setHome(true)}
              className="logo_fap-top"
              src={icon_fap}
              alt="logo_fap"
            />
          </a>

          <img className="img_book" src={Props.icon_book} alt="img_book" />
          <h1 className="title-text">
            {Props.title_text} <br />
            <a
              href="https://github.com/Vavastype/smartphone_manual.git"
              target="_black"
            >
              <BsGithub className="github" />
            </a>
          </h1>
          <p className="show-text-start">{Props.opening}</p>
        </div>

        <div className="element-block-botton">
          <span className="block-page"></span>
        </div>
      </section>

      <section className="body-right">
        <div className="show-content">
          <a href="#">
            <img
              onClick={() => setHome(true)}
              className="logo_fap space-top"
              src={icon_fap}
              alt="logo_fap"
            />
          </a>

          <p className="show-text space-top">{Props.opening}</p>

          <div className="show-btn space-top">
            <p className="box-btn">
              <a
                href="#"
                className="btn-start btn-circle"
                onClick={() => setInfopageStart(true)}
              ></a>
              Começar
            </p>
          </div>

          <div className="space-top">
            <h2>Criadores:</h2>
            <ul className="student-authors">
              <li>
                <FcGraduationCap /> Name: Maycon (Roterista)
              </li>
              <li>
                <FcGraduationCap /> Name: Patrick (Roterista)
              </li>
              <li>
                <FcGraduationCap /> Name: Felipe (Roterista)
              </li>
              <li>
                <FcGraduationCap /> Name: Odilon (Roterista, Idealizador)
              </li>
              <li>
                <FcGraduationCap /> Name: Wagner (Desenvolvedor, Design)
              </li>
              <li>
                <FcGraduationCap /> Name: João (Roterista)
              </li>
              <li>
                <FcGraduationCap /> Name: Alan (Roterista)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
