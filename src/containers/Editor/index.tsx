import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Layout } from 'antd'
import { StoreContext } from 'stores'
import Text from './Elements/Text'
import Header from './Header'

import styles from './styles.module.scss'
import './test.css'

const HTMLForTest =
  '<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet">\n<!--<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">-->\n  \n<header>\n\t\t<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/ESS-Rewired-Landing-Page-header.png" alt="" id="banner-image">\n\t\t<div class="container">\n\t\t\t<i style="color: var(--secondary-color)" class="fa fa-map-marker"></i><div id="location-header">Multiple School Districts in Mississippi</div>\n\t\t</div>\n\t</header>\n\t\n\t<a href="https://rewired.solutions/link/to/questionnaire" class="primary-button">Join Us</a>\n\t\n\t<section>\n\t\t<div class="image-row">\n\t\t\t<div class="col-xs-12 col-sm-4 image-left-col">\n\t\t\t\t<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/left-image-1.png" class="side-image" alt="">\n\t\t\t</div>\n\t\t\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t\t\n\t\t\t<div id="text-block" class="col-xs-12 col-sm-6">\n\t\t\t\t<h2>Job Description</h2>\n\t\t\t\t\n\t\t\t\t<p>ESS, one of Forbes Magazine’s America’s Best Large Employers, is looking for motivated and passionate substitute teachers in multiple counties in Mississippi. An ESS substitute teacher assists with classroom instruction in the absence of a regular teacher. As a substitute teacher you will: </p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Provide meaningful instruction to students in assigned classrooms while regular teacher is absent</li>\n\t\t\t\t\t<li>Review and implement regular teacher’s routines, procedures, lesson plans, and curriculum objectives</li>\n\t\t\t\t\t<li>Establish and maintain a safe and orderly classroom environment</li>\n\t\t\t\t\t<li>Report any student injuries, illness, and serious discipline problems to school administration</li>\n\t\t\t\t\t<li>Perform other duties as directed by school administration</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t</div>\n\t</section>\n\t\n\t<section>\n\t\t<div class="image-row">\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t\t\n\t\t\t<div class="col-xs-12 col-sm-6">\n\t\t\t\t<h2>Required Skills</h2>\n\t\t\t\t\n\t\t\t\t<p>ESS is searching for motivated individuals <br>who have the skills necessary to do this job: </p>\n\t\t\t\t<ul class="box-list">\n\t\t\t\t\t<li>Passion for teaching</li>\n\t\t\t\t\t<li>Adaptability</li>\n\t\t\t\t\t<li>Interpersonal skills</li>\n\t\t\t\t\t<li>Accountability</li>\n\t\t\t\t\t<li>Confidence</li>\n\t\t\t\t\t<li>Communication</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t\t\n\t\t\t<div class="col-xs-12 col-sm-4 image-right-col">\n\t\t\t\t<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/right-image-1.png" class="side-image" alt="">\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t\n\t\n\t\n\t<section>\n\t\t<h2 class="text-center" style="width:100%">Minimum Requirements</h2>\n\t\t\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t\t<div class="col-xs-12 col-sm-10">\n\t\t\n\t\t\t\t<ul class="buckets">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<!--<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/cap.png" alt="">-->\n\t\t\t\t\t\t<i class="fas fa-graduation-cap"></i>\n\t\t\t\t\t\t<h4>Education</h4>\n\t\t\t\t\t\t<p>Requirements vary by district but start at High School Diploma or GED and require at most 60 college credits.</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<!--<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/thumbprint.png" alt="">-->\n\t\t\t\t\t  \t<i class="fas fa-fingerprint"></i>\n\t\t\t\t\t\t<h4>Background Check</h4>\n\t\t\t\t\t\t<p>Must pay for and complete FBI &amp; State Criminal Background Check</p>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<!--<img src="https://campaigns.rewired.solutions/_wss/clients/220/assets/heart.png" alt="">-->\n\t\t\t\t\t  \t<i class="fa fa-child"></i>\n\t\t\t\t\t\t<h4>DHS Child Maltreatment Screen</h4>\n\t\t\t\t\t\t<p>Must pay for and complete a DHS Child Maltreatment Screen</p>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t</section>\n\t\n\t\n\t<section>\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t\t<div class="col-xs-12 col-sm-10">\n\t\t\t\t<img class="full-width" src="https://campaigns.rewired.solutions/_wss/clients/220/assets/in-it-for-you.png" alt="">\n\t\t\t\t\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t\n\t\t\t\t<p>ESS strives to create a unique and rewarding experience for our valued employees. We’re committed to helping you succeed whether you’re a recent graduate looking to build experience for a career in education, a parent looking to work the hours your kids are in school, or a seasoned teacher looking to get back into the classroom. We offer great benefits to our employees as well!</p>\n\t\t\t\t\n\t\t\t\t<br>\n\t\t\t\t\n\t\t\t\t<div class="container" id="benefits">\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-xs-12 col-sm-4">\n\t\t\t\t\t\t\t<h4>Incentives</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Flexible Schedule</li>\n\t\t\t\t\t\t\t\t<li>Weekly Pay</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-12 col-sm-4">\n\t\t\t\t\t\t\t<h4>Health Care</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Medical</li>\n\t\t\t\t\t\t\t\t<li>Dental</li>\n\t\t\t\t\t\t\t\t<li>Vision</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-12 col-sm-4">\n\t\t\t\t\t\t\t<h4>Career Development</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>Training</li>\n\t\t\t\t\t\t\t\t<li>Ongoing Support</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class="row">\n\t\t\t\t\t\t<div class="col-xs-12 col-sm-4">\n\t\t\t\t\t\t\t<h4>Retirement Savings</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>401(k)</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="col-xs-12 col-sm-8">\n\t\t\t\t\t\t\t<h4>Career Growth</h4>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li>ESS substitutes are routinely hired by our partner districts for full-time positions</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class="col-xs-12 col-sm-1"></div>\n\t</section>\n\t\n\t\n\t<section> \n\t\t<div class="col-xs-12 col-sm-1"></div>\n\t\t<div class="col-xs-12 col-sm-10">\n\t\t\t<img class="full-width" src="https://campaigns.rewired.solutions/_wss/clients/220/assets/apply-today.png" alt="">\n\t\t\t\n\t\t\t<a id="apply-today-hover" href="https://rewired.solutions/link/to/questionnaire" class="secondary-button">Join Us</a>\n\t\t</div>\n\t\t<div class="col-xs-12 col-sm-1"></div>\n\t</section>'

class Builder extends Component {
  static contextType = StoreContext
  context!: React.ContextType<typeof StoreContext>

  componentDidMount() {
    this.renderElements()
  }

  renderElements = () => {
    const { blocks } = this.context.builder
    blocks.map(({ type, selector }) => {
      const domNode = document.querySelector(selector)

      switch (type) {
        case 'text':
          const html = domNode!.innerHTML
          return ReactDOM.render(<Text key={selector} html={html} selector={selector} />, domNode)
        default:
          return 'text'
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <Layout className={classNames('landing-layout', styles.landing)}>
          <Layout.Content>
            <div dangerouslySetInnerHTML={{ __html: HTMLForTest }}></div>
          </Layout.Content>
        </Layout>
      </>
    )
  }
}

export default Builder
